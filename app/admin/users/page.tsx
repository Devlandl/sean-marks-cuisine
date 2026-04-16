'use client';

import { useState } from 'react';
import UsersTable from '@/app/components/admin/UsersTable';
import AddAdminModal from '@/app/components/admin/AddAdminModal';
import AdminActivityLog from '@/app/components/admin/AdminActivityLog';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Manager' | 'Staff';
  joinedDate: string;
  lastActive: string;
}

interface ActivityLog {
  id: string;
  admin: string;
  action: string;
  details: string;
  timestamp: string;
}

export default function AdminUsersPage() {
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    {
      id: '1',
      name: 'Sean Marks',
      email: 'sean@seanmarkscuisine.com',
      role: 'Owner',
      joinedDate: '2024-01-10',
      lastActive: '10 mins ago',
    },
    {
      id: '2',
      name: 'Manager User',
      email: 'manager@seanmarkscuisine.com',
      role: 'Manager',
      joinedDate: '2024-02-05',
      lastActive: '30 mins ago',
    },
    {
      id: '3',
      name: 'Staff 1',
      email: 'staff1@seanmarkscuisine.com',
      role: 'Staff',
      joinedDate: '2024-03-01',
      lastActive: '2 hours ago',
    },
    {
      id: '4',
      name: 'Staff 2',
      email: 'staff2@seanmarkscuisine.com',
      role: 'Staff',
      joinedDate: '2024-03-15',
      lastActive: '5 hours ago',
    },
    {
      id: '5',
      name: 'Staff 3',
      email: 'staff3@seanmarkscuisine.com',
      role: 'Staff',
      joinedDate: '2024-04-01',
      lastActive: '1 day ago',
    },
  ]);

  const [activityLogs] = useState<ActivityLog[]>([
    {
      id: '1',
      admin: 'Sean Marks',
      action: 'Created menu item',
      details: 'Herb Roasted Chicken',
      timestamp: '2024-04-15T14:30:00Z',
    },
    {
      id: '2',
      admin: 'Manager User',
      action: 'Updated order status',
      details: 'Order #1234 marked ready',
      timestamp: '2024-04-15T12:15:00Z',
    },
    {
      id: '3',
      admin: 'Staff 1',
      action: 'Added gallery image',
      details: 'image_12345.jpg',
      timestamp: '2024-04-14T08:45:00Z',
    },
    {
      id: '4',
      admin: 'Sean Marks',
      action: 'Deleted menu item',
      details: 'Salmon Fillet',
      timestamp: '2024-04-13T16:20:00Z',
    },
    {
      id: '5',
      admin: 'Manager User',
      action: 'Added catering inquiry',
      details: 'Wedding event',
      timestamp: '2024-04-12T10:00:00Z',
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleEditRole = (userId: string, newRole: 'Owner' | 'Manager' | 'Staff') => {
    setAdminUsers((prev) =>
      prev.map((user) =>
        user.id === userId && user.role !== 'Owner' ? { ...user, role: newRole } : user
      )
    );
  };

  const handleDeleteAdmin = (userId: string) => {
    const user = adminUsers.find((u) => u.id === userId);

    // Prevent deletion of Owner
    if (!user || user.role === 'Owner') {
      alert('Owner cannot be deleted');
      return;
    }

    setAdminUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  const handleAddAdmin = (email: string, role: 'Owner' | 'Manager' | 'Staff') => {
    const newId = String(Math.max(...adminUsers.map((u) => parseInt(u.id)), 0) + 1);
    const newUser: AdminUser = {
      id: newId,
      name: email.split('@')[0],
      email,
      role,
      joinedDate: new Date().toISOString().split('T')[0],
      lastActive: 'Just now',
    };

    setAdminUsers((prev) => [...prev, newUser]);
    setShowAddModal(false);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Admin Users</h1>
          <p className="text-brand-dark/60 mt-1">Manage admin user accounts and roles</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-brand-gold text-brand-dark rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
        >
          + Add Admin
        </button>
      </div>

      {/* Role Permissions Summary */}
      <div className="bg-brand-cream border-2 border-brand-dark/10 rounded-lg p-6">
        <h2 className="text-lg font-bold text-brand-dark mb-4">Role Permissions Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-brand-dark mb-2">Owner</h3>
            <p className="text-sm text-brand-dark/70">Full access to all admin features</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-dark mb-2">Manager</h3>
            <p className="text-sm text-brand-dark/70">
              Can manage menu, orders, catering, events, gallery, FAQ, messages, settings
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-dark mb-2">Staff</h3>
            <p className="text-sm text-brand-dark/70">
              Can view orders, catering, events (read-only), manage gallery and FAQ
            </p>
          </div>
        </div>
      </div>

      {/* Admin Users Table */}
      <div>
        <h2 className="text-xl font-bold text-brand-dark mb-4">Admin Users</h2>
        <UsersTable
          users={adminUsers}
          onEditRole={handleEditRole}
          onDelete={handleDeleteAdmin}
        />
      </div>

      {/* Activity Log */}
      <div>
        <h2 className="text-xl font-bold text-brand-dark mb-4">Admin Activity Log</h2>
        <AdminActivityLog logs={activityLogs} />
      </div>

      {/* Add Admin Modal */}
      {showAddModal && (
        <AddAdminModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddAdmin}
        />
      )}
    </div>
  );
}
