import teamImg from '../../assets/photos/team.jpg'
import { whoWeAre } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About Echt" title={whoWeAre.heading} align="left" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-brand-slate sm:text-lg">
              {whoWeAre.body}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="order-first md:order-last">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-blue-pale to-brand-cyan/30 blur-2xl"
            />
            <img
              src={teamImg}
              alt="Echt team collaborating in the office"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
