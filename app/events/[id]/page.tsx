'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dietaryRestrictions: '',
  });

  // Placeholder event data - in real app would fetch from Convex
  const event = {
    id: params.id,
    title: 'West Indian Night Dinner',
    description: 'An evening celebrating authentic Caribbean flavors and traditions',
    date: 'April 26, 2026',
    time: '6:00 PM',
    location: '233 Main St, Lebanon, NJ 08833',
    price: 4500,
    capacity: 20,
    registered: 8,
    fullDescription: 'Join Chef Sean Mark for an unforgettable evening of West Indian cuisine. This multi-course dinner celebrates the vibrant flavors, techniques, and traditions of Caribbean cooking. Each course has been carefully crafted to showcase authentic ingredients and time-honored preparation methods.',
    menu: [
      'Appetizer: Caribbean-spiced plantain chips with guacamole',
      'First Course: Coconut seafood bisque',
      'Main: West Indian brown stew chicken with rice and beans',
      'Vegetable: Callaloo sautéed with garlic',
      'Dessert: Tropical fruit tart with coconut cream',
      'Beverages: Wine and rum punch pairings included',
    ],
    includes: [
      'Four-course meal',
      'Chef presentation and story',
      'Wine and beverage pairings',
      'Dietary accommodations available',
      'Small group setting (20 guests max)',
    ],
  };

  const spotsLeft = event.capacity - event.registered;
  const isSoldOut = spotsLeft <= 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event registration:', { eventId: event.id, ...formData });
    alert('Thank you for registering! Check your email for confirmation.');
    setFormData({ name: '', email: '', phone: '', dietaryRestrictions: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-16">
        <div className="container">
          <Link href="/events" className="text-brand-gold hover:opacity-80 mb-4 inline-block">
            &larr; Back to Events
          </Link>
          <h1 className="text-5xl font-display mb-4">{event.title}</h1>
          <p className="text-xl opacity-90">{event.description}</p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-display mb-4">About This Event</h2>
              <p className="text-lg text-gray-700 mb-4">{event.fullDescription}</p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display mb-4">Menu</h3>
              <ul className="space-y-3">
                {event.menu.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand-gold">🍽️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display mb-4">What&apos;s Included</h3>
              <ul className="space-y-2">
                {event.includes.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar - Registration */}
          <div>
            <div className="bg-brand-gold p-8 rounded-lg sticky top-20">
              <div className="mb-6">
                <p className="text-sm text-brand-dark opacity-75">Date & Time</p>
                <p className="text-lg font-semibold text-brand-dark mb-3">{event.date} at {event.time}</p>

                <p className="text-sm text-brand-dark opacity-75">Location</p>
                <p className="text-lg font-semibold text-brand-dark mb-3">{event.location}</p>

                <p className="text-sm text-brand-dark opacity-75">Price Per Person</p>
                <p className="text-3xl font-bold text-brand-dark mb-6">${(event.price / 100).toFixed(2)}</p>

                <div className="bg-white bg-opacity-50 p-3 rounded mb-4">
                  <p className="text-sm text-brand-dark">
                    {isSoldOut ? (
                      <span className="text-red-600 font-semibold">Sold Out</span>
                    ) : (
                      <span><strong>{spotsLeft}</strong> spots remaining</span>
                    )}
                  </p>
                </div>
              </div>

              {!isSoldOut && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-semibold text-brand-dark">Register Now</h4>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-brand-dark rounded text-sm"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-brand-dark rounded text-sm"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-brand-dark rounded text-sm"
                  />

                  <textarea
                    name="dietaryRestrictions"
                    placeholder="Dietary restrictions or allergies"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-brand-dark rounded text-sm"
                  ></textarea>

                  <Button variant="primary" size="md" className="w-full">
                    Register
                  </Button>
                </form>
              )}

              {isSoldOut && (
                <div className="bg-white bg-opacity-50 p-4 rounded text-center">
                  <p className="text-brand-dark font-semibold mb-2">This event is sold out</p>
                  <Link href="/events">
                    <Button variant="outline" size="sm" className="w-full">
                      View Other Events
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
