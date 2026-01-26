import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

const baseClasses =
  'rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:pointer-events-none disabled:opacity-50'

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-8 py-3 text-[10px] uppercase tracking-widest',
  md: 'px-6 py-3 text-sm uppercase tracking-wide',
  lg: 'px-7 py-4 text-base uppercase tracking-wide',
}

const secondarySizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-3 text-[10px] uppercase tracking-widest',
  md: 'px-6 py-3 text-sm uppercase tracking-wide',
  lg: 'px-7 py-4 text-base uppercase tracking-wide',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-[1.02] shadow-[0_0_30px_rgba(37,99,235,0.4)]',
  secondary: '',
  ghost:
    'bg-transparent text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white transition-colors',
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type,
  ...props
}: ButtonProps) => {
  if (variant === 'secondary') {
    return (
      <button
        type={type ?? 'button'}
        className={cx(
          'relative group overflow-hidden rounded-xl p-[1px] transform transition-transform active:scale-95',
          baseClasses,
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 bg-white/10 rounded-xl" />
        <span
          className={cx(
            'relative flex items-center justify-center gap-2 h-full w-full bg-[#09090b] rounded-xl transition-all duration-300 group-hover:bg-[#09090b]/90',
            secondarySizeClasses[size]
          )}
        >
          <span className="text-zinc-400 font-medium transition-colors relative z-20 group-hover:text-white">
            {children}
          </span>
        </span>
      </button>
    )
  }

  return (
    <button
      type={type ?? 'button'}
      className={cx(
        'inline-flex items-center justify-center gap-2',
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
