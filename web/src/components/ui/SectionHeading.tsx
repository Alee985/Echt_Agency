import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  dark = false,
}: {
  eyebrow?: string
  title: string
  align?: 'center' | 'left'
  dark?: boolean
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold tracking-[0.2em] uppercase ${
            dark ? 'text-brand-blue-pale' : 'text-brand-blue'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full ${
          dark ? 'bg-brand-cyan' : 'bg-brand-blue'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </Reveal>
  )
}
