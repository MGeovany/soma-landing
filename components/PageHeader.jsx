export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <div className="py-14 text-center">
      {kicker && <div className="stat-label mb-3">{kicker}</div>}
      <h1 className="text-4xl font-bold tracking-tight text-textPrimary md:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-3 max-w-xl text-textMuted">{subtitle}</p>}
      <hr className="neu-divider mx-auto mt-12 max-w-3xl" />
    </div>
  );
}
