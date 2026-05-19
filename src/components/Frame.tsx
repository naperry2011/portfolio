import { ReactNode, HTMLAttributes } from "react";

interface FrameProps extends HTMLAttributes<HTMLElement> {
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  /** Hide the top hairline rule (e.g. when stacking frames). */
  noTopRule?: boolean;
  /** Hide the bottom hairline rule. */
  noBottomRule?: boolean;
  /** Render as <section> instead of the default <article>. */
  as?: "article" | "section" | "div";
  children: ReactNode;
}

/**
 * Title-block frame motif (architectural drawing block).
 * Corners hold metadata labels; content sits between two hairlines.
 */
export default function Frame({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  noTopRule = false,
  noBottomRule = false,
  as: Tag = "article",
  children,
  className = "",
  ...rest
}: FrameProps) {
  return (
    <Tag className={`relative ${className}`} {...rest}>
      {/* Top corner labels */}
      {(topLeft || topRight) && (
        <div className="flex items-end justify-between pb-3">
          <span className="label">{topLeft}</span>
          <span className="label label-ink">{topRight}</span>
        </div>
      )}

      {!noTopRule && <div className="rule" />}

      <div className="py-10 sm:py-14">{children}</div>

      {!noBottomRule && <div className="rule" />}

      {(bottomLeft || bottomRight) && (
        <div className="flex items-start justify-between pt-3">
          <span className="label">{bottomLeft}</span>
          <span className="label">{bottomRight}</span>
        </div>
      )}
    </Tag>
  );
}
