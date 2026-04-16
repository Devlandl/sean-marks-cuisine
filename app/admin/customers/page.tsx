'use client';

import { useState } from 'react';
import CustomersTable from '@/components/admin/CustomersTable';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orderCount: number;
  totalSpent: number;
  lastOrderDate: string;
  joinedDate: string;
}

const sampleCustomers: Customer[] = [
  {
    id: 'CUST-001',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    orderCount: 5,
    totalSpent: 14950,
    lastOrderDate: '2026-04-10',
    joinedDate: '2026-03-01',
  },
  {
    id: 'CUST-002',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '(555) 234-5678',
    orderCount: 3,
    totalSpent: 8750,
    lastOrderDate: '2026-04-08',
    joinedDate: '2026-03-15',
  },
  {
    id: 'CUST-003',
    name: 'Michael Chen',
    email: 'michael@company.com',
    phone: '(555) 111-2222',
    orderCount: 2,
    totalSpent: 5200,
    lastOrderDate: '2026-04-05',
    joinedDate: '2026-03-20',
  },
  {
    id: 'CUST-004',
    name: 'Amanda Williams',
    email: 'amanda@email.com',
    phone: '(555) 222-3333',
    orderCount: 8,
    totalSpent: 31500,
    lastOrderDate: '2026-04-12',
    joinedDate: '2026-02-10',
  },
  {
    id: 'CUST-005',
    name: 'Robert Martinez',
    email: 'robert@example.com',
    phone: '(555) 333-4444',
    orderCount: 4,
    totalSpent: 16200,
    lastOrderDate: '2026-04-11',
    joinedDate: '2026-03-05',
  },
];

export default function CustomersPage() {
  const [customers] = useState<Customer[]>(sampleCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const filtered = customers.filter((cust) =>
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSpent = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const totalOrders = customers.reduce((sum, c) => sum + c.orderCount, 0);
  const avgOrderValue = totalOrders > 0 ? Math.round(totalSpent / totalOrders) : 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Customers</h1>
        <p className="text-brand-dark/60">View and manage customer information</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-2">Search</label>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
        />
      </div>

      <CustomersTable customers={filtered} onViewDetails={setSelectedCustomer} />

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Customers</p>
          <p className="text-3xl font-bold text-brand-dark">{customers.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Orders</p>
          <p className="text-3xl font-bold text-brand-dark">{totalOrders}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Revenue</p>
          <p className="text-3xl font-bold text-brand-gold">${(totalSpent / 100).toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Avg Order Value</p>
          <p className="text-3xl font-bold text-brand-dark">${(avgOrderValue / 100).toFixed(2)}</p>
        </div>
      </div>

      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-brand-dark">{selectedCustomer.name}</h2>
              <button onClick={() => setSelectedCustomer(null)} className="text-2xl">×</button>
            </div>
            <div className="space-y-3 text-brand-dark">
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
              <p><strong>Member Since:</strong> {new Date(selectedCustomer.joinedDate).toLocaleDateString()}</p>
              <p><strong>Total Orders:</strong> {selectedCustomer.orderCount}</p>
              <p><strong>Total Spent:</strong> ${(selectedCustomer.totalSpent / 100).toFixed(2)}</p>
              <p><strong>Last Order:</strong> {new Date(selectedCustomer.lastOrderDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
