import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function EventsPage() {
  const events = [
    { id: '1', title: 'West Indian Night Dinner', description: 'An evening celebrating authentic Caribbean flavors and traditions', date: 'April 26, 2026', time: '6:00 PM', price: 4500, capacity: 20, registered: 8 },
    { id: '2', title: 'Cooking Class: Technique & Flavors', description: 'Learn professional cooking techniques from Chef Sean Mark', date: 'May 3, 2026', time: '2:00 PM', price: 7500, capacity: 12, registered: 5 },
    { id: '3', title: 'Farm-to-Table Spring Tasting', description: 'Multi-course dinner celebrating seasonal, fresh ingredients', date: 'May 10, 2026', time: '7:00 PM', price: 6000, capacity: 25, registered: 12 },
  ];

  return (
    <div>
      <section className="pt-32 pb-20 text-center">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">Upcoming</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-heading mb-6 font-normal">Special Events</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light">Exclusive dinners, cooking classes, and culinary experiences</p>
        </div>
      </section>

      <section className="py-16 border-t border-white/[0.04]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => {
              const spotsLeft = event.capacity - event.registered;
              const isSoldOut = spotsLeft <= 0;
              return (
                <div key={event.id} className="py-8 px-7 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand-accent/50 mb-4 font-medium">{event.date}</p>
                  <h3 className="font-serif text-xl text-brand-heading mb-3 font-normal">{event.title}</h3>
                  <p className="text-white/30 text-sm mb-8 font-light">{event.description}</p>
                  <div className="space-y-3 text-sm mb-8 pb-8 border-b border-white/[0.06]">
                    <div className="flex justify-between"><span className="text-white/20 font-light">Time</span><span className="text-white/50">{event.time}</span></div>
                    <div className="flex justify-between"><span className="text-white/20 font-light">Price</span><span className="text-brand-accent font-medium">${(event.price / 100).toFixed(2)} / person</span></div>
                    <div className="flex justify-between"><span className="text-white/20 font-light">Availability</span><span className={isSoldOut ? 'text-red-400/70' : 'text-white/50'}>{isSoldOut ? 'Sold Out' : `${spotsLeft} spots left`}</span></div>
                  </div>
                  <Link href={`/events/${event.id}`}>
                    <Button variant={isSoldOut ? 'secondary' : 'primary'} size="md" className="w-full" disabled={isSoldOut}>{isSoldOut ? 'Sold Out' : 'Learn More'}</Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.04]">
        <div className="container text-center">
          <h2 className="font-serif text-3xl mb-5 text-brand-heading font-normal">Stay in the Loop</h2>
          <p className="text-white/30 mb-8 font-light">Subscribe for event announcements</p>
          <div className="flex gap-3 justify-center max-w-sm mx-auto">
            <input type="email" placeholder="Your email" className="dark-input flex-1" />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
