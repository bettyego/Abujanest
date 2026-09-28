export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b88a43]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-[#0f2d22] md:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">{text}</p> : null}
    </div>
  )
}
