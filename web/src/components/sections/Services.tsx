import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Briefcase,
  GraduationCap,
  Languages,
  MessagesSquare,
  Search,
} from 'lucide-react'
import { services } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons: Record<string, typeof Languages> = {
  translation: Languages,
  'data-analytics': BarChart3,
  k12: GraduationCap,
  corporate: Briefcase,
  automation: Bot,
  chatbot: MessagesSquare,
  seo: Search,
}

const accents = [
  { chip: 'bg-brand-blue/15 text-brand-blue-pale ring-brand-blue/30', glow: 'hover:shadow-brand-blue/25', bar: 'from-brand-blue to-brand-blue-soft' },
  { chip: 'bg-brand-teal/15 text-brand-blue-pale ring-brand-teal/30', glow: 'hover:shadow-brand-teal/25', bar: 'from-brand-teal to-brand-cyan' },
  { chip: 'bg-brand-purple/15 text-brand-blue-pale ring-brand-purple/30', glow: 'hover:shadow-brand-purple/25', bar: 'from-brand-purple to-brand-coral' },
  { chip: 'bg-brand-cyan/15 text-brand-blue-pale ring-brand-cyan/30', glow: 'hover:shadow-brand-cyan/25', bar: 'from-brand-cyan to-brand-blue' },
  { chip: 'bg-brand-coral/15 text-brand-blue-pale ring-brand-coral/30', glow: 'hover:shadow-brand-coral/25', bar: 'from-brand-coral to-brand-purple' },
  { chip: 'bg-brand-blue-deep/20 text-brand-blue-pale ring-brand-blue-deep/30', glow: 'hover:shadow-brand-blue-deep/25', bar: 'from-brand-blue-deep to-brand-teal' },
]

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-navy py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-brand-coral/10 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading eyebrow="What We Offer" title={services.heading} dark />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[item.icon]
            const accent = accents[i % accents.length]
            const isOrphan = services.items.length % 3 === 1 && i === services.items.length - 1
            return (
              <Reveal
                key={item.title}
                delay={i * 0.07}
                className={isOrphan ? 'lg:col-start-2' : undefined}
              >
                <a
                  href="#contact"
                  className={`group relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-white/5 p-7 text-center shadow-xl shadow-transparent backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10 ${accent.glow}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar} opacity-70 transition-opacity group-hover:opacity-100`}
                  />
                  <ArrowUpRight
                    size={18}
                    className="absolute top-5 right-5 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-cyan"
                    aria-hidden="true"
                  />
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-110 ${accent.chip}`}
                  >
                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-blue-pale">{item.body}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
