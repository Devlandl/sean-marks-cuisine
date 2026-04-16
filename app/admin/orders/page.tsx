'use client';

import { useState } from 'react';
import OrdersTable from '@/components/admin/OrdersTable';
import OrderDetailModal from '@/components/admin/OrderDetailModal';

interface OrderItem {
  name: string;
  portion: 'half' | 'full';
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  deliveryDate: string;
  deliveryAddress: string;
  createdAt: string;
}

// Sample orders
const sampleOrders: Order[] = [
  {
    id: 'SMC-001',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    customerPhone: '(555) 123-4567',
    items: [
      { name: 'Jerk Chicken', portion: 'full', quantity: 2, price: 1200 },
      { name: 'Callaloo Soup', portion: 'full', quantity: 1, price: 400 },
    ],
    subtotal: 2800,
    tax: 186,
    total: 2986,
    status: 'pending',
    deliveryDate: '2026-04-20',
    deliveryAddress: '123 Main St, Lebanon, NJ',
    createdAt: '2026-04-15T10:30:00',
  },
  {
    id: 'SMC-002',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah@example.com',
    customerPhone: '(555) 234-5678',
    items: [
      { name: 'Oxtail Stew', portion: 'full', quantity: 1, price: 1500 },
      { name: 'Bread Pudding', portion: 'full', quantity: 2, price: 600 },
    ],
    subtotal: 2700,
    tax: 179,
    total: 2879,
    status: 'preparing',
    deliveryDate: '2026-04-21',
    deliveryAddress: '456 Oak Ave, Lebanon, NJ',
    createdAt: '2026-04-14T15:45:00',
  },
];

export default function OrdersManagementPage() {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (orderId: string, status: string) => {
    const validStatus = status as 'pending' | 'preparing' | 'ready' | 'delivered';
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: validStatus }
          : order
      )
    );
    setSelectedOrder(
      selectedOrder && selectedOrder.id === orderId
        ? { ...selectedOrder, status: validStatus }
        : selectedOrder
    );
  };

  const statuses = ['pending', 'preparing', 'ready', 'delivered'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Orders Management</h1>
        <p className="text-brand-dark/60">View and manage customer orders</p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by order ID or customer name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-2">Filter by Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          >
            <option value="all">All Orders</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <OrdersTable orders={filteredOrders} onSelectOrder={setSelectedOrder} />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Orders</p>
          <p className="text-3xl font-bold text-brand-dark">{orders.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Pending</p>
          <p className="text-3xl font-bold text-yellow-600">{orders.filter((o) => o.status === 'pending').length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Preparing</p>
          <p className="text-3xl font-bold text-blue-600">{orders.filter((o) => o.status === 'preparing').length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Delivered</p>
          <p className="text-3xl font-bold text-green-600">{orders.filter((o) => o.status === 'delivered').length}</p>
        </div>
      </div>

      {/* Modal */}
      <OrderDetailModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}
