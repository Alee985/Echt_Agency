import { motion, useMotionValue, useSpring } from 'motion/react'
import type { PropsWithChildren, MouseEvent } from 'react'

type Props = PropsWithChildren<{
  href: string
  variant?: 'primary' | 'ghost'
  className?: string
  onClick?: () => void
}>

const variants = {
  primary:
    'bg-gradient-to-r from-brand-blue via-brand-blue to-brand-purple bg-[length:160%_100%] bg-left text-white shadow-lg shadow-brand-purple/30 hover:bg-right hover:shadow-brand-cyan/40',
  ghost: 'border border-white/30 text-white hover:border-brand-cyan hover:text-brand-cyan',
}

/** A CTA button that nudges toward the cursor on hover — subtle, desktop-only feel (harmless no-op on touch). */
export default function MagneticButton({
  href,
  variant = 'primary',
  className = '',
  onClick,
  children,
}: Props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`inline-block rounded-full px-7 py-3 text-sm font-semibold transition-all duration-500 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}
