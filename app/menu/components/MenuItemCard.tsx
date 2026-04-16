'use client';

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  halfPortionPrice: number;
  fullPortionPrice: number;
  isSoldOut: boolean;
}

export function MenuItemCard({ name, description, halfPortionPrice, fullPortionPrice, isSoldOut }: MenuItemCardProps) {
  return (
    <div className={`bg-brand-surface rounded-lg p-6 border border-brand-border hover:border-brand-accent/40 transition-colors duration-300 ${isSoldOut ? 'opacity-50' : ''}`}>
      <h3 className="text-lg font-bold text-brand-heading mb-2">{name}</h3>
      <p className="text-brand-text/60 text-sm mb-6">{description}</p>
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-xs text-brand-text/40 uppercase tracking-wider">Half</p>
          <p className="text-brand-accent font-bold">${(halfPortionPrice / 100).toFixed(2)}</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-xs text-brand-text/40 uppercase tracking-wider">Full</p>
          <p className="text-brand-accent font-bold">${(fullPortionPrice / 100).toFixed(2)}</p>
        </div>
      </div>
      <button className={`w-full mt-6 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${isSoldOut ? 'border border-brand-border text-brand-text/40 cursor-not-allowed' : 'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-base cursor-pointer'}`} disabled={isSoldOut}>
        {isSoldOut ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  );
}
