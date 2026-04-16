import { Button } from '@/components/common/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-dark text-brand-cream py-20 text-center">
        <div className="container">
          <h1 className="text-5xl font-display font-bold mb-4">
            Crafting Culinary Experiences
          </h1>
          <p className="text-xl mb-8 opacity-90">With heart and precision</p>
          <Link href="/menu">
            <Button variant="secondary" size="lg">
              Order This Week&apos;s Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                Browse Menu
              </h3>
              <p className="text-gray-600">
                Explore this week&apos;s carefully crafted dishes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                Place Order
              </h3>
              <p className="text-gray-600">
                Add items, choose portions, and checkout securely
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">😋</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                Enjoy
              </h3>
              <p className="text-gray-600">
                Fresh food delivered to your door
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-brand-cream py-16 border-t border-brand-dark border-opacity-10">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Featured This Week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Brown Chicken Stew',
                desc: 'West Indian style with authentic spices',
                price: '$14',
              },
              {
                name: 'Chorizo-Cheese Rice Bowl',
                desc: 'Hearty, flavorful, and satisfying',
                price: '$12',
              },
              {
                name: 'Wild Mushroom Polenta',
                desc: 'Vegetarian delight with umami depth',
                price: '$11',
              },
            ].map((dish, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-brand-dark to-brand-gold h-48"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-brand-dark">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{dish.desc}</p>
                  <p className="text-brand-gold font-semibold">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="primary" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-16 bg-brand-dark text-brand-cream">
        <div className="container text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Planning an Event?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let Sean Mark&apos;s Cuisine handle the food
          </p>
          <Link href="/catering">
            <Button variant="secondary">Learn About Catering</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria',
                text: 'The freshest meals I\'ve ever had. Absolutely delicious!',
              },
              {
                name: 'James',
                text: 'Perfect for busy weeknights. Amazing quality and flavor.',
              },
              {
                name: 'Sarah',
                text: 'Sean\'s passion for food is evident in every dish.',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="border-l-4 border-brand-gold pl-6 py-4 bg-brand-cream rounded-r-lg"
              >
                <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-brand-dark">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="bg-brand-cream py-16 border-t border-brand-dark border-opacity-10">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">
              Special dinners, pop-ups, and cooking classes
            </p>
            <Link href="/events">
              <Button variant="primary">Explore Events</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
