import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function EventsPage() {
  // Placeholder events data
  const events = [
    {
      id: '1',
      title: 'West Indian Night Dinner',
      description: 'An evening celebrating authentic Caribbean flavors and traditions',
      date: 'April 26, 2026',
      time: '6:00 PM',
      price: 4500,
      capacity: 20,
      registered: 8,
      image: 'bg-gradient-to-br from-brand-dark to-brand-gold',
    },
    {
      id: '2',
      title: 'Cooking Class: Technique & Flavors',
      description: 'Learn professional cooking techniques from Chef Sean Mark',
      date: 'May 3, 2026',
      time: '2:00 PM',
      price: 7500,
      capacity: 12,
      registered: 5,
      image: 'bg-gradient-to-br from-brand-gold to-brand-dark',
    },
    {
      id: '3',
      title: 'Farm-to-Table Spring Tasting',
      description: 'Multi-course dinner celebrating seasonal, fresh ingredients',
      date: 'May 10, 2026',
      time: '7:00 PM',
      price: 6000,
      capacity: 25,
      registered: 12,
      image: 'bg-gradient-to-br from-brand-cream to-brand-gold',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-display mb-4">Special Events</h1>
          <p className="text-xl opacity-90">Exclusive dinners, cooking classes, and culinary experiences</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const spotsLeft = event.capacity - event.registered;
              const isSoldOut = spotsLeft <= 0;

              return (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`${event.image} h-48`}></div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                    <div className="space-y-2 text-sm mb-4 pb-4 border-b">
                      <p className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{event.date}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>🕐</span>
                        <span>{event.time}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>💵</span>
                        <span className="font-semibold">${(event.price / 100).toFixed(2)} per person</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>👥</span>
                        <span>
                          {isSoldOut ? (
                            <span className="text-red-600 font-semibold">Sold Out</span>
                          ) : (
                            <span>{spotsLeft} spots left</span>
                          )}
                        </span>
                      </p>
                    </div>

                    <Link href={`/events/${event.id}`}>
                      <Button
                        variant={isSoldOut ? 'outline' : 'primary'}
                        size="md"
                        className="w-full"
                        disabled={isSoldOut}
                      >
                        {isSoldOut ? 'Sold Out' : 'Learn More'}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-display mb-4 text-brand-dark">Can&apos;t Wait?</h2>
          <p className="text-lg text-brand-dark mb-6">Subscribe to our mailing list for event announcements</p>
          <div className="flex gap-2 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded focus:outline-none"
            />
            <button className="px-6 py-2 bg-brand-dark text-brand-cream rounded font-medium hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
