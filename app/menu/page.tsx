import { MenuItemCard } from './components/MenuItemCard';

export default function MenuPage() {
  // Placeholder menu data - will be replaced with Convex query
  const currentWeek = {
    weekStart: 'April 14',
    weekEnd: 'April 20',
    cutoffDate: 'Saturday, April 19 at Midnight',
  };

  const menuItems = [
    {
      id: '1',
      name: 'Brown Chicken Stew',
      description:
        'West Indian style with authentic spices and tender chicken',
      halfPortionPrice: 1200,
      fullPortionPrice: 1800,
      isSoldOut: false,
    },
    {
      id: '2',
      name: 'Chorizo-Cheese Rice Bowl',
      description: 'Hearty and flavorful combination with Spanish rice',
      halfPortionPrice: 1100,
      fullPortionPrice: 1600,
      isSoldOut: false,
    },
    {
      id: '3',
      name: 'Wild Mushroom Polenta',
      description: 'Vegetarian delight with umami depth and earthy flavors',
      halfPortionPrice: 1000,
      fullPortionPrice: 1500,
      isSoldOut: false,
    },
    {
      id: '4',
      name: 'Cowboy Skillet',
      description: 'Hearty beef, potatoes, and vegetables in a savory sauce',
      halfPortionPrice: 1300,
      fullPortionPrice: 1900,
      isSoldOut: false,
    },
    {
      id: '5',
      name: 'Shrimp Boil',
      description: 'Fresh shrimp with potatoes, corn, and Cajun spices',
      halfPortionPrice: 1400,
      fullPortionPrice: 2000,
      isSoldOut: false,
    },
    {
      id: '6',
      name: 'Baked Ziti',
      description: 'Classic pasta with rich tomato sauce and melted cheese',
      halfPortionPrice: 900,
      fullPortionPrice: 1400,
      isSoldOut: true,
    },
  ];

  const addOns = [
    { id: 'addon-1', name: 'French Onion Soup', price: 600 },
    { id: 'addon-2', name: 'Asian Crunch Salad', price: 700 },
    { id: 'addon-3', name: 'Boneless Wings', price: 800 },
    { id: 'addon-4', name: 'Caesar Salad', price: 700 },
    { id: 'addon-5', name: 'Garden Salad', price: 600 },
  ];

  const desserts = [
    { id: 'dessert-1', name: 'Raspberry Birthday Cake', price: 500 },
    { id: 'dessert-2', name: 'Cheesecake Brownies', price: 450 },
    { id: 'dessert-3', name: 'Fresh Cookies', price: 300 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-12">
        <div className="container">
          <h1 className="text-4xl font-display mb-2">This Week&apos;s Menu</h1>
          <p className="text-lg opacity-90">
            {currentWeek.weekStart} - {currentWeek.weekEnd}
          </p>
          <p className="text-sm opacity-75 mt-2">
            Order cutoff: {currentWeek.cutoffDate}
          </p>
        </div>
      </section>

      {/* Main Dishes */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display mb-8">Main Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-brand-cream">
        <div className="container">
          <h2 className="text-3xl font-display mb-8">Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <p className="font-semibold mb-2">{addon.name}</p>
                <p className="text-brand-gold font-semibold mb-3">
                  ${(addon.price / 100).toFixed(2)}
                </p>
                <button className="w-full px-4 py-2 bg-brand-dark text-brand-cream rounded hover:opacity-90 transition-opacity text-sm">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display mb-8">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {desserts.map((dessert) => (
              <div
                key={dessert.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="font-semibold mb-2">{dessert.name}</p>
                <p className="text-brand-gold font-semibold mb-4">
                  ${(dessert.price / 100).toFixed(2)}
                </p>
                <button className="w-full px-4 py-2 bg-brand-dark text-brand-cream rounded hover:opacity-90 transition-opacity">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      <section className="bg-brand-gold py-12">
        <div className="container">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-display mb-4 text-brand-dark">
              Cart Summary
            </h3>
            <div className="mb-6 pb-6 border-b-2">
              <p className="text-gray-600 mb-2">
                Items in cart: <span className="font-semibold">0</span>
              </p>
              <p className="text-gray-600 mb-2">
                Subtotal: <span className="font-semibold">$0.00</span>
              </p>
              <p className="text-sm text-gray-600 mb-4">$40 minimum order</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-brand-gold h-2 rounded-full"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
            <button
              className="w-full px-4 py-3 bg-brand-dark text-brand-cream rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
