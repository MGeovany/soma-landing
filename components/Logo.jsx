import Link from "next/link";

/** Brand mark for the header. */
export default function Logo() {
  return (
    <Link href="/" aria-label="Soma home" className="flex items-center">
      <img src="/logo.png" alt="Soma" className="h-8 w-auto object-contain" />
    </Link>
  );
}
