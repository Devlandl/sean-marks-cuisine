'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    dietaryRestrictions: '',
    budgetRange: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Catering inquiry:', formData);
    // Will be wired to Convex mutation in next task
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', dietaryRestrictions: '', budgetRange: '', message: '' });
  };

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Family Gathering',
    'Holiday Party',
    'Private Dinner',
    'Other',
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    'Over $5,000',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-display mb-4">Event Catering</h1>
          <p className="text-xl opacity-90">Let Sean Mark&apos;s Cuisine transform your gathering with expertly crafted meals</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display text-center mb-12">Why Choose Our Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨-‍🍳</div>
              <h3 className="text-xl font-semibold mb-2">Professional Chef</h3>
              <p className="text-gray-600">Years of experience creating memorable meals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Customized Menus</h3>
              <p className="text-gray-600">Tailored to your event, preferences, and dietary needs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Flawless Execution</h3>
              <p className="text-gray-600">Every detail handled with care and precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menus */}
      <section className="py-16 bg-brand-cream">
        <div className="container">
          <h2 className="text-3xl font-display text-center mb-12">Sample Menus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'West Indian Feast',
                description: 'Authentic Caribbean flavors and traditional dishes',
                items: ['Brown Chicken Stew', 'Plantain Sides', 'Fresh Salads', 'Tropical Desserts'],
              },
              {
                title: 'Contemporary Elegance',
                description: 'Modern cuisine with upscale presentation',
                items: ['Shrimp Boil', 'Polenta Dishes', 'Seasonal Vegetables', 'Gourmet Desserts'],
              },
              {
                title: 'Comfort Classics',
                description: 'Beloved favorites that satisfy everyone',
                items: ['Baked Ziti', 'Cowboy Skillet', 'Vegetarian Options', 'Classic Desserts'],
              },
              {
                title: 'Custom Creation',
                description: 'Work with Sean to build your perfect menu',
                items: ['Your Preferences', 'Dietary Accommodations', 'Signature Dishes', 'Special Requests'],
              },
            ].map((menu, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-display mb-2 text-brand-dark">{menu.title}</h3>
                <p className="text-gray-600 mb-4">{menu.description}</p>
                <ul className="space-y-2">
                  {menu.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm">
                      <span className="text-brand-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-display text-center mb-12">Request a Catering Quote</h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
              />
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Event Date *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Guest Count *</label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  min="10"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
                />
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Type of Event *</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
              >
                <option value="">Select an event type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Dietary Restrictions */}
            <div>
              <label className="block text-sm font-medium mb-2">Dietary Restrictions / Allergies</label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="e.g., vegan, nut allergies, gluten-free"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
              />
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range *</label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
              >
                <option value="">Select your budget</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Additional Details / Special Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your vision for the event..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"
              ></textarea>
            </div>

            {/* Submit */}
            <Button variant="primary" size="lg" className="w-full">
              Request Quote
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Sean will contact you within 24 hours to discuss your event
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
