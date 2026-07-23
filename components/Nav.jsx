import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
];

export default function Nav() {
  return (
    <header className="glass-header sticky top-0 z-50">
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
        <Button href="/#download">Get Soma</Button>
      </nav>
    </header>
  );
}
