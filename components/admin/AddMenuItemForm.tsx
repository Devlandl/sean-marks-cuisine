'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

interface MenuItem {
  id: string;
  name: string;
  category: 'Main' | 'Addon' | 'Dessert';
  halfPrice?: number;
  fullPrice?: number;
  available: boolean;
}

interface FormSubmitData {
  name: string;
  category: 'Main' | 'Addon' | 'Dessert';
  halfPrice?: number;
  fullPrice?: number;
  available: boolean;
}

interface AddMenuItemFormProps {
  item?: MenuItem;
  onSubmit: (data: FormSubmitData) => void;
  onCancel: () => void;
}

export default function AddMenuItemForm({ item, onSubmit, onCancel }: AddMenuItemFormProps) {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    category: item?.category || 'Main',
    halfPrice: item?.halfPrice ? (item.halfPrice / 100).toString() : '',
    fullPrice: item?.fullPrice ? (item.fullPrice / 100).toString() : '',
    available: item?.available ?? true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      category: formData.category,
      halfPrice: formData.halfPrice ? Math.round(parseFloat(formData.halfPrice) * 100) : undefined,
      fullPrice: formData.fullPrice ? Math.round(parseFloat(formData.fullPrice) * 100) : undefined,
      available: formData.available,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-1">Item Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-1">Category *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
        >
          <option value="Main">Main Course</option>
          <option value="Addon">Add-on</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1">Half Portion Price ($)</label>
          <input
            type="number"
            name="halfPrice"
            value={formData.halfPrice}
            onChange={handleChange}
            placeholder="6.00"
            step="0.01"
            className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1">Full Portion Price ($)</label>
          <input
            type="number"
            name="fullPrice"
            value={formData.fullPrice}
            onChange={handleChange}
            placeholder="12.00"
            step="0.01"
            className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="available"
          name="available"
          checked={formData.available}
          onChange={handleChange}
          className="w-4 h-4 text-brand-gold rounded focus:ring-2 focus:ring-brand-gold"
        />
        <label htmlFor="available" className="ml-2 text-sm text-brand-dark">
          Available for ordering
        </label>
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" variant="primary" size="sm" className="flex-1">
          {item ? 'Update Item' : 'Add Item'}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onCancel}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
