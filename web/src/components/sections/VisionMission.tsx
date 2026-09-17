import { visionMission } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function VisionMission() {
  const cards = [visionMission.vision, visionMission.mission]

  return (
    <section className="relative overflow-hidden bg-brand-blue-pale/30 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-coral/10 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading eyebrow="Purpose" title={visionMission.heading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                <span className="mb-4 inline-block rounded-full bg-navy px-4 py-1 text-xs font-bold tracking-widest text-brand-cyan uppercase">
                  {card.title}
                </span>
                <p className="text-base leading-relaxed text-brand-slate sm:text-lg">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
