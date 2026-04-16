'use client';

import { useState } from 'react';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Manager' | 'Staff';
  joinedDate: string;
  lastActive: string;
}

interface UsersTableProps {
  users: AdminUser[];
  onEditRole: (userId: string, newRole: 'Owner' | 'Manager' | 'Staff') => void;
  onDelete: (userId: string) => void;
}

function formatJoinedDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function UsersTable({ users, onEditRole, onDelete }: UsersTableProps) {
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const isLastOwner = users.filter((u) => u.role === 'Owner').length === 1;

  const handleDeleteClick = (userId: string) => {
    const user = users.find((u) => u.id === userId);

    // Check if it's the only Owner
    if (user?.role === 'Owner' && isLastOwner) {
      alert('Cannot delete the last Owner');
      return;
    }

    // Owner cannot be deleted at all (role is fixed)
    if (user?.role === 'Owner') {
      alert('Owner cannot be deleted');
      return;
    }

    setDeleteConfirm(userId);
  };

  const confirmDelete = (userId: string) => {
    onDelete(userId);
    setDeleteConfirm(null);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-brand-dark text-brand-cream">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-6 py-3 text-left font-semibold">Email</th>
              <th className="px-6 py-3 text-left font-semibold">Role</th>
              <th className="px-6 py-3 text-left font-semibold">Joined Date</th>
              <th className="px-6 py-3 text-left font-semibold">Last Active</th>
              <th className="px-6 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-dark/10">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-brand-cream/20 transition-colors">
                <td className="px-6 py-4 font-medium text-brand-dark">{user.name}</td>
                <td className="px-6 py-4 text-sm text-brand-dark/70">{user.email}</td>
                <td className="px-6 py-4 text-sm">
                  {user.role === 'Owner' ? (
                    <span className="px-3 py-1 bg-brand-gold/20 text-brand-dark rounded-full font-semibold">
                      {user.role}
                    </span>
                  ) : (
                    <select
                      value={user.role}
                      onChange={(e) =>
                        onEditRole(user.id, e.target.value as 'Owner' | 'Manager' | 'Staff')
                      }
                      className="px-3 py-1 bg-white border border-brand-dark/20 rounded font-semibold text-brand-dark cursor-pointer"
                    >
                      <option value="Manager">Manager</option>
                      <option value="Staff">Staff</option>
                    </select>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-brand-dark">
                  {formatJoinedDate(user.joinedDate)}
                </td>
                <td className="px-6 py-4 text-sm text-brand-dark/70">{user.lastActive}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    disabled={user.role === 'Owner'}
                    className={`px-3 py-1 text-sm rounded font-medium transition-colors ${
                      user.role === 'Owner'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : deleteConfirm === user.id
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {deleteConfirm === user.id ? 'Confirm?' : 'Delete'}
                  </button>
                  {deleteConfirm === user.id && (
                    <button
                      onClick={() => confirmDelete(user.id)}
                      className="ml-2 px-3 py-1 text-sm bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
                    >
                      Yes
                    </button>
                  )}
                  {deleteConfirm === user.id && (
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="ml-2 px-3 py-1 text-sm bg-gray-300 text-gray-800 rounded font-medium hover:bg-gray-400 transition-colors"
                    >
                      No
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
