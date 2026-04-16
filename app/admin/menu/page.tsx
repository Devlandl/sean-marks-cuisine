'use client';

import { useState } from 'react';
import MenuTable from '@/app/components/admin/MenuTable';
import AddMenuItemForm from '@/app/components/admin/AddMenuItemForm';
import { Button } from '@/components/common/Button';

interface MenuItem {
  id: string;
  name: string;
  category: 'Main' | 'Addon' | 'Dessert';
  halfPrice?: number;
  fullPrice?: number;
  available: boolean;
}

// Sample menu items
const initialItems: MenuItem[] = [
  {
    id: '1',
    name: 'Jerk Chicken with Rice and Peas',
    category: 'Main',
    halfPrice: 600,
    fullPrice: 1200,
    available: true,
  },
  {
    id: '2',
    name: 'Oxtail Stew',
    category: 'Main',
    halfPrice: 750,
    fullPrice: 1500,
    available: true,
  },
  {
    id: '3',
    name: 'Callaloo Soup',
    category: 'Addon',
    fullPrice: 400,
    available: true,
  },
  {
    id: '4',
    name: 'Bread Pudding',
    category: 'Dessert',
    fullPrice: 600,
    available: true,
  },
];

export default function MenuManagementPage() {
  const [items, setItems] = useState<MenuItem[]>(initialItems);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const handleAdd = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleSubmit = (formData: Omit<MenuItem, 'id'>) => {
    if (editingItem) {
      setItems(items.map((item) => (item.id === editingItem.id ? { ...editingItem, ...formData } : item)));
    } else {
      setItems([...items, { id: Date.now().toString(), ...formData }]);
    }
    setShowForm(false);
    setEditingItem(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Menu Management</h1>
          <p className="text-brand-dark/60">Add, edit, or remove items from your weekly menu</p>
        </div>
        {!showForm && (
          <Button variant="primary" onClick={handleAdd}>
            + Add Item
          </Button>
        )}
      </div>

      {/* Form or Table */}
      {showForm ? (
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6 max-w-2xl">
          <h2 className="text-xl font-semibold text-brand-dark mb-4">
            {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
          </h2>
          <AddMenuItemForm item={editingItem || undefined} onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
      ) : (
        <MenuTable items={items} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Items</p>
          <p className="text-3xl font-bold text-brand-dark">{items.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Available</p>
          <p className="text-3xl font-bold text-green-600">{items.filter((i) => i.available).length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Unavailable</p>
          <p className="text-3xl font-bold text-red-600">{items.filter((i) => !i.available).length}</p>
        </div>
      </div>
    </div>
  );
}
