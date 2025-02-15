import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'content']
  }
});

export async function GET() {
  try {
    console.log('Fetching Medium feed...');
    const feed = await parser.parseURL('https://medium.com/feed/@naperry2011');
    
    console.log('Feed data:', {
      title: feed.title,
      itemCount: feed.items?.length,
    });

    if (!feed.items?.length) {
      console.log('No items found in feed');
      return NextResponse.json({ error: 'No posts found' }, { status: 404 });
    }

    const posts = feed.items.map(item => {
      // Extract a clean excerpt from the content
      const contentText = item.content || item['content:encoded'] || '';
      const cleanContent = contentText
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ') // Replace HTML entities
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

      // Get first 150 characters for excerpt
      const excerpt = cleanContent.length > 150 
        ? cleanContent.substring(0, 150) + '...'
        : cleanContent;

      return {
        title: item.title || 'Untitled Post',
        content: excerpt, // Use the cleaned excerpt
        thumbnail: extractThumbnail(item),
        link: item.link,
        pubDate: item.pubDate,
        categories: item.categories || ['Technology'],
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch posts',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

// Helper function to extract thumbnail
function extractThumbnail(item: any) {
  // Try to get image from content
  const imgMatch = item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch) return imgMatch[1];

  // Fallback to default image
  return '/blog/default-thumbnail.jpg';
} 