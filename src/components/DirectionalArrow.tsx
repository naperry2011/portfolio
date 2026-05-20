interface DirectionalArrowProps {
  className?: string;
}

/**
 * Inline SVG "view direction" arrow (⟶) in the accent color.
 * Used as a row marker in the NOW frame. Crisp at any size, can carry
 * the accent color via currentColor, and avoids the rendering
 * inconsistencies of a unicode glyph across fonts.
 */
export default function DirectionalArrow({ className = '' }: DirectionalArrowProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 12"
      fill="none"
      className={`inline-block w-6 h-3 ${className}`}
      style={{ color: 'var(--accent)' }}
    >
      <path
        d="M0 6 H22 M16 1 L22 6 L16 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
