import { buildEmailLink, business } from '../data/siteData'

export default function EmailButton({
  subject = 'Booking Inquiry - Abuja Nest',
  message = 'Hello Abuja Nest,\n\nI would like to make a booking inquiry.\n\nThank you.',
  label = 'Email Abuja Nest',
  className = '',
  variant = 'outline',
  email = business.email,
}) {
  const href = buildEmailLink({ subject, message, email })

  const style = {
    floating:
      'fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0f2d22] text-2xl text-[#f6f1e7] shadow-[0_18px_36px_rgba(15,45,34,0.28)] transition hover:scale-105 md:bottom-28 md:right-8',
    inline:
      'inline-flex items-center justify-center rounded-full bg-[#0f2d22] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f1e7] shadow-[0_12px_24px_rgba(15,45,34,0.15)] transition hover:-translate-y-0.5',
    outline:
      'inline-flex items-center justify-center rounded-full border border-[#0f2d22] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0f2d22] transition hover:-translate-y-0.5',
  }

  return (
    <a href={href} aria-label={label} className={`${style[variant]} ${className}`}>
      {variant === 'floating' ? '✉' : label}
    </a>
  )
}
