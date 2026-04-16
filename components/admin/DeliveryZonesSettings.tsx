'use client';

import { useState } from 'react';
import { DeliveryZone } from '@/lib/settings/defaultSettings';
import { Button } from '@/components/common/Button';

interface DeliveryZonesSettingsProps {
  zones: DeliveryZone[];
  onUpdate: (zones: DeliveryZone[]) => void;
}

export default function DeliveryZonesSettings({
  zones,
  onUpdate,
}: DeliveryZonesSettingsProps) {
  const [showModal, setShowModal] = useState(false);
  const [editingZone, setEditingZone] = useState<DeliveryZone | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<DeliveryZone, 'id'>>({
    name: '',
    zipCodes: [],
    deliveryFee: 0,
    isActive: true,
  });

  const openAddModal = () => {
    setEditingZone(null);
    setFormData({
      name: '',
      zipCodes: [],
      deliveryFee: 0,
      isActive: true,
    });
    setShowModal(true);
  };

  const openEditModal = (zone: DeliveryZone) => {
    setEditingZone(zone);
    setFormData({
      name: zone.name,
      zipCodes: zone.zipCodes,
      deliveryFee: zone.deliveryFee,
      isActive: zone.isActive,
    });
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Zone name is required');
      return;
    }

    if (formData.zipCodes.length === 0) {
      alert('At least one zip code is required');
      return;
    }

    if (editingZone) {
      const updated = zones.map((z) =>
        z.id === editingZone.id ? { ...z, ...formData } : z
      );
      onUpdate(updated);
    } else {
      const newZone: DeliveryZone = {
        id: Date.now().toString(),
        ...formData,
      };
      onUpdate([...zones, newZone]);
    }

    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    const updated = zones.filter((z) => z.id !== id);
    onUpdate(updated);
    setShowDeleteConfirm(null);
  };

  const handleZipCodesChange = (value: string) => {
    const zipCodes = value
      .split(',')
      .map((zip) => zip.trim())
      .filter((zip) => zip.length > 0);
    setFormData((prev) => ({
      ...prev,
      zipCodes,
    }));
  };

  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-brand-dark">Delivery Zones</h2>
        {!showModal && (
          <Button variant="primary" size="sm" onClick={openAddModal}>
            + Add Zone
          </Button>
        )}
      </div>

      {/* Zones Table */}
      {zones.length > 0 && !showModal && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-brand-dark text-brand-cream">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Zone Name</th>
                <th className="px-6 py-3 text-left font-semibold">Zip Codes</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Delivery Fee
                </th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-dark/10">
              {zones.map((zone) => (
                <tr key={zone.id} className="hover:bg-brand-cream/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-brand-dark">
                    {zone.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-brand-dark/70">
                    {zone.zipCodes.join(', ')}
                  </td>
                  <td className="px-6 py-4 text-sm text-brand-dark">
                    ${zone.deliveryFee.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        zone.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {zone.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => openEditModal(zone)}
                      className="px-3 py-1 text-sm bg-brand-gold text-brand-dark rounded hover:bg-brand-gold/90 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(zone.id)}
                      className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-brand-dark mb-4">
              {editingZone ? 'Edit Zone' : 'Add New Zone'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Zone Name */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">
                  Zone Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g., Zone A"
                  className="w-full px-3 py-2 border-2 border-brand-dark/10 rounded text-brand-dark focus:outline-none focus:border-brand-dark"
                />
              </div>

              {/* Zip Codes */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">
                  Zip Codes (comma-separated)
                </label>
                <textarea
                  value={formData.zipCodes.join(', ')}
                  onChange={(e) => handleZipCodesChange(e.target.value)}
                  placeholder="e.g., 07962, 07974"
                  rows={3}
                  className="w-full px-3 py-2 border-2 border-brand-dark/10 rounded text-brand-dark focus:outline-none focus:border-brand-dark"
                />
              </div>

              {/* Delivery Fee */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">
                  Delivery Fee ($)
                </label>
                <input
                  type="number"
                  value={formData.deliveryFee}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      deliveryFee: parseFloat(e.target.value) || 0,
                    }))
                  }
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-3 py-2 border-2 border-brand-dark/10 rounded text-brand-dark focus:outline-none focus:border-brand-dark"
                />
              </div>

              {/* Active Toggle */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        isActive: e.target.checked,
                      }))
                    }
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <span className="text-sm font-medium text-brand-dark">
                    Active
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-brand-dark text-brand-cream rounded hover:opacity-90 transition-opacity font-medium"
                >
                  {editingZone ? 'Update Zone' : 'Add Zone'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border-2 border-brand-dark text-brand-dark rounded hover:bg-brand-dark hover:text-brand-cream transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-brand-dark mb-4">
              Delete Zone
            </h3>
            <p className="text-brand-dark/70 mb-6">
              Are you sure you want to delete this delivery zone? This action
              cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 px-4 py-2 border-2 border-brand-dark text-brand-dark rounded hover:bg-brand-dark hover:text-brand-cream transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
