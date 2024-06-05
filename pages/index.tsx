import { useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/demons-souls.png',
  '/images/demons-souls-rmk.png',
  '/images/dark-souls.png',
  '/images/dark-souls-rmk.png',
  '/images/dark-souls-ii.png',
  '/images/dark-souls-iii.png',
  '/images/bloodborne.png',
  '/images/elden-ring.png',
]

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openModal(image)}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg lg:h-[420px]"
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <span className="absolute top-4 right-8 text-white text-4xl font-bold cursor-pointer">
            &times;
          </span>
          <Image
            className="max-w-4/5 max-h-4/5 rounded-lg lg:w-[540px] lg:h-[720px]"
            src={selectedImage}
            alt="Selected"
            width={620}
            height={620}
          />
        </div>
      )}
    </div>
  )
}

export default Home
