import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.08]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-sm text-sm text-textMuted">
            A private Samsung Smart TV remote for Mac and iPhone. No cloud, no account.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/support" className="text-textMuted hover:text-textPrimary">
            Support
          </Link>
          <Link href="/privacy" className="text-textMuted hover:text-textPrimary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-textMuted hover:text-textPrimary">
            Terms of Use
          </Link>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-5">
        <p className="mono mx-auto max-w-6xl px-5 text-xs text-textSubtle">
          © 2026 Soma · Not affiliated with or endorsed by Samsung.
        </p>
      </div>
    </footer>
  );
}
