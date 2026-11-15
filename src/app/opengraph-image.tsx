import { ImageResponse } from 'next/og';

export const alt = 'Cyberlounge: the quest log of Nicholas Perry';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const INK = '#111111';
const PAPER = '#fbfbf9';
const RED = '#d42a20';
const SUN = '#ffd23f';

/* Share card: speed lines, the name panel on its red shadow, and a NOW PLAYING strip */
export default function OpengraphImage() {
  const lines = Array.from({ length: 36 }, (_, i) => i * 10);

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#ffffff', border: `14px solid ${INK}` }}>
        {lines.map((deg) => (
          <div
            key={deg}
            style={{
              position: 'absolute',
              left: 380,
              top: 300,
              width: 1400,
              height: 7,
              background: INK,
              transformOrigin: '0 50%',
              transform: `rotate(${deg}deg)`,
            }}
          />
        ))}

        <div style={{ position: 'absolute', left: 96, top: 106, width: 800, height: 330, background: RED, display: 'flex' }} />
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 90,
            width: 800,
            height: 330,
            background: PAPER,
            border: `6px solid ${INK}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 44px',
          }}
        >
          <div style={{ fontSize: 26, letterSpacing: 4, color: '#55555f', display: 'flex' }}>FILE 01 / PLAYER</div>
          <div style={{ fontSize: 124, fontWeight: 900, lineHeight: 1, letterSpacing: -4, color: INK, display: 'flex', marginTop: 10 }}>
            NICHOLAS
          </div>
          <div style={{ fontSize: 124, fontWeight: 900, lineHeight: 1, letterSpacing: -4, color: INK, display: 'flex' }}>PERRY</div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 462,
            width: 1012,
            height: 96,
            background: INK,
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px',
          }}
        >
          <div style={{ fontSize: 26, letterSpacing: 3, color: SUN, display: 'flex', marginRight: 28, flexShrink: 0 }}>NOW PLAYING</div>
          <div style={{ fontSize: 25, color: PAPER, display: 'flex' }}>Card games, a reading journal, and an app that pays you to poop.</div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: 60,
            top: 70,
            background: SUN,
            border: `6px solid ${INK}`,
            padding: '14px 26px',
            fontSize: 34,
            fontWeight: 900,
            letterSpacing: 2,
            color: INK,
            display: 'flex',
            transform: 'rotate(4deg)',
          }}
        >
          CYBERLOUNGE
        </div>
      </div>
    ),
    size,
  );
}
