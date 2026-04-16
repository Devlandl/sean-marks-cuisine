'use client';

import Image from 'next/image';

interface LightboxProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    category: string;
  }>;
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition-opacity"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-70 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-70 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <div
        className="relative w-full max-w-3xl max-h-[80vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-96 sm:h-[500px] md:h-[600px]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 text-white text-center">
          <p className="text-lg font-medium">{current.alt}</p>
          <p className="text-sm opacity-70">{current.category}</p>
          <p className="text-xs opacity-50 mt-2">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
