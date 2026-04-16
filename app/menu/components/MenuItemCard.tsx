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
    <div className={`group py-8 px-7 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 ${isSoldOut ? 'opacity-35' : ''}`}>
      <h3 className="font-serif text-xl text-brand-heading mb-2 font-normal">{name}</h3>
      <p className="text-white/30 text-sm mb-8 font-light leading-relaxed">{description}</p>
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Half</p>
          <p className="text-brand-accent font-medium">${(halfPortionPrice / 100).toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Full</p>
          <p className="text-brand-accent font-medium">${(fullPortionPrice / 100).toFixed(2)}</p>
        </div>
      </div>
      <button
        className={`w-full py-2.5 text-[11px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 font-medium ${
          isSoldOut
            ? 'text-white/15 border border-white/[0.04] cursor-not-allowed'
            : 'text-white/50 border border-white/[0.08] hover:text-brand-accent hover:border-brand-accent/30 cursor-pointer'
        }`}
        disabled={isSoldOut}
      >
        {isSoldOut ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  );
}
