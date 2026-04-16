'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  halfPortionPrice: number;
  fullPortionPrice: number;
  isSoldOut?: boolean;
}

export function MenuItemCard({
  id,
  name,
  description,
  halfPortionPrice,
  fullPortionPrice,
  isSoldOut = false,
}: MenuItemCardProps) {
  const [selectedPortion, setSelectedPortion] = useState<'half' | 'full'>('full');
  const [quantity, setQuantity] = useState(1);

  const price = selectedPortion === 'half' ? halfPortionPrice : fullPortionPrice;
  const total = price * quantity;

  const handleAddToCart = () => {
    console.log('Add to cart:', { id, name, selectedPortion, quantity, total });
    // Will be wired to cart hook in next task
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-brand-dark to-brand-gold h-48"></div>

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {!isSoldOut ? (
          <>
            {/* Portion Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Portion Size
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`portion-${id}`}
                    value="half"
                    checked={selectedPortion === 'half'}
                    onChange={() => setSelectedPortion('half')}
                    className="mr-2"
                  />
                  <span className="text-sm">
                    Half (Serves 2) - ${(halfPortionPrice / 100).toFixed(2)}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`portion-${id}`}
                    value="full"
                    checked={selectedPortion === 'full'}
                    onChange={() => setSelectedPortion('full')}
                    className="mr-2"
                  />
                  <span className="text-sm">
                    Full (Serves 4-5) - ${(fullPortionPrice / 100).toFixed(2)}
                  </span>
                </label>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total and Button */}
            <div className="border-t pt-4">
              <p className="text-lg font-semibold text-brand-gold mb-3">
                Total: ${(total / 100).toFixed(2)}
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={handleAddToCart}
                className="w-full"
              >
                Add to Cart
              </Button>
            </div>
          </>
        ) : (
          <div className="bg-gray-100 p-4 rounded text-center text-gray-600">
            Sold Out
          </div>
        )}
      </div>
    </div>
  );
}
