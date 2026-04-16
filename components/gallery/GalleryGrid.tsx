'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import Lightbox from './Lightbox';

const galleryItems = [
  // Entrees
  {
    id: '1',
    src: '/gallery/jerk-chicken.jpg',
    alt: 'Jerk Chicken with Rice and Peas',
    category: 'Entrees',
  },
  {
    id: '2',
    src: '/gallery/oxtail-stew.jpg',
    alt: 'Oxtail Stew',
    category: 'Entrees',
  },
  {
    id: '3',
    src: '/gallery/curry-fish.jpg',
    alt: 'Curry Fish',
    category: 'Entrees',
  },
  {
    id: '4',
    src: '/gallery/beef-patties.jpg',
    alt: 'Beef Patties',
    category: 'Entrees',
  },
  // Desserts
  {
    id: '5',
    src: '/gallery/bread-pudding.jpg',
    alt: 'Bread Pudding with Rum Sauce',
    category: 'Desserts',
  },
  {
    id: '6',
    src: '/gallery/coconut-cake.jpg',
    alt: 'Coconut Cake',
    category: 'Desserts',
  },
  {
    id: '7',
    src: '/gallery/sweet-potato-pie.jpg',
    alt: 'Sweet Potato Pie',
    category: 'Desserts',
  },
  // Catering
  {
    id: '8',
    src: '/gallery/buffet-spread.jpg',
    alt: 'Full Buffet Spread',
    category: 'Catering',
  },
  {
    id: '9',
    src: '/gallery/plated-event.jpg',
    alt: 'Plated Event Service',
    category: 'Catering',
  },
  {
    id: '10',
    src: '/gallery/family-style.jpg',
    alt: 'Family Style Dinner',
    category: 'Catering',
  },
  // Events
  {
    id: '11',
    src: '/gallery/event-setup.jpg',
    alt: 'Event Setup and Decoration',
    category: 'Events',
  },
  {
    id: '12',
    src: '/gallery/cocktail-event.jpg',
    alt: 'Cocktail Hour',
    category: 'Events',
  },
];

const categories = ['All', 'Entrees', 'Desserts', 'Catering', 'Events'];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentImageIndex(0);
            }}
            className={cn(
              'px-6 py-2 rounded-full text-sm font-medium transition-all',
              activeCategory === category
                ? 'bg-brand-dark text-brand-cream'
                : 'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-cream'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-lg h-64 cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-brand-cream font-medium text-sm">
                  {item.alt}
                </p>
                <p className="text-brand-gold text-xs">{item.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onPrev={goToPrevImage}
        onNext={goToNextImage}
      />
    </>
  );
}
