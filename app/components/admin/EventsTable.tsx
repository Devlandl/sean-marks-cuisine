'use client';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  capacity: number;
  registrations: number;
  pricePerPerson: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface EventsTableProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  onSelectEvent?: (event: Event) => void;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  upcoming: { bg: 'bg-blue-100', text: 'text-blue-800' },
  completed: { bg: 'bg-gray-100', text: 'text-gray-800' },
  cancelled: { bg: 'bg-red-100', text: 'text-red-800' },
};

export default function EventsTable({ events, onEdit, onDelete, onSelectEvent }: EventsTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Event Title</th>
            <th className="px-6 py-3 text-left font-semibold">Date & Time</th>
            <th className="px-6 py-3 text-left font-semibold">Price</th>
            <th className="px-6 py-3 text-left font-semibold">Capacity</th>
            <th className="px-6 py-3 text-left font-semibold">Registrations</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-brand-cream/20 transition-colors">
              <td className="px-6 py-4 font-medium text-brand-dark">{event.title}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </td>
              <td className="px-6 py-4 font-medium text-brand-dark">${(event.pricePerPerson / 100).toFixed(2)}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">{event.capacity}</td>
              <td className="px-6 py-4 text-sm">
                <span className={event.registrations >= event.capacity ? 'text-red-600 font-bold' : 'text-brand-dark'}>
                  {event.registrations}/{event.capacity}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[event.status].bg} ${statusColors[event.status].text}`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => onSelectEvent?.(event)}
                  className="px-3 py-1 text-sm bg-brand-gold text-brand-dark rounded hover:bg-brand-gold/90 transition-colors font-medium"
                >
                  View
                </button>
                <button
                  onClick={() => onEdit(event)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(event.id)}
                  className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors font-medium"
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
