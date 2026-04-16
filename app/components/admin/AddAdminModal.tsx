'use client';

import { useState } from 'react';

interface AddAdminModalProps {
  onClose: () => void;
  onSubmit: (email: string, role: 'Owner' | 'Manager' | 'Staff') => void;
}

export default function AddAdminModal({ onClose, onSubmit }: AddAdminModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Owner' | 'Manager' | 'Staff'>('Staff');
  const [submitted, setSubmitted] = useState(false);
  const [invitationToken] = useState('xyz123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Please enter an email address');
      return;
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    onSubmit(email, role);
    setSubmitted(true);

    // Close modal after 2 seconds to show success message
    setTimeout(() => {
      onClose();
      setEmail('');
      setRole('Staff');
      setSubmitted(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Invitation Sent!</h2>
          <p className="text-brand-dark mb-4">
            Invitation sent to <strong>{email}</strong>
          </p>
          <div className="bg-brand-cream p-4 rounded-lg mb-4">
            <p className="text-sm text-brand-dark/70 mb-2">Invitation Link:</p>
            <p className="text-sm font-mono text-brand-dark break-all">
              https://seanmarkscuisine.com/admin/invite?token={invitationToken}
            </p>
          </div>
          <p className="text-sm text-brand-dark/70">
            The user can use this link to accept the invitation and set up their account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Add New Admin</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@seanmarkscuisine.com"
              className="w-full px-4 py-2 border border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'Owner' | 'Manager' | 'Staff')}
              className="w-full px-4 py-2 border border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
            >
              <option value="Owner">Owner</option>
              <option value="Manager">Manager</option>
              <option value="Staff">Staff</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-brand-dark/20 text-brand-dark rounded-lg font-semibold hover:bg-brand-cream/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-brand-gold text-brand-dark rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
