import mbdGroup from '../../assets/clients/mbd-group.jpeg'
import navneet from '../../assets/clients/navneet.png'
import pearson from '../../assets/clients/pearson.png'
import sChand from '../../assets/clients/s-chand.png'
import tataClassEdge from '../../assets/clients/tata-classedge.jpg'
import { clients } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const logos: Record<string, string> = {
  'tata-classedge': tataClassEdge,
  'mbd-group': mbdGroup,
  navneet,
  pearson,
  's-chand': sChand,
}

// Duplicated so the track can loop seamlessly at -50% translate.
const track = [...clients.items, ...clients.items]

export default function Clients() {
  return (
    <section id="clients" className="scroll-mt-20 bg-brand-blue-pale/30 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Trusted By" title={clients.heading} />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brand-slate">
            {clients.intro}
          </p>
        </Reveal>
      </Container>

      <div
        className="marquee-pause relative mt-12 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-6 sm:gap-8">
          {track.map((client, i) => (
            <div
              key={`${client.logo}-${i}`}
              aria-hidden={i >= clients.items.length}
              className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <img
                src={logos[client.logo]}
                alt={i < clients.items.length ? `${client.name} logo` : ''}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Container>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-brand-blue-deep">
          {clients.outro}
        </p>
      </Container>
    </section>
  )
}
