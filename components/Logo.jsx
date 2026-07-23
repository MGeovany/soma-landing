import Link from "next/link";

/** App icon used as the brand logo. */
export default function Logo({ size = 34 }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon.png"
        alt="Soma"
        width={size}
        height={size}
        className="rounded-[9px] border border-white/10"
      />
    </Link>
  );
}
