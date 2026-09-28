import { useMemo, useState } from 'react'
import { MINIMUM_STAY_NIGHTS, apartmentData, formatCurrency } from '../data/siteData'

const defaultForm = {
  fullName: '',
  phoneNumber: '',
  email: '',
  apartmentType: apartmentData[0].type,
  checkIn: '',
  checkOut: '',
  guests: '2',
  message: '',
}

export default function BookingForm({ selectedApartmentType = apartmentData[0].type, onSubmit }) {
  const [formData, setFormData] = useState({ ...defaultForm, apartmentType: selectedApartmentType })
  const [error, setError] = useState('')

  const apartment = apartmentData.find((item) => item.type === formData.apartmentType) || apartmentData[0]

  const duration = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const start = new Date(formData.checkIn)
    const end = new Date(formData.checkOut)
    const differenceInDays = (end - start) / (1000 * 60 * 60 * 24)
    return differenceInDays > 0 ? differenceInDays : 0
  }, [formData.checkIn, formData.checkOut])

  const total = apartment.price * duration

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.checkIn || !formData.checkOut) {
      setError('Please complete all required fields.')
      return
    }

    if (duration < MINIMUM_STAY_NIGHTS) {
      setError(`Abuja Nest requires a minimum stay of ${MINIMUM_STAY_NIGHTS} nights. Please select a longer stay.`)
      return
    }

    onSubmit({
      ...formData,
      numberOfNights: duration,
      estimatedTotal: total,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-[#e5dcc6] bg-white p-5 shadow-[0_18px_40px_rgba(15,45,34,0.05)] md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[#173d2e]">
          Full name
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
            placeholder="Your full name"
          />
        </label>

        <label className="block text-sm font-medium text-[#173d2e]">
          Phone number
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
            placeholder="0707 057 5013"
          />
        </label>

        <label className="block text-sm font-medium text-[#173d2e] md:col-span-2">
          Email address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
            placeholder="you@example.com"
          />
        </label>

        <label className="block text-sm font-medium text-[#173d2e]">
          Apartment type
          <select
            name="apartmentType"
            value={formData.apartmentType}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
          >
            {apartmentData.map((item) => (
              <option key={item.id} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-[#173d2e]">
          Number of guests
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
          >
            {[1, 2, 3, 4, 5, 6].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-[#173d2e]">
          Check-in date
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
          />
        </label>

        <label className="block text-sm font-medium text-[#173d2e]">
          Check-out date
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
          />
        </label>

        <label className="block text-sm font-medium text-[#173d2e] md:col-span-2">
          Additional message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full rounded-2xl border border-[#d6d0c4] bg-[#f9f5f0] px-4 py-3 text-base text-[#0f2d22] outline-none transition focus:border-[#0f2d22] focus:bg-white"
            placeholder="Tell us a bit more about your stay"
          />
        </label>
      </div>

      {error ? (
        <div className="rounded-2xl border border-[#b88a43]/40 bg-[#fff8ef] px-4 py-3 text-sm text-[#5b4025]" role="alert">
          {error}
        </div>
      ) : null}

      {duration >= MINIMUM_STAY_NIGHTS && duration > 0 ? (
        <div className="rounded-[24px] border border-[#dfe7df] bg-[#f4f7f3] p-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Booking summary</p>
              <h3 className="mt-2 font-display text-2xl text-[#0f2d22]">{apartment.type}</h3>
            </div>
            <div className="text-right text-sm uppercase tracking-[0.12em] text-[#7a7a75]">
              {duration} nights
            </div>
          </div>

          <dl className="space-y-3 text-sm text-[#244034]">
            <div className="flex items-center justify-between gap-3">
              <dt>Check-in</dt>
              <dd>{formData.checkIn}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt>Check-out</dt>
              <dd>{formData.checkOut}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt>Nightly rate</dt>
              <dd>{formatCurrency(apartment.price)}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt>Estimated total</dt>
              <dd className="font-semibold text-[#0f2d22]">{formatCurrency(total)}</dd>
            </div>
          </dl>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-[#ece3d5] pt-5 sm:flex-row sm:justify-between">
        <p className="text-sm text-stone-500">This is a booking request and not a confirmed reservation.</p>
        <button
          type="submit"
          className="rounded-full bg-[#0f2d22] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#f7f1e7] transition hover:bg-[#153f31]"
        >
          Submit Request
        </button>
      </div>
    </form>
  )
}
