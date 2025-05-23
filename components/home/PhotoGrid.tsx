"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const PHOTOS = [
  {
    id: 1,
    src: "https://pbs.twimg.com/media/GrUk0OQW0AAMa02?format=jpg&name=large",
    alt: "Eminem gesturing with hand",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    src: "https://pbs.twimg.com/media/GnAFdv_WcAAI10X?format=jpg&name=medium",
    alt: "Eminem showing middle finger",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    src: "https://pbs.twimg.com/media/F_ktEOWacAAhAPc?format=jpg&name=medium",
    alt: "Eminem profile portrait",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    src: "https://pbs.twimg.com/media/GAXE7M8a8AAoSZJ?format=jpg&name=medium",
    alt: "Eminem standing against wall",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    src: "https://pbs.twimg.com/media/D0RY4UIWoAADnRp?format=jpg&name=4096x4096",
    alt: "Eminem close-up with cigarette",
    width: 400,
    height: 300,
  },
  {
    id: 6,
    src: "https://pbs.twimg.com/media/DmB62r9UwAAaBzv?format=jpg&name=medium",
    alt: "Eminem with hands on face",
    width: 400,
    height: 300,
  },
  {
    id: 7,
    src: "https://pbs.twimg.com/media/GXTo9K9aQAAaGLL?format=jpg&name=4096x4096",
    alt: "Eminem hands covering face",
    width: 400,
    height: 300,
  },
  {
    id: 8,
    src: "https://pbs.twimg.com/media/FWW9wAEVsAEjsIw?format=jpg&name=4096x4096",
    alt: "Eminem outdoor shot",
    width: 400,
    height: 300,
  },
  {
    id: 9,
    src: "https://pbs.twimg.com/media/DhHJv7fVMAE8tFr?format=jpg&name=4096x4096",
    alt: "Eminem framing face with hands",
    width: 400,
    height: 300,
  },
];

// Placeholder for actual images
// const PLACEHOLDER_IMAGES = [
//   "https://x.com/Eminem/status/1924484963467935967/photo/1",
//   "https://images.pexels.com/photos/4046716/pexels-photo-4046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4145069/pexels-photo-4145069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4101131/pexels-photo-4101131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4145068/pexels-photo-4145068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4254892/pexels-photo-4254892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/4101155/pexels-photo-4101155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// ];

export default function PhotoGrid() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 relative bg-black">
      <div className="container mx-auto px-4">
        {/* Diagonal lines background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute h-[1px] w-[200%] bg-gray-700 -translate-x-1/2"
              style={{
                top: `${i * 5}%`,
                transform: `translateX(-50%) rotate(${i % 2 === 0 ? 30 : -30}deg)`,
              }}
            />
          ))}
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {PHOTOS.map((photo, index) => (
              <div 
                key={photo.id}
                className={cn(
                  "relative aspect-square overflow-hidden group cursor-pointer",
                  isLoaded ? "opacity-100" : "opacity-0",
                  "transition-opacity duration-700",
                  `transition-delay-[${index * 100}ms]`
                )}
                onClick={() => setActivePhoto(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover filter grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {activePhoto !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setActivePhoto(null)}
          >
            ✕
          </button>
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[activePhoto].src}
              alt={PHOTOS[activePhoto].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}