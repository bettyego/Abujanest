import { useState } from 'react'

export default function ApartmentGallery({ images, apartmentName }) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[30px] border border-[#e4dccb] bg-[#f7f1e7]">
        <img
          src={selectedImage}
          alt={`${apartmentName} interior`}
          className="h-[420px] w-full object-cover md:h-[540px]"
          loading="eager"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-pressed={selectedImage === image}
            className={`overflow-hidden rounded-2xl border transition ${
              selectedImage === image ? 'border-[#0f2d22] shadow-sm' : 'border-[#e4dccb]'
            }`}
            aria-label={`View image ${index + 1} of ${apartmentName}`}
          >
            <img src={image} alt={`${apartmentName} detail ${index + 1}`} className="h-24 w-full object-cover md:h-32" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}
