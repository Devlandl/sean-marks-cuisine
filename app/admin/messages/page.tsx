'use client';

import { useState } from 'react';
import MessagesTable from '@/components/admin/MessagesTable';

interface Message {
  id: string;
  senderName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: boolean;
  submittedAt: string;
}

const sampleMessages: Message[] = [
  {
    id: 'MSG-001',
    senderName: 'David Brown',
    email: 'david@example.com',
    phone: '(555) 444-5555',
    subject: 'Menu Inquiry',
    message:
      'Hi, I am interested in ordering for my office lunch next week. Can you provide details on bulk ordering?',
    read: false,
    submittedAt: '2026-04-15T10:30:00',
  },
  {
    id: 'MSG-002',
    senderName: 'Lisa Garcia',
    email: 'lisa@email.com',
    phone: '(555) 555-6666',
    subject: 'Catering for Wedding',
    message:
      'We are planning a wedding in June and would love to discuss catering options. Please contact us soon.',
    read: false,
    submittedAt: '2026-04-14T14:15:00',
  },
  {
    id: 'MSG-003',
    senderName: 'James Wilson',
    email: 'james@company.com',
    phone: '(555) 666-7777',
    subject: 'General Inquiry',
    message: 'Great food! When is your next event? Would love to attend.',
    read: true,
    submittedAt: '2026-04-13T09:00:00',
  },
  {
    id: 'MSG-004',
    senderName: 'Maria Lopez',
    email: 'maria@example.com',
    phone: '(555) 777-8888',
    subject: 'Dietary Accommodations',
    message: 'Can you accommodate a fully vegan order? Need it for this Friday. Thanks!',
    read: false,
    submittedAt: '2026-04-12T16:45:00',
  },
  {
    id: 'MSG-005',
    senderName: 'Tom Anderson',
    email: 'tom@example.com',
    phone: '(555) 888-9999',
    subject: 'Feedback',
    message: 'Love your oxtail stew! Please keep it on the menu.',
    read: true,
    submittedAt: '2026-04-11T11:20:00',
  },
  {
    id: 'MSG-006',
    senderName: 'Angela Davis',
    email: 'angela@email.com',
    phone: '(555) 999-0000',
    subject: 'Event Sponsorship',
    message: 'Interested in sponsoring a community event. Let us talk.',
    read: false,
    submittedAt: '2026-04-10T13:50:00',
  },
  {
    id: 'MSG-007',
    senderName: 'Kevin Turner',
    email: 'kevin@example.com',
    phone: '(555) 111-1111',
    subject: 'Private Chef Services',
    message: 'Do you offer private chef services? Looking for someone to cater my home.',
    read: true,
    submittedAt: '2026-04-09T10:10:00',
  },
  {
    id: 'MSG-008',
    senderName: 'Rachel Green',
    email: 'rachel@email.com',
    phone: '(555) 222-2222',
    subject: 'Cooking Class Interest',
    message: 'Very interested in the cooking class! When is the next one scheduled?',
    read: false,
    submittedAt: '2026-04-08T15:30:00',
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const filtered = messages.filter((msg) => {
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'read' && msg.read) ||
      (filterStatus === 'unread' && !msg.read);

    const matchesSearch =
      msg.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const unreadCount = messages.filter((m) => !m.read).length;

  const handleMarkRead = (id: string) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, read: !selectedMessage.read });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this message?')) {
      setMessages(messages.filter((msg) => msg.id !== id));
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">
            Contact Messages
          </h1>
          <p className="text-brand-dark/60">Manage submissions from contact form</p>
        </div>
        {unreadCount > 0 && (
          <div className="bg-brand-gold text-brand-dark px-4 py-2 rounded-full font-bold">
            {unreadCount} unread
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-2">Filter by Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as 'all' | 'read' | 'unread')}
            className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <MessagesTable
        messages={filtered}
        onMarkRead={handleMarkRead}
        onViewMessage={setSelectedMessage}
        onDelete={handleDelete}
      />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Messages</p>
          <p className="text-3xl font-bold text-brand-dark">{messages.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Unread</p>
          <p className="text-3xl font-bold text-brand-gold">{unreadCount}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Read</p>
          <p className="text-3xl font-bold text-brand-dark">
            {messages.filter((m) => m.read).length}
          </p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Visible</p>
          <p className="text-3xl font-bold text-brand-dark">{filtered.length}</p>
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">{selectedMessage.subject}</h2>
                <p className="text-sm text-brand-dark/60">{selectedMessage.senderName}</p>
              </div>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-2xl text-brand-dark hover:text-brand-dark/60"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-brand-dark">
              <p>
                <strong>Email:</strong> {selectedMessage.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedMessage.phone}
              </p>
              <p>
                <strong>Submitted:</strong>{' '}
                {new Date(selectedMessage.submittedAt).toLocaleString()}
              </p>
              <div className="border-t-2 border-brand-dark/10 pt-4">
                <p className="font-semibold mb-2">Message:</p>
                <p className="whitespace-pre-wrap text-brand-dark/80">{selectedMessage.message}</p>
              </div>
              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => handleMarkRead(selectedMessage.id)}
                  className="flex-1 px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors font-medium"
                >
                  {selectedMessage.read ? 'Mark Unread' : 'Mark Read'}
                </button>
                <button
                  onClick={() => handleDelete(selectedMessage.id)}
                  className="flex-1 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
