import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { contact } from '../../data/content'
import { submitContactForm } from '../../lib/contactForm'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = new FormData(e.currentTarget)
    const result = await submitContactForm(
      {
        name: form.get('name')?.toString() ?? '',
        email: form.get('email')?.toString() ?? '',
        message: form.get('message')?.toString() ?? '',
      },
      contact.emails[0],
    )

    if (result.ok) {
      setStatus('success')
      e.currentTarget.reset()
    } else {
      setStatus('error')
      setError(result.error)
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-navy py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="animate-blob-slow pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading eyebrow="Let's Talk" title={contact.heading} dark />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-8 text-white">
            <p className="text-base leading-relaxed text-brand-blue-pale">{contact.intro}</p>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-cyan uppercase">
                <MapPin size={16} aria-hidden="true" /> Address
              </h3>
              <p className="text-sm leading-relaxed text-white/90">{contact.address}</p>
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-cyan uppercase">
                <Phone size={16} aria-hidden="true" /> Phone
              </h3>
              <ul className="space-y-1">
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-sm text-white/90 hover:text-brand-cyan"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-cyan uppercase">
                <Mail size={16} aria-hidden="true" /> Email
              </h3>
              <ul className="space-y-1">
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-white/90 hover:text-brand-cyan"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple bg-[length:160%_100%] bg-left px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-purple/20 transition-all duration-500 hover:bg-right disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>

              <div role="status" aria-live="polite">
                {status === 'success' && (
                  <p className="flex items-center gap-1.5 text-sm text-brand-teal">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    Opening your email client to send the message…
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-1.5 text-sm text-red-600">
                    <AlertCircle size={16} aria-hidden="true" />
                    {error}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
