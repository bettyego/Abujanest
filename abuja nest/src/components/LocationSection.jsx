export default function LocationSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#e4dccb] bg-[#0f2d22] px-6 py-8 text-[#f7f1e7] md:px-10 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,138,67,0.26),_transparent_35%)]" />
      <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9bf8b]">Location</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">Stay in Gwarinpa, Abuja</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#dfeae4]">
            Abuja Nest is located in Gwarinpa, Abuja, offering a secure and comfortable base for extended stays in the city. The exact address will be shared once confirmed.
          </p>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#113c2f] p-4">
          <div className="flex h-[220px] items-center justify-center rounded-[20px] border border-dashed border-[#d9bf8b]/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(184,138,67,0.08))] text-center text-[#f7f1e7]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bf8b]">Map placeholder</p>
              <p className="mt-3 text-lg font-medium">Google Map embed coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
