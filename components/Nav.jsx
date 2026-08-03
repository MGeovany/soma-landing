import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#tvs", label: "Samsung & LG" },
  { href: "/support", label: "Support" },
];

export default function Nav() {
  return (
    <header className="neu-header sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-textMuted transition-colors hover:text-textPrimary"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Button href="/#download" className="btn-store">
          <img src="/app-icon.png" alt="" aria-hidden="true" className="h-5 w-5 rounded-[6px]" />
          <span>Get Soma</span>
          <span className="text-sm text-white/80">↗</span>
        </Button>
      </nav>
    </header>
  );
}
