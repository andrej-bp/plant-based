type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle: string
}

function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-neutral-600">{subtitle}</p>
    </div>
  )
}

export default SectionHeader
