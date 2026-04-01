interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, subtitle, light }: SectionHeadingProps) => (
  <div className="text-center mb-12">
    {label && (
      <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">{label}</p>
    )}
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 max-w-2xl mx-auto text-sm sm:text-lg px-4 sm:px-0 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
