'use client';

import { useState } from 'react';
import GalleryGrid from '@/app/components/admin/GalleryGrid';
import { Button } from '@/components/common/Button';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  uploadedAt: string;
}

const sampleImages: GalleryImage[] = [
  { id: '1', src: '/gallery/1.jpg', alt: 'Jerk Chicken Platter', category: 'Entrees', uploadedAt: '2026-04-01' },
  { id: '2', src: '/gallery/2.jpg', alt: 'Oxtail Stew', category: 'Entrees', uploadedAt: '2026-04-02' },
  { id: '3', src: '/gallery/3.jpg', alt: 'Bread Pudding', category: 'Desserts', uploadedAt: '2026-04-03' },
  { id: '4', src: '/gallery/4.jpg', alt: 'Coconut Cake Slice', category: 'Desserts', uploadedAt: '2026-04-04' },
  { id: '5', src: '/gallery/5.jpg', alt: 'Catering Buffet Setup', category: 'Catering', uploadedAt: '2026-04-05' },
  { id: '6', src: '/gallery/6.jpg', alt: 'Event Reception Spread', category: 'Events', uploadedAt: '2026-04-06' },
  { id: '7', src: '/gallery/7.jpg', alt: 'Plated Dinner Service', category: 'Catering', uploadedAt: '2026-04-07' },
  { id: '8', src: '/gallery/8.jpg', alt: 'Sweet Potato Pie', category: 'Desserts', uploadedAt: '2026-04-08' },
];

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>(sampleImages);
  const [filterCategory, setFilterCategory] = useState('all');

  const filtered = filterCategory === 'all'
    ? images
    : images.filter(img => img.category === filterCategory);

  const handleDelete = (id: string) => {
    if (confirm('Delete this image?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  const categories = ['all', ...new Set(images.map(img => img.category))];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Gallery Management</h1>
          <p className="text-brand-dark/60">Manage food photography</p>
        </div>
        <Button variant="primary">+ Upload Image</Button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-2">Filter by Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? 'bg-brand-dark text-brand-cream'
                  : 'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-cream'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <GalleryGrid images={filtered} onDelete={handleDelete} />

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Images</p>
          <p className="text-3xl font-bold text-brand-dark">{images.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Categories</p>
          <p className="text-3xl font-bold text-brand-dark">{new Set(images.map(i => i.category)).size}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Visible</p>
          <p className="text-3xl font-bold text-brand-dark">{filtered.length}</p>
        </div>
      </div>
    </div>
  );
}
