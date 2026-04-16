'use client';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  uploadedAt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onDelete: (id: string) => void;
}

export default function GalleryGrid({ images, onDelete }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
          <div className="w-full h-40 bg-brand-cream/30 flex items-center justify-center text-brand-dark/60">
            <span className="text-4xl">📷</span>
          </div>
          <div className="p-4">
            <p className="font-medium text-sm text-brand-dark mb-2 truncate">{image.alt}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-1 bg-brand-gold/20 text-brand-dark text-xs rounded-full">
                {image.category}
              </span>
              <span className="text-xs text-brand-dark/60">
                {new Date(image.uploadedAt).toLocaleDateString()}
              </span>
            </div>
            <button
              onClick={() => onDelete(image.id)}
              className="w-full px-2 py-2 bg-red-100 text-red-800 text-sm rounded hover:bg-red-200 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
