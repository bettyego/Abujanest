import { useState } from 'react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import ApartmentCard from './components/ApartmentCard'
import ApartmentGallery from './components/ApartmentGallery'
import BookingForm from './components/BookingForm'
import LocationSection from './components/LocationSection'
import WhatsAppButton from './components/WhatsAppButton'
import EmailButton from './components/EmailButton'
import Button from './components/Button'
import {
  apartmentData,
  business,
  experiencePillars,
  featureList,
  galleryImages,
  navigationItems,
  formatCurrency,
  buildWhatsAppLink,
} from './data/siteData'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedApartmentId, setSelectedApartmentId] = useState(apartmentData[0].id)

  const currentApartment = apartmentData.find((item) => item.id === selectedApartmentId) || apartmentData[0]
  const selectedApartmentType = currentApartment.type

  const handleNavigate = (page) => {
    setCurrentPage(page)
    const section = document.getElementById(page)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleViewDetails = (apartmentId) => {
    setSelectedApartmentId(apartmentId)
    setCurrentPage('apartments')
    document.getElementById('apartment-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleBookingRequest = (apartmentType) => {
    const matchingApartment = apartmentData.find((item) => item.type === apartmentType) || apartmentData[0]
    setSelectedApartmentId(matchingApartment.id)
    setCurrentPage('booking')
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const whatsappMessage = `Hello Abuja Nest,\n\nI would like to make a booking inquiry.\n\nApartment: ${selectedApartmentType}\nCheck-in: \nCheck-out: \nNumber of nights: \nNumber of guests: \nName: \n\nThank you.`

  const handleBookingSubmit = (booking) => {
    const message = `Hello Abuja Nest,\n\nI would like to make a booking inquiry.\n\nApartment: ${booking.apartmentType}\nCheck-in: ${booking.checkIn}\nCheck-out: ${booking.checkOut}\nNumber of nights: ${booking.numberOfNights}\nNumber of guests: ${booking.guests}\nName: ${booking.fullName}\n\nThank you.`
    window.open(buildWhatsAppLink({ message, phoneNumber: business.whatsappPrimary }), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#f7f1e7] text-[#0f2d22]">
      <Navbar currentPage={currentPage} navItems={navigationItems} onNavigate={handleNavigate} />

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,138,67,0.18),_transparent_38%)]" />
          <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 pt-10 md:px-6 lg:grid-cols-[1.05fr_1.15fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-8">
            <div className="relative z-10 max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8d6d3d]">{business.descriptor}</p>
              <h1 className="font-display text-5xl leading-[0.95] text-[#0f2d22] md:text-6xl lg:text-7xl">
                {business.name}
              </h1>
              <p className="mt-6 text-3xl font-medium leading-tight text-[#173d2e] md:text-4xl">
                Experience Luxury Living in Abuja
              </p>
              <p className="mt-5 max-w-lg text-base leading-7 text-stone-600 md:text-lg">
                Premium furnished shortlet apartments in Gwarinpa, designed for comfortable extended stays, effortless city living, and a polished Abuja experience.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#5d5d55]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#b88a43]" />
                {business.shortLocation}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => handleNavigate('apartments')} className="sm:flex-1">Explore Apartments</Button>
                <Button variant="ghost" onClick={() => handleNavigate('booking')} className="sm:flex-1">Request a Stay</Button>
              </div>
            </div>

            <div className="relative z-10">
              <div className="overflow-hidden rounded-[32px] border border-[#dfd7c8] bg-white shadow-[0_28px_80px_rgba(27,59,46,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium Abuja Nest apartment living space"
                  className="h-[560px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About us"
                title="A welcoming place to settle into Abuja."
                text="Abuja Nest offers refined shortlet accommodation for guests seeking comfort, privacy, and convenience in one of the city’s most established residential districts. Each apartment is designed to support longer stays with a polished, residential feel."
              />
            </div>
            <div className="rounded-[30px] border border-[#e5dcc6] bg-[#f4efe8] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#7a7a75]">Why guests choose us</p>
              <div className="mt-5 space-y-4 text-lg text-[#173d2e]">
                <div className="flex items-center gap-3"><span className="inline-block h-2.5 w-2.5 rounded-full bg-[#b88a43]" /> Fully furnished comfort</div>
                <div className="flex items-center gap-3"><span className="inline-block h-2.5 w-2.5 rounded-full bg-[#b88a43]" /> Prime Abuja location</div>
                <div className="flex items-center gap-3"><span className="inline-block h-2.5 w-2.5 rounded-full bg-[#b88a43]" /> Secure, convenient stays</div>
              </div>
            </div>
          </div>
        </section>

        <section id="apartments" className="bg-[#f3eee7] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Featured apartments"
              title="Choose the space that fits your stay"
              text="Thoughtful accommodation for business travel, private escapes, and longer short stays in Abuja."
              align="center"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {apartmentData.map((apartment) => (
                <ApartmentCard
                  key={apartment.id}
                  apartment={apartment}
                  onViewDetails={handleViewDetails}
                  onRequestBooking={handleBookingRequest}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Abuja Nest"
            title="Premium essentials for easy stays"
            text="Everything that matters most for a comfortable, reliable shortlet experience in Abuja."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureList.map((feature, index) => (
              <div key={feature} className="rounded-[26px] border border-[#e6d9bf] bg-white p-5 shadow-[0_10px_22px_rgba(15,45,34,0.03)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e6d5] text-lg text-[#0f2d22]">{index + 1}</div>
                <p className="text-lg font-medium text-[#173d2e]">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-[#0f2d22] py-20 text-[#f7f1e7]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Abuja Nest experience"
              title="Comfort that supports the way you stay"
              text="An atmosphere shaped around ease, privacy, and a sense of calm from arrival to departure."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {experiencePillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[26px] border border-white/10 bg-[#173d2e] p-6">
                  <div className="mb-4 h-11 w-11 rounded-full bg-[#b88a43]/15 text-center leading-[2.75rem] text-lg text-[#d9bf8b]">✦</div>
                  <h3 className="font-display text-3xl text-white">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#dfeae4]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apartment gallery"
            title="A refined setting for longer stays"
            text="Temporary photography placeholders are in place so real Abuja Nest images can be swapped in easily when they are supplied."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-[28px] border border-[#e5dcc6] bg-white shadow-[0_12px_22px_rgba(15,45,34,0.04)]">
                <img src={image.src} alt={image.alt} className="h-72 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
          <LocationSection />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#e5dcc6] bg-[#f8f3eb] px-6 py-8 md:px-10 md:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d6d3d]">Plan your stay</p>
                <h2 className="mt-3 font-display text-4xl text-[#0f2d22] md:text-5xl">A comfortable base for your next Abuja stay.</h2>
              </div>
              <Button onClick={() => handleNavigate('booking')}>Request a Stay</Button>
            </div>
          </div>
        </section>

        <section id="apartment-details" className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <ApartmentGallery key={currentApartment.id} images={currentApartment.images} apartmentName={currentApartment.name} />

            <div className="rounded-[28px] border border-[#e5dcc6] bg-white p-6 shadow-[0_15px_30px_rgba(15,45,34,0.05)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8d6d3d]">{currentApartment.type}</p>
              <h2 className="mt-3 font-display text-4xl text-[#0f2d22]">{currentApartment.name}</h2>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-[#0f2d22]">{formatCurrency(currentApartment.price)}</span>
                <span className="text-sm uppercase tracking-[0.18em] text-stone-500">/ night</span>
              </div>
              <p className="mt-5 text-base leading-7 text-stone-600">{currentApartment.description}</p>

              <div className="mt-6 rounded-[22px] border border-[#eef0eb] bg-[#f6f4f1] p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Stay requirement</p>
                <p className="text-base text-[#173d2e]">Minimum stay: 10 nights</p>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <Button onClick={() => handleBookingRequest(currentApartment.type)} className="w-full">Request Booking</Button>
                <a
                  href={buildWhatsAppLink({ message: whatsappMessage, phoneNumber: business.whatsappPrimary })}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#0f2d22] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0f2d22] transition hover:-translate-y-0.5"
                >
                  WhatsApp Booking
                </a>
                <EmailButton
                  label="Email Booking"
                  subject={`Booking Inquiry - ${currentApartment.type}`}
                  message={whatsappMessage}
                  className="w-full"
                />
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Confirmed amenities</p>
                <ul className="mt-4 space-y-3 text-base text-[#173d2e]">
                  {currentApartment.amenities.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#b88a43]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[#f4eee7] py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d6d3d]">Booking</p>
              <h2 className="mt-3 font-display text-4xl text-[#0f2d22] md:text-5xl">Request your stay</h2>
            </div>
            <BookingForm key={selectedApartmentId} selectedApartmentType={selectedApartmentType} onSubmit={handleBookingSubmit} />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s plan a comfortable stay in Abuja"
                text="Send an inquiry for your preferred apartment and our team will respond with availability and next steps."
              />
              <p className="mt-4 text-base leading-7 text-stone-600">Location: {business.location}</p>
              <div className="mt-5 space-y-3 text-base text-[#173d2e]">
                {business.phoneNumbers.map((phone) => (
                  <div key={phone}>{phone}</div>
                ))}
                <div>{business.instagram}</div>
                <div>{business.email}</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e5dcc6] bg-white p-6 shadow-[0_15px_35px_rgba(15,45,34,0.04)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Need a quick answer?</p>
              <h3 className="mt-4 font-display text-3xl text-[#0f2d22]">Chat With Abuja Nest</h3>
              <p className="mt-4 text-base leading-7 text-stone-600">Reach out directly on WhatsApp or by email to ask about booking availability and apartment details.</p>
              <div className="mt-6 space-y-3">
                <WhatsAppButton variant="inline" label="Chat With Abuja Nest" className="w-full" />
                <EmailButton className="w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e5dcc6] bg-[#f6f1e7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b88a43]/40 bg-[#0f2d22] text-sm font-semibold text-[#f6f1e7]">
                AN
              </div>
              <div>
                <div className="font-display text-2xl leading-none text-[#0f2d22]">ABUJA NEST</div>
                <div className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#7a7a75]">Shortlet & Apartments</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Navigation</p>
            <ul className="mt-4 space-y-3 text-sm text-[#173d2e]">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => handleNavigate(item.id)} className="text-left hover:text-[#0f2d22]">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Apartment types</p>
            <ul className="mt-4 space-y-3 text-sm text-[#173d2e]">
              {apartmentData.map((apartment) => (
                <li key={apartment.id}>{apartment.type}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a7a75]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-[#173d2e]">
              <li>{business.location}</li>
              {business.phoneNumbers.map((phone) => (
                <li key={phone}>{phone}</li>
              ))}
              <li>{business.instagram}</li>
              <li>{business.email}</li>
            </ul>
            <div className="mt-5">
              <WhatsAppButton variant="inline" label="Chat Now" className="w-full" />
            </div>
            <div className="mt-3">
              <EmailButton label="Email Us" className="w-full" />
            </div>
          </div>
        </div>
      </footer>

      <EmailButton variant="floating" />
      <WhatsAppButton />
    </div>
  )
}

export default App
