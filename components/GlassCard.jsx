export default function GlassCard({ hero = false, className = "", children }) {
  return (
    <div className={`glass-card ${hero ? "glass-card--hero" : ""} ${className}`}>
      {children}
    </div>
  );
}
