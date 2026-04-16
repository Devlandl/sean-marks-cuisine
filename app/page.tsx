export default function Home() {
  return (
    <div className="container py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-brand-dark mb-4">
          Welcome to Sean Mark&apos;s Cuisine
        </h1>
        <p className="text-xl text-brand-dark opacity-80 max-w-2xl mx-auto">
          Crafting culinary experiences with heart and precision
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-display text-brand-dark mb-3">Menu</h2>
          <p className="text-brand-dark opacity-80">
            Explore our weekly rotating menu featuring fresh, locally-sourced
            ingredients.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-display text-brand-dark mb-3">
            Catering
          </h2>
          <p className="text-brand-dark opacity-80">
            Custom catering packages for your special events and celebrations.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-display text-brand-dark mb-3">Events</h2>
          <p className="text-brand-dark opacity-80">
            Join us for intimate dining experiences and culinary events.
          </p>
        </div>
      </section>
    </div>
  );
}
