import { MenuItemCard } from './components/MenuItemCard';

export default function MenuPage() {
  const currentWeek = { weekStart: 'April 14', weekEnd: 'April 20', cutoffDate: 'Saturday, April 19 at Midnight' };

  const menuItems = [
    { id: '1', name: 'Brown Chicken Stew', description: 'West Indian style with authentic spices and tender chicken', halfPortionPrice: 1200, fullPortionPrice: 1800, isSoldOut: false },
    { id: '2', name: 'Chorizo-Cheese Rice Bowl', description: 'Hearty and flavorful combination with Spanish rice', halfPortionPrice: 1100, fullPortionPrice: 1600, isSoldOut: false },
    { id: '3', name: 'Wild Mushroom Polenta', description: 'Vegetarian delight with umami depth and earthy flavors', halfPortionPrice: 1000, fullPortionPrice: 1500, isSoldOut: false },
    { id: '4', name: 'Cowboy Skillet', description: 'Hearty beef, potatoes, and vegetables in a savory sauce', halfPortionPrice: 1300, fullPortionPrice: 1900, isSoldOut: false },
    { id: '5', name: 'Shrimp Boil', description: 'Fresh shrimp with potatoes, corn, and Cajun spices', halfPortionPrice: 1400, fullPortionPrice: 2000, isSoldOut: false },
    { id: '6', name: 'Baked Ziti', description: 'Classic pasta with rich tomato sauce and melted cheese', halfPortionPrice: 900, fullPortionPrice: 1400, isSoldOut: true },
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
      <section className="py-16 border-b border-brand-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-heading mb-3">This Week&apos;s Menu</h1>
          <p className="text-lg text-brand-text/70">{currentWeek.weekStart} &ndash; {currentWeek.weekEnd}</p>
          <p className="text-sm text-brand-accent mt-2">Order cutoff: {currentWeek.cutoffDate}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-extrabold text-brand-heading">Main Dishes</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (<MenuItemCard key={item.id} {...item} />))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-extrabold text-brand-heading">Add-Ons</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {addOns.map((addon) => (
              <div key={addon.id} className="bg-brand-base rounded-lg p-5 border border-brand-border hover:border-brand-accent/40 transition-colors">
                <p className="font-semibold text-brand-heading text-sm mb-2">{addon.name}</p>
                <p className="text-brand-accent font-bold mb-4">${(addon.price / 100).toFixed(2)}</p>
                <button className="w-full px-3 py-2 border border-brand-accent text-brand-accent rounded-lg hover:bg-brand-accent hover:text-brand-base transition-all text-sm font-semibold cursor-pointer">Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-extrabold text-brand-heading">Desserts</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <div key={dessert.id} className="bg-brand-surface rounded-lg p-6 border border-brand-border hover:border-brand-accent/40 transition-colors">
                <p className="font-semibold text-brand-heading mb-2">{dessert.name}</p>
                <p className="text-brand-accent font-bold mb-4">${(dessert.price / 100).toFixed(2)}</p>
                <button className="w-full px-4 py-2.5 border border-brand-accent text-brand-accent rounded-lg hover:bg-brand-accent hover:text-brand-base transition-all font-semibold cursor-pointer">Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-surface border-t border-brand-border">
        <div className="container">
          <div className="max-w-md mx-auto bg-brand-base p-8 rounded-lg border border-brand-border">
            <h3 className="text-2xl font-extrabold mb-6 text-brand-heading">Cart Summary</h3>
            <div className="mb-6 pb-6 border-b border-brand-border">
              <p className="text-brand-text/60 mb-2">Items in cart: <span className="font-semibold text-brand-heading">0</span></p>
              <p className="text-brand-text/60 mb-2">Subtotal: <span className="font-semibold text-brand-heading">$0.00</span></p>
              <p className="text-xs text-brand-text/40 mb-4">$40 minimum order</p>
              <div className="w-full bg-brand-border rounded-full h-1.5">
                <div className="bg-brand-accent h-1.5 rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-brand-accent text-brand-base rounded-lg font-semibold hover:bg-brand-accent-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer" disabled>Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
}
