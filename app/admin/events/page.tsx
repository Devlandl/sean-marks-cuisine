'use client';

import { useState } from 'react';
import EventsTable from '@/components/admin/EventsTable';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  capacity: number;
  registrations: number;
  pricePerPerson: number;
  description: string;
  menu: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const sampleEvents: Event[] = [
  {
    id: 'EVT-001',
    title: 'Caribbean Flavor Tasting',
    date: '2026-04-25',
    time: '6:00 PM',
    capacity: 40,
    registrations: 28,
    pricePerPerson: 7500,
    description: 'Experience authentic Caribbean flavors with Sean Mark',
    menu: 'Jerk Chicken, Callaloo, Plantains, Bread Pudding',
    status: 'upcoming',
  },
  {
    id: 'EVT-002',
    title: 'West Indian Cooking Class',
    date: '2026-05-10',
    time: '3:00 PM',
    capacity: 20,
    registrations: 18,
    pricePerPerson: 10000,
    description: 'Learn to cook West Indian dishes from Sean Mark',
    menu: 'Oxtail Stew, Rice & Peas, Garden Salad, Coconut Cake',
    status: 'upcoming',
  },
  {
    id: 'EVT-003',
    title: 'Spring Celebration Dinner',
    date: '2026-04-20',
    time: '7:00 PM',
    capacity: 50,
    registrations: 50,
    pricePerPerson: 9500,
    description: 'Celebrate spring with a multi-course Caribbean dinner',
    menu: 'Multi-course dinner experience',
    status: 'upcoming',
  },
];

export default function EventsManagementPage() {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleAdd = () => {
    setEditingEvent(null);
    setShowForm(true);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this event?')) {
      setEvents(events.filter((e) => e.id !== id));
    }
  };

  const upcomingCount = events.filter((e) => e.status === 'upcoming').length;
  const totalRegistrations = events.reduce((sum, e) => sum + e.registrations, 0);
  const totalCapacity = events.reduce((sum, e) => sum + e.capacity, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Events Management</h1>
          <p className="text-brand-dark/60">Create and manage special events and workshops</p>
        </div>
        {!showForm && (
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-brand-gold text-brand-dark rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
          >
            + Add Event
          </button>
        )}
      </div>

      {/* Form or Table */}
      {showForm ? (
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6 max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-brand-dark">
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-2xl text-brand-dark/60 hover:text-brand-dark"
            >
              ×
            </button>
          </div>
          <p className="text-brand-dark/60">Event form coming soon - placeholder for future implementation</p>
        </div>
      ) : (
        <EventsTable events={events} onEdit={handleEdit} onDelete={handleDelete} onSelectEvent={setSelectedEvent} />
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Events</p>
          <p className="text-3xl font-bold text-brand-dark">{events.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Upcoming</p>
          <p className="text-3xl font-bold text-blue-600">{upcomingCount}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Registrations</p>
          <p className="text-3xl font-bold text-brand-dark">{totalRegistrations}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total Capacity</p>
          <p className="text-3xl font-bold text-brand-dark">{totalCapacity}</p>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-brand-dark">{selectedEvent.title}</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-3xl text-brand-dark/60 hover:text-brand-dark"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-brand-dark">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-brand-dark/60">Date</p>
                  <p className="font-semibold">{new Date(selectedEvent.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-dark/60">Time</p>
                  <p className="font-semibold">{selectedEvent.time}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-dark/60">Price Per Person</p>
                  <p className="font-semibold">${(selectedEvent.pricePerPerson / 100).toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-dark/60">Registrations</p>
                  <p className="font-semibold">{selectedEvent.registrations}/{selectedEvent.capacity}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-brand-dark/60">Description</p>
                <p className="font-semibold">{selectedEvent.description}</p>
              </div>
              <div>
                <p className="text-sm text-brand-dark/60">Menu</p>
                <p className="font-semibold">{selectedEvent.menu}</p>
              </div>
              <div className="pt-4 border-t-2 border-brand-dark/10">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full px-4 py-2 bg-brand-dark text-brand-cream rounded-lg font-semibold hover:bg-brand-dark/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
