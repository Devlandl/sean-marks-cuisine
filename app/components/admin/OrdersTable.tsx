'use client';

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  createdAt: string;
  deliveryDate: string;
}

interface OrdersTableProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  preparing: { bg: 'bg-blue-100', text: 'text-blue-800' },
  ready: { bg: 'bg-green-100', text: 'text-green-800' },
  delivered: { bg: 'bg-gray-100', text: 'text-gray-800' },
};

export default function OrdersTable({ orders, onSelectOrder }: OrdersTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Order #</th>
            <th className="px-6 py-3 text-left font-semibold">Customer</th>
            <th className="px-6 py-3 text-left font-semibold">Total</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Delivery Date</th>
            <th className="px-6 py-3 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-brand-cream/20 transition-colors">
              <td className="px-6 py-4 font-mono text-sm font-medium text-brand-dark">{order.id}</td>
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-brand-dark">{order.customerName}</p>
                  <p className="text-xs text-brand-dark/60">{order.customerEmail}</p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-brand-dark">${(order.total / 100).toFixed(2)}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status].bg} ${statusColors[order.status].text}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-brand-dark">
                {new Date(order.deliveryDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onSelectOrder(order)}
                  className="px-3 py-1 text-sm bg-brand-gold text-brand-dark rounded hover:bg-brand-gold/90 transition-colors font-medium"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
