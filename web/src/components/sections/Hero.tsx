import { motion } from 'motion/react'
import heroImg from '../../assets/hero/hero-graduation.jpg'
import { company } from '../../data/content'
import Container from '../ui/Container'
import MagneticButton from '../ui/MagneticButton'

const chips = [
  'K-12 Content',
  'Corporate Learning',
  'Translation',
  'Data Analytics',
  'AI Agents',
  'Chatbots',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-24"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />

      {/* vibrant drifting color blobs — the "agency energy" layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-24 right-[8%] h-80 w-80 rounded-full bg-brand-purple/30 blur-3xl" />
        <div className="animate-blob-slow absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-brand-cyan/25 blur-3xl" />
        <div className="animate-blob absolute bottom-0 left-[20%] h-72 w-72 rounded-full bg-brand-coral/20 blur-3xl" />
      </div>

      {/* subtle decorative grid, echoes a connected/digital motif without being literal */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black, transparent 70%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full"
      >
        <Container>
          <motion.p
            variants={item}
            className="mb-3 text-sm font-semibold tracking-[0.2em] text-brand-cyan uppercase"
          >
            {company.fullName}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Learning <span className="text-gradient">Solutions</span> that move fast
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base text-brand-blue-pale sm:text-lg"
          >
            {company.intro}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="#contact" variant="primary">
              Start a Project
            </MagneticButton>
            <MagneticButton href="#services" variant="ghost">
              Explore Services
            </MagneticButton>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
