'use client';

import { useState } from 'react';
import CateringInquiriesTable from '@/components/admin/CateringInquiriesTable';

interface CateringInquiry {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  eventType: string;
  budget: string;
  dietaryRestrictions: string;
  details: string;
  status: 'new' | 'contacted' | 'booked' | 'declined';
  submittedAt: string;
}

const sampleInquiries: CateringInquiry[] = [
  {
    id: 'CAT-001',
    customerName: 'Michael Chen',
    email: 'michael@company.com',
    phone: '(555) 111-2222',
    eventDate: '2026-05-15',
    guestCount: 50,
    eventType: 'Corporate Event',
    budget: '$3000-$5000',
    dietaryRestrictions: 'Vegetarian options needed',
    details: 'Team celebration lunch for tech company',
    status: 'new',
    submittedAt: '2026-04-12T10:30:00',
  },
  {
    id: 'CAT-002',
    customerName: 'Amanda Williams',
    email: 'amanda@email.com',
    phone: '(555) 222-3333',
    eventDate: '2026-06-20',
    guestCount: 75,
    eventType: 'Wedding Reception',
    budget: '$5000+',
    dietaryRestrictions: 'Vegan and gluten-free options',
    details: 'Caribbean-themed wedding reception',
    status: 'contacted',
    submittedAt: '2026-04-10T14:15:00',
  },
  {
    id: 'CAT-003',
    customerName: 'Robert Martinez',
    email: 'robert@example.com',
    phone: '(555) 333-4444',
    eventDate: '2026-05-05',
    guestCount: 30,
    eventType: 'Family Gathering',
    budget: '$500-$1000',
    dietaryRestrictions: 'None',
    details: 'Family reunion celebration',
    status: 'booked',
    submittedAt: '2026-04-08T09:00:00',
  },
];

export default function CateringInquiriesPage() {
  const [inquiries, setInquiries] = useState<CateringInquiry[]>(sampleInquiries);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<CateringInquiry | null>(null);

  const filtered = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === 'all' || inq.status === filterStatus;
    const matchesSearch =
      inq.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, status: string) => {
    const validStatus = status as 'new' | 'contacted' | 'booked' | 'declined';
    setInquiries(
      inquiries.map((inq) =>
        inq.id === id ? { ...inq, status: validStatus } : inq
      )
    );
    setSelectedInquiry(
      selectedInquiry && selectedInquiry.id === id
        ? { ...selectedInquiry, status: validStatus }
        : selectedInquiry
    );
  };

  const statuses = ['new', 'contacted', 'booked', 'declined'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Catering Inquiries</h1>
        <p className="text-brand-dark/60">Manage catering requests from customers</p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by name or email..."
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
            <option value="all">All Inquiries</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <CateringInquiriesTable
        inquiries={filtered}
        onViewDetails={setSelectedInquiry}
        onStatusChange={handleStatusChange}
      />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Inquiries</p>
          <p className="text-3xl font-bold text-brand-dark">{inquiries.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">New</p>
          <p className="text-3xl font-bold text-red-600">
            {inquiries.filter((i) => i.status === 'new').length}
          </p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Booked</p>
          <p className="text-3xl font-bold text-green-600">
            {inquiries.filter((i) => i.status === 'booked').length}
          </p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Contacted</p>
          <p className="text-3xl font-bold text-blue-600">
            {inquiries.filter((i) => i.status === 'contacted').length}
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-brand-dark text-brand-cream px-6 py-4 flex justify-between items-center sticky top-0">
              <h2 className="text-xl font-semibold">Inquiry #{selectedInquiry.id}</h2>
              <button
                onClick={() => setSelectedInquiry(null)}
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
                    <p className="font-medium text-brand-dark">{selectedInquiry.customerName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/60">Email</p>
                    <p className="font-medium text-brand-dark">{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/60">Phone</p>
                    <p className="font-medium text-brand-dark">{selectedInquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/60">Submitted</p>
                    <p className="font-medium text-brand-dark">
                      {new Date(selectedInquiry.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div>
                <h3 className="font-semibold text-brand-dark mb-3">Event Information</h3>
                <div className="grid grid-cols-2 gap-4 bg-brand-cream/30 p-4 rounded-lg">
                  <div>
                    <p className="text-xs text-brand-dark/60">Event Type</p>
                    <p className="font-medium text-brand-dark">{selectedInquiry.eventType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/60">Event Date</p>
                    <p className="font-medium text-brand-dark">
                      {new Date(selectedInquiry.eventDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/60">Guest Count</p>
                    <p className="font-medium text-brand-dark">{selectedInquiry.guestCount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/60">Budget</p>
                    <p className="font-medium text-brand-dark">{selectedInquiry.budget}</p>
                  </div>
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <h3 className="font-semibold text-brand-dark mb-3">Dietary Restrictions</h3>
                <div className="bg-brand-cream/30 p-4 rounded-lg">
                  <p className="text-sm text-brand-dark">{selectedInquiry.dietaryRestrictions}</p>
                </div>
              </div>

              {/* Details */}
              <div>
                <h3 className="font-semibold text-brand-dark mb-3">Details</h3>
                <div className="bg-brand-cream/30 p-4 rounded-lg">
                  <p className="text-sm text-brand-dark">{selectedInquiry.details}</p>
                </div>
              </div>

              {/* Status Update */}
              <div>
                <h3 className="font-semibold text-brand-dark mb-3">Inquiry Status</h3>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value)}
                  className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedInquiry(null)}
                className="w-full px-4 py-2 bg-brand-dark text-brand-cream rounded-lg hover:bg-brand-dark/90 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
