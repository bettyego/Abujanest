import { buildWhatsAppLink, business } from '../data/siteData'

export default function WhatsAppButton({
  message = 'Hello Abuja Nest,\n\nI would like to make a booking inquiry.\n\nThank you.',
  label = 'Chat With Abuja Nest',
  className = '',
  variant = 'floating',
  phoneNumber = business.whatsappPrimary,
}) {
  const href = buildWhatsAppLink({ message, phoneNumber })

  const style = {
    floating:
      'fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-2xl text-white shadow-[0_18px_36px_rgba(37,211,102,0.28)] transition hover:scale-105 md:bottom-8 md:right-8',
    inline:
      'inline-flex items-center justify-center rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(37,211,102,0.15)] transition hover:-translate-y-0.5',
    outline:
      'inline-flex items-center justify-center rounded-full border border-[#0f2d22] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0f2d22] transition hover:-translate-y-0.5',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${style[variant]} ${className}`}
    >
      {variant === 'floating' ? '✆' : label}
    </a>
  )
}
