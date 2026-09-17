import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { work } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

type Project = (typeof work.items)[number]

const accents = [
  { grad: 'from-brand-blue to-brand-blue-soft', tag: 'bg-brand-blue/15 text-brand-blue-deep' },
  { grad: 'from-brand-teal to-brand-cyan', tag: 'bg-brand-teal/15 text-brand-teal' },
  { grad: 'from-brand-purple to-brand-coral', tag: 'bg-brand-purple/15 text-brand-purple' },
  { grad: 'from-brand-cyan to-brand-blue', tag: 'bg-brand-cyan/15 text-brand-blue-deep' },
  { grad: 'from-brand-coral to-brand-purple', tag: 'bg-brand-coral/15 text-brand-coral' },
  { grad: 'from-brand-blue-deep to-brand-teal', tag: 'bg-brand-blue-deep/15 text-brand-blue-deep' },
]

export default function Work() {
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const activeIndex = active ? work.items.indexOf(active) : -1

  return (
    <section id="work" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={work.eyebrow} title={work.heading} />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brand-slate">
            {work.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.items.map((project, i) => {
            const accent = accents[i % accents.length]
            return (
              <Reveal key={project.slug} delay={i * 0.07}>
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-black/5 text-left shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div
                    className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${accent.grad}`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                    <ArrowUpRight
                      size={20}
                      className="absolute top-4 right-4 text-white/80 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-display px-6 text-center text-sm font-semibold text-white/90">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-base font-semibold text-navy">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-slate">{project.summary}</p>
                    <span className="mt-4 text-sm font-semibold text-brand-blue group-hover:text-brand-purple">
                      View project details →
                    </span>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close project details"
              className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              <div
                className={`sticky top-0 flex items-start justify-between gap-4 bg-gradient-to-br p-6 sm:p-8 ${accents[activeIndex % accents.length].grad}`}
              >
                <div>
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wide">
                    {active.category}
                  </span>
                  <h3 id="project-modal-title" className="font-display text-2xl font-bold text-white">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="shrink-0 rounded-full bg-white/15 p-2 text-white transition-colors hover:bg-white/25"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-widest text-brand-blue uppercase">
                    The Brief
                  </h4>
                  <p className="text-sm leading-relaxed text-brand-slate">{active.brief}</p>
                </div>

                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-widest text-brand-blue uppercase">
                    Our Approach
                  </h4>
                  <ul className="space-y-2">
                    {active.approach.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-navy">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-widest text-brand-blue uppercase">
                    What We Delivered
                  </h4>
                  <ul className="space-y-2">
                    {active.delivered.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-navy">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-purple" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-widest text-brand-blue uppercase">
                    Tools & Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {active.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-brand-blue-pale/40 px-3 py-1 text-xs font-medium text-brand-blue-deep"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="inline-block w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand-purple/25"
                >
                  Discuss a Similar Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
