import Link from "next/link";

/**
 * Brand mark for the header: app icon + wordmark.
 * The wordmark is set in type rather than using /logo.png, whose baked-in
 * near-black background reads as a dark slab on the light canvas.
 */
export default function Logo() {
  return (
    <Link href="/" aria-label="Soma home" className="flex items-center gap-2.5">
      <img
        src="/app-icon.png"
        alt=""
        aria-hidden="true"
        className="h-8 w-8 rounded-[9px] shadow-raisedSm"
      />
      <span
        className="text-lg font-bold tracking-[0.28em] text-textPrimary"
        style={{ color: "var(--text-primary)" }}
      >
        SOMA
      </span>
    </Link>
  );
}
