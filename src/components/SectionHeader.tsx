import { tokens } from '../styles/tokens'

type SectionHeaderProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'center' | 'left'
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  eyebrowClassName?: string
}

const SectionHeader = ({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  eyebrowClassName,
}: SectionHeaderProps) => {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left'

  return (
    <header className={`flex flex-col ${alignment} ${className ?? ''}`}>
      {eyebrow ? (
        <span
          className={`${tokens.typeScale.eyebrow} text-neutral-500 ${eyebrowClassName ?? ''}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`${tokens.typeScale.h2} ${tokens.fonts.heading} text-white ${titleClassName ?? ''}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 ${tokens.typeScale.caption} text-neutral-500 ${
            subtitleClassName ?? ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}

export default SectionHeader
