'use client';

interface CateringInquiry {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  eventType: string;
  status: 'new' | 'contacted' | 'booked' | 'declined';
  submittedAt: string;
}

interface CateringInquiriesTableProps {
  inquiries: CateringInquiry[];
  onViewDetails: (inquiry: CateringInquiry) => void;
  onStatusChange: (id: string, status: string) => void;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  new: { bg: 'bg-red-100', text: 'text-red-800' },
  contacted: { bg: 'bg-blue-100', text: 'text-blue-800' },
  booked: { bg: 'bg-green-100', text: 'text-green-800' },
  declined: { bg: 'bg-gray-100', text: 'text-gray-800' },
};

export default function CateringInquiriesTable({
  inquiries,
  onViewDetails,
  onStatusChange,
}: CateringInquiriesTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Customer</th>
            <th className="px-6 py-3 text-left font-semibold">Event Type</th>
            <th className="px-6 py-3 text-left font-semibold">Date</th>
            <th className="px-6 py-3 text-left font-semibold">Guests</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id} className="hover:bg-brand-cream/20 transition-colors">
              <td className="px-6 py-4">
                <p className="font-medium text-brand-dark">{inquiry.customerName}</p>
                <p className="text-xs text-brand-dark/60">{inquiry.email}</p>
              </td>
              <td className="px-6 py-4 text-sm text-brand-dark">{inquiry.eventType}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">
                {new Date(inquiry.eventDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm text-brand-dark">{inquiry.guestCount}</td>
              <td className="px-6 py-4">
                <select
                  value={inquiry.status}
                  onChange={(e) => onStatusChange(inquiry.id, e.target.value)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[inquiry.status].bg} ${statusColors[inquiry.status].text} cursor-pointer`}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="booked">Booked</option>
                  <option value="declined">Declined</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onViewDetails(inquiry)}
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
