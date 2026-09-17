import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo/echt-logo.png'
import { navLinks } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-navy/90 shadow-lg shadow-black/10 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Echt logo"
            className="h-8 w-auto rounded bg-white px-1.5 py-1 transition-all duration-300"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-white/90 transition-colors hover:text-brand-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-purple bg-[length:160%_100%] bg-left px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-purple/20 transition-all duration-500 hover:bg-right md:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex flex-col gap-1 overflow-hidden bg-navy px-5 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2.5 text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pb-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
