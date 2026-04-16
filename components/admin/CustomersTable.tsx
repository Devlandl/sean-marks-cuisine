'use client';

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

interface CustomersTableProps {
  customers: Customer[];
  onViewDetails: (customer: Customer) => void;
}

export default function CustomersTable({ customers, onViewDetails }: CustomersTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Customer</th>
            <th className="px-6 py-3 text-left font-semibold">Email</th>
            <th className="px-6 py-3 text-left font-semibold">Phone</th>
            <th className="px-6 py-3 text-left font-semibold">Orders</th>
            <th className="px-6 py-3 text-left font-semibold">Total Spent</th>
            <th className="px-6 py-3 text-left font-semibold">Last Order</th>
            <th className="px-6 py-3 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-brand-cream/20 transition-colors">
              <td className="px-6 py-4 font-medium text-brand-dark">{customer.name}</td>
              <td className="px-6 py-4 text-sm text-brand-dark/70">{customer.email}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">{customer.phone}</td>
              <td className="px-6 py-4 font-medium text-brand-dark">{customer.orderCount}</td>
              <td className="px-6 py-4 font-semibold text-brand-gold">${(customer.totalSpent / 100).toFixed(2)}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">
                {new Date(customer.lastOrderDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onViewDetails(customer)}
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
