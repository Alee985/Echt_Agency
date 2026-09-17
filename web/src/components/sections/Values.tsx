import { BadgeCheck, PiggyBank, Rocket } from 'lucide-react'
import { values } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [BadgeCheck, Rocket, PiggyBank]
const accents = [
  { badge: 'bg-brand-blue', ring: 'hover:shadow-brand-blue/15' },
  { badge: 'bg-brand-teal', ring: 'hover:shadow-brand-teal/15' },
  { badge: 'bg-brand-purple', ring: 'hover:shadow-brand-purple/15' },
]

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="animate-blob-slow pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading eyebrow="What Drives Us" title={values.heading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            const accent = accents[i % accents.length]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  className={`h-full rounded-2xl border border-black/5 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${accent.ring}`}
                >
                  <div
                    className={`mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full text-white ${accent.badge}`}
                  >
                    <Icon size={22} strokeWidth={2.25} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-slate">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
