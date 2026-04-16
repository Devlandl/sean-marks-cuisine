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
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">Special Events</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">Exclusive dinners, cooking classes, and culinary experiences</p>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const spotsLeft = event.capacity - event.registered;
              const isSoldOut = spotsLeft <= 0;
              return (
                <div key={event.id} className="bg-brand-base rounded-lg border border-brand-border hover:border-brand-accent/40 transition-colors overflow-hidden">
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 rounded bg-brand-accent/10 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">{event.date}</div>
                    <h3 className="text-xl font-bold text-brand-heading mb-3">{event.title}</h3>
                    <p className="text-brand-text/60 text-sm mb-6">{event.description}</p>
                    <div className="space-y-3 text-sm mb-6 pb-6 border-b border-brand-border">
                      <div className="flex justify-between"><span className="text-brand-text/40">Time</span><span className="text-brand-text/80">{event.time}</span></div>
                      <div className="flex justify-between"><span className="text-brand-text/40">Price</span><span className="text-brand-accent font-semibold">${(event.price / 100).toFixed(2)} / person</span></div>
                      <div className="flex justify-between"><span className="text-brand-text/40">Availability</span><span className={isSoldOut ? 'text-red-400 font-semibold' : 'text-brand-text/80'}>{isSoldOut ? 'Sold Out' : `${spotsLeft} spots left`}</span></div>
                    </div>
                    <Link href={`/events/${event.id}`}>
                      <Button variant={isSoldOut ? 'secondary' : 'primary'} size="md" className="w-full" disabled={isSoldOut}>{isSoldOut ? 'Sold Out' : 'Learn More'}</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-brand-heading">Stay in the Loop</h2>
          <p className="text-brand-text/70 mb-8">Subscribe for event announcements</p>
          <div className="flex gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="dark-input flex-1" />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
