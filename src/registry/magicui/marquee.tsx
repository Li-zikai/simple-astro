import * as React from "react";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style,
  ...props
}: MarqueeProps) => {
  const containerClass = [
    "marquee-container",
    reverse ? "marquee-reverse" : "",
    pauseOnHover ? "marquee-pause-on-hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      {...props}
      className={containerClass}
      style={{
        "--duration": "40s",
        "--gap": "24px",
        ...style,
      } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="marquee-scroll-group">
            {children}
          </div>
        ))}
    </div>
  );
};
