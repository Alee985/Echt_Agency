import { Mail, Phone } from 'lucide-react'
import logo from '../../assets/logo/echt-logo.png'
import { company, contact, navLinks } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#161936] py-12 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <img
            src={logo}
            alt="Echt logo"
            className="mb-4 h-8 w-auto rounded bg-white px-1.5 py-1"
          />
          <p className="text-sm leading-relaxed">{company.intro}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brand-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white uppercase">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`tel:${contact.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-brand-cyan"
              >
                <Phone size={14} aria-hidden="true" /> {contact.phones[0]}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.emails[0]}`}
                className="flex items-center gap-2 transition-colors hover:text-brand-cyan"
              >
                <Mail size={14} aria-hidden="true" /> {contact.emails[0]}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-center text-xs sm:px-8">
        © {year} {company.fullName}. All rights reserved.
      </div>
    </footer>
  )
}
