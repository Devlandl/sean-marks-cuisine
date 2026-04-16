'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function CateringPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', dietaryRestrictions: '', budgetRange: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); console.log('Catering inquiry:', formData); alert('Thank you! We will contact you soon.'); setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', dietaryRestrictions: '', budgetRange: '', message: '' }); };
  const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Family Gathering', 'Holiday Party', 'Private Dinner', 'Other'];
  const budgetRanges = ['Under $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', 'Over $5,000'];

  return (
    <div>
      <section className="pt-20 pb-24 text-center">
        <div className="container hero-animate">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">Private Events</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-heading mb-6 font-normal">Event Catering</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light">Let Sean Mark&apos;s Cuisine transform your gathering with expertly crafted meals</p>
        </div>
      </section>

      <section className="py-28 border-t border-white/[0.04]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 stagger-children">
            {[
              { num: '01', title: 'Professional Chef', desc: 'Years of experience creating memorable meals' },
              { num: '02', title: 'Customized Menus', desc: 'Tailored to your event, preferences, and dietary needs' },
              { num: '03', title: 'Flawless Execution', desc: 'Every detail handled with care and precision' },
            ].map((card) => (
              <div key={card.title}>
                <span className="text-[11px] tracking-[0.3em] text-brand-accent/40 font-medium">{card.num}</span>
                <h3 className="font-serif text-2xl text-brand-heading mt-3 mb-4 font-normal">{card.title}</h3>
                <p className="text-white/35 font-light text-[15px] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-white/[0.04]">
        <div className="container">
          <h2 className="font-serif text-3xl text-brand-heading mb-14 font-normal">Sample Menus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {[
              { title: 'West Indian Feast', description: 'Authentic Caribbean flavors', items: ['Brown Chicken Stew', 'Plantain Sides', 'Fresh Salads', 'Tropical Desserts'] },
              { title: 'Contemporary Elegance', description: 'Modern cuisine with upscale presentation', items: ['Shrimp Boil', 'Polenta Dishes', 'Seasonal Vegetables', 'Gourmet Desserts'] },
              { title: 'Comfort Classics', description: 'Beloved favorites that satisfy', items: ['Baked Ziti', 'Cowboy Skillet', 'Vegetarian Options', 'Classic Desserts'] },
              { title: 'Custom Creation', description: 'Build your perfect menu', items: ['Your Preferences', 'Dietary Accommodations', 'Signature Dishes', 'Special Requests'] },
            ].map((menu) => (
              <div key={menu.title} className="py-8 px-7 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover-lift">
                <h3 className="font-serif text-xl text-brand-heading mb-1 font-normal">{menu.title}</h3>
                <p className="text-white/25 text-sm mb-6 font-light">{menu.description}</p>
                <ul className="space-y-2.5">
                  {menu.items.map((item) => (<li key={item} className="text-white/40 text-sm font-light flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-white/15" />{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-white/[0.04]">
        <div className="container max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 text-center font-medium">Get Started</p>
          <h2 className="font-serif text-3xl text-center mb-14 text-brand-heading font-normal">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="dark-input" /></div>
              <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="dark-input" /></div>
            </div>
            <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Phone *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="dark-input" /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Event Date *</label><input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required className="dark-input" /></div>
              <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Guest Count *</label><input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} min="10" required className="dark-input" /></div>
            </div>
            <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Event Type *</label><select name="eventType" value={formData.eventType} onChange={handleChange} required className="dark-select"><option value="">Select type</option>{eventTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
            <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Dietary Restrictions</label><input type="text" name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} placeholder="e.g., vegan, nut allergies" className="dark-input" /></div>
            <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Budget *</label><select name="budgetRange" value={formData.budgetRange} onChange={handleChange} required className="dark-select"><option value="">Select budget</option>{budgetRanges.map(r => <option key={r} value={r}>{r}</option>)}</select></div>
            <div><label className="block text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Details</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your vision..." className="dark-input" /></div>
            <Button variant="primary" size="lg" className="w-full mt-4">Request Quote</Button>
            <p className="text-[11px] text-white/20 text-center tracking-wider mt-2">Response within 24 hours</p>
          </form>
        </div>
      </section>
    </div>
  );
}
