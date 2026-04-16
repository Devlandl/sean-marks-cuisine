'use client';

interface Message {
  id: string;
  senderName: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  submittedAt: string;
}

interface MessagesTableProps {
  messages: Message[];
  onMarkRead: (id: string) => void;
  onViewMessage: (message: Message) => void;
  onDelete: (id: string) => void;
}

export default function MessagesTable({
  messages,
  onMarkRead,
  onViewMessage,
  onDelete,
}: MessagesTableProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-cream">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">From</th>
            <th className="px-6 py-3 text-left font-semibold">Subject</th>
            <th className="px-6 py-3 text-left font-semibold">Date</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-dark/10">
          {messages.map((msg) => (
            <tr
              key={msg.id}
              className={`hover:bg-brand-cream/20 transition-colors ${!msg.read ? 'bg-brand-gold/10' : ''}`}
            >
              <td className="px-6 py-4">
                <p
                  className={`font-medium text-sm ${!msg.read ? 'font-bold text-brand-dark' : 'text-brand-dark'}`}
                >
                  {msg.senderName}
                </p>
                <p className="text-xs text-brand-dark/60">{msg.email}</p>
              </td>
              <td className="px-6 py-4 text-sm text-brand-dark">{msg.subject}</td>
              <td className="px-6 py-4 text-sm text-brand-dark">
                {new Date(msg.submittedAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    msg.read
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-brand-gold text-brand-dark font-bold'
                  }`}
                >
                  {msg.read ? 'Read' : 'Unread'}
                </span>
              </td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => onViewMessage(msg)}
                  className="px-3 py-1 text-sm bg-brand-gold text-brand-dark rounded hover:bg-brand-gold/90 transition-colors font-medium"
                >
                  View
                </button>
                <button
                  onClick={() => onMarkRead(msg.id)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                >
                  {msg.read ? 'Unread' : 'Read'}
                </button>
                <button
                  onClick={() => onDelete(msg.id)}
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
