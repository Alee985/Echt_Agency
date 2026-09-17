export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ContactFormResult = { ok: true } | { ok: false; error: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values: ContactFormValues): string | null {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim() || !emailPattern.test(values.email)) {
    return 'Please enter a valid email address.'
  }
  if (!values.message.trim()) return 'Please add a short message.'
  return null
}

/**
 * UI -> validation -> submission boundary for the contact form.
 *
 * No email/CRM backend is wired up yet (no credentials configured for this
 * project). This opens the visitor's mail client with a pre-filled message
 * to Echt's inbox so the form is immediately useful, while keeping this
 * function as the single place to swap in a real API call (e.g. Resend,
 * SendGrid, a CRM webhook) later without touching the UI.
 */
export async function submitContactForm(
  values: ContactFormValues,
  toEmail: string,
): Promise<ContactFormResult> {
  const validationError = validateContactForm(values)
  if (validationError) return { ok: false, error: validationError }

  try {
    const subject = encodeURIComponent(`Website enquiry from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
    return { ok: true }
  } catch {
    return { ok: false, error: 'Something went wrong opening your email client. Please try again.' }
  }
}
