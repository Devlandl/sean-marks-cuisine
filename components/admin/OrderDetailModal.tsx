'use client';

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

interface OrderDetailModalProps {
  order: Order | null;
  onClose: () => void;
  onStatusChange: (orderId: string, status: string) => void;
}

const statuses = ['pending', 'preparing', 'ready', 'delivered'];

export default function OrderDetailModal({ order, onClose, onStatusChange }: OrderDetailModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-brand-dark text-brand-cream px-6 py-4 flex justify-between items-center sticky top-0">
          <h2 className="text-xl font-semibold">Order #{order.id}</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:opacity-70 transition-opacity"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Customer Info */}
          <div>
            <h3 className="font-semibold text-brand-dark mb-3">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4 bg-brand-cream/30 p-4 rounded-lg">
              <div>
                <p className="text-xs text-brand-dark/60">Name</p>
                <p className="font-medium text-brand-dark">{order.customerName}</p>
              </div>
              <div>
                <p className="text-xs text-brand-dark/60">Email</p>
                <p className="font-medium text-brand-dark">{order.customerEmail}</p>
              </div>
              <div>
                <p className="text-xs text-brand-dark/60">Phone</p>
                <p className="font-medium text-brand-dark">{order.customerPhone}</p>
              </div>
              <div>
                <p className="text-xs text-brand-dark/60">Ordered</p>
                <p className="font-medium text-brand-dark">{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <h3 className="font-semibold text-brand-dark mb-3">Delivery Information</h3>
            <div className="bg-brand-cream/30 p-4 rounded-lg">
              <p className="text-sm mb-2">
                <strong>Date:</strong> {new Date(order.deliveryDate).toLocaleDateString()}
              </p>
              <p className="text-sm">
                <strong>Address:</strong> {order.deliveryAddress}
              </p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h3 className="font-semibold text-brand-dark mb-3">Order Items</h3>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={`${item.name}-${item.portion}`} className="flex justify-between text-sm border-b border-brand-dark/10 pb-2">
                  <span className="text-brand-dark">{item.name} ({item.portion})</span>
                  <span className="text-brand-dark">
                    × {item.quantity} = ${((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="bg-brand-cream/30 p-4 rounded-lg">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal:</span>
              <span>${(order.subtotal / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Tax:</span>
              <span>${(order.tax / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-brand-dark/20 pt-2">
              <span>Total:</span>
              <span className="text-brand-gold">${(order.total / 100).toFixed(2)}</span>
            </div>
          </div>

          {/* Status Update */}
          <div>
            <h3 className="font-semibold text-brand-dark mb-3">Order Status</h3>
            <select
              value={order.status}
              onChange={(e) => onStatusChange(order.id, e.target.value)}
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-brand-dark text-brand-cream rounded-lg hover:bg-brand-dark/90 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
