import Button from './Button'
import { formatCurrency } from '../data/siteData'

export default function ApartmentCard({ apartment, onViewDetails, onRequestBooking }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#e4dccb] bg-white shadow-[0_15px_35px_rgba(13,52,38,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(13,52,38,0.12)]">
      <div className="relative overflow-hidden">
        <img
          src={apartment.images[0]}
          alt={apartment.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-3xl leading-none text-[#0f2d22]">{apartment.name}</h3>
          <span className="rounded-full border border-[#b88a43]/30 bg-[#f8f3ea] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a6542]">
            Available
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-[#0f2d22]">{formatCurrency(apartment.price)}</span>
          <span className="text-sm uppercase tracking-[0.18em] text-stone-500">/ night</span>
        </div>

        <p className="text-base leading-7 text-stone-600">{apartment.shortDescription}</p>

        <div className="flex gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => onViewDetails(apartment.id)} className="flex-1">
            View Details
          </Button>
          <Button size="sm" onClick={() => onRequestBooking(apartment.type)} className="flex-1">
            Request Booking
          </Button>
        </div>
      </div>
    </article>
  )
}
