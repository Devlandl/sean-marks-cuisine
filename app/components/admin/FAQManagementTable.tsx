'use client';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FAQManagementTableProps {
  items: FAQItem[];
  onEdit: (item: FAQItem) => void;
  onDelete: (id: string) => void;
}

export default function FAQManagementTable({ items, onEdit, onDelete }: FAQManagementTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Category</th>
            <th className="px-6 py-3 text-left font-semibold">Question</th>
            <th className="px-6 py-3 text-left font-semibold">Answer Preview</th>
            <th className="px-6 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-brand-cream/20 transition-colors">
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-brand-gold/20 text-brand-dark text-xs rounded-full font-medium">
                  {item.category}
                </span>
              </td>
              <td className="px-6 py-4">
                <p className="font-medium text-brand-dark text-sm">{item.question}</p>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-brand-dark/60 truncate">{item.answer.substring(0, 50)}...</p>
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
