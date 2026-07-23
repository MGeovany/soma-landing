import Link from "next/link";

/** Wordmark: a small glass tile with an accent remote glyph + "SOMA". */
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span
        className="grid place-items-center rounded-[10px] text-white"
        style={{
          width: 30,
          height: 30,
          background: "linear-gradient(135deg, var(--accent-bright), var(--accent))",
          boxShadow: "0 4px 14px var(--accent-glow)",
        }}
      >
        {/* remote icon */}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <rect x="7" y="2" width="10" height="20" rx="4" stroke="white" strokeWidth="1.8" />
          <circle cx="12" cy="7" r="1.4" fill="white" />
          <line x1="12" y1="12" x2="12" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-xl font-bold tracking-wide text-textPrimary">SOMA</span>
    </Link>
  );
}
