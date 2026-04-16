'use client';

interface MenuItem {
  id: string;
  name: string;
  category: 'Main' | 'Addon' | 'Dessert';
  halfPrice?: number;
  fullPrice?: number;
  available: boolean;
}

interface MenuTableProps {
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
  onDelete: (id: string) => void;
}

export default function MenuTable({ items, onEdit, onDelete }: MenuTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Item Name</th>
            <th className="px-6 py-3 text-left font-semibold">Category</th>
            <th className="px-6 py-3 text-left font-semibold">Price</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-brand-cream/20 transition-colors">
              <td className="px-6 py-4 font-medium text-brand-dark">{item.name}</td>
              <td className="px-6 py-4 text-sm text-brand-dark/70">{item.category}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">
                {item.halfPrice && item.fullPrice ? (
                  <>
                    Half: ${(item.halfPrice / 100).toFixed(2)} | Full: ${(item.fullPrice / 100).toFixed(2)}
                  </>
                ) : (
                  `$${((item.halfPrice || item.fullPrice || 0) / 100).toFixed(2)}`
                )}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => onEdit(item)}
                  className="px-3 py-1 text-sm bg-brand-gold text-brand-dark rounded hover:bg-brand-gold/90 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
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
  );
}
