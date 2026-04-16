'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventDate: '', guestCount: '',
    eventType: '', dietaryRestrictions: '', budgetRange: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Catering inquiry:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', dietaryRestrictions: '', budgetRange: '', message: '' });
  };

  const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Family Gathering', 'Holiday Party', 'Private Dinner', 'Other'];
  const budgetRanges = ['Under $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', 'Over $5,000'];

  return (
    <div>
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">Event Catering</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">Let Sean Mark&apos;s Cuisine transform your gathering with expertly crafted meals</p>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-brand-heading">Why Choose Our Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Chef', desc: 'Years of experience creating memorable meals', icon: 'M12 2a4 4 0 0 0-4 4c0 2 2 3 2 5h4c0-2 2-3 2-5a4 4 0 0 0-4-4zM8 13v2h8v-2H8zm1 4v1a3 3 0 0 0 6 0v-1H9z' },
              { title: 'Customized Menus', desc: 'Tailored to your event, preferences, and dietary needs', icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5h6M9 14l2 2 4-4' },
              { title: 'Flawless Execution', desc: 'Every detail handled with care and precision', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
            ].map((card) => (
              <div key={card.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-brand-accent/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d={card.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-brand-heading mb-2">{card.title}</h3>
                <p className="text-brand-text/60 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-extrabold text-brand-heading">Sample Menus</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'West Indian Feast', description: 'Authentic Caribbean flavors and traditional dishes', items: ['Brown Chicken Stew', 'Plantain Sides', 'Fresh Salads', 'Tropical Desserts'] },
              { title: 'Contemporary Elegance', description: 'Modern cuisine with upscale presentation', items: ['Shrimp Boil', 'Polenta Dishes', 'Seasonal Vegetables', 'Gourmet Desserts'] },
              { title: 'Comfort Classics', description: 'Beloved favorites that satisfy everyone', items: ['Baked Ziti', 'Cowboy Skillet', 'Vegetarian Options', 'Classic Desserts'] },
              { title: 'Custom Creation', description: 'Work with Sean to build your perfect menu', items: ['Your Preferences', 'Dietary Accommodations', 'Signature Dishes', 'Special Requests'] },
            ].map((menu) => (
              <div key={menu.title} className="bg-brand-surface rounded-lg p-8 border border-brand-border hover:border-brand-accent/40 transition-colors">
                <h3 className="text-xl font-bold text-brand-heading mb-2">{menu.title}</h3>
                <p className="text-brand-text/60 text-sm mb-6">{menu.description}</p>
                <ul className="space-y-3">
                  {menu.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-brand-text/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-brand-heading">Request a Catering Quote</h2>
          <form onSubmit={handleSubmit} className="bg-brand-base p-8 md:p-10 rounded-lg border border-brand-border space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Your Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="dark-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="dark-input" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="dark-input" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Event Date *</label>
                <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required className="dark-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Guest Count *</label>
                <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} min="10" required className="dark-input" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Type of Event *</label>
              <select name="eventType" value={formData.eventType} onChange={handleChange} required className="dark-select">
                <option value="">Select an event type</option>
                {eventTypes.map(type => (<option key={type} value={type}>{type}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Dietary Restrictions / Allergies</label>
              <input type="text" name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} placeholder="e.g., vegan, nut allergies, gluten-free" className="dark-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Budget Range *</label>
              <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} required className="dark-select">
                <option value="">Select your budget</option>
                {budgetRanges.map(range => (<option key={range} value={range}>{range}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Additional Details</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your vision for the event..." className="dark-input" />
            </div>
            <Button variant="primary" size="lg" className="w-full">Request Quote</Button>
            <p className="text-xs text-brand-text/40 text-center">Sean will contact you within 24 hours to discuss your event</p>
          </form>
        </div>
      </section>
    </div>
  );
}
