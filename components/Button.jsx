import Link from "next/link";

/** Primary (blue gradient) or ghost (glass) button/link. */
export default function Button({ href, variant = "primary", children, external = false, className = "" }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}
