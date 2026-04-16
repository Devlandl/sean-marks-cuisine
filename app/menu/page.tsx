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
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">Weekly Selection</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-heading mb-4 font-normal">This Week&apos;s Menu</h1>
          <p className="text-white/40 font-light">{currentWeek.weekStart} &ndash; {currentWeek.weekEnd}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent/50 mt-3 font-medium">Order by {currentWeek.cutoffDate}</p>
        </div>
      </section>

      {/* Main Dishes */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="container">
          <h2 className="font-serif text-3xl text-brand-heading mb-12 font-normal">Main Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (<MenuItemCard key={item.id} {...item} />))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="container">
          <h2 className="font-serif text-3xl text-brand-heading mb-12 font-normal">Add-Ons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {addOns.map((addon) => (
              <div key={addon.id} className="py-6 px-5 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <p className="text-brand-heading text-sm mb-1 font-normal">{addon.name}</p>
                <p className="text-brand-accent text-sm font-medium mb-5">${(addon.price / 100).toFixed(2)}</p>
                <button className="w-full py-2 text-[11px] uppercase tracking-[0.15em] text-white/40 border border-white/[0.08] hover:text-white hover:border-white/20 rounded-sm transition-all duration-300 cursor-pointer font-medium">Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="container">
          <h2 className="font-serif text-3xl text-brand-heading mb-12 font-normal">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {desserts.map((dessert) => (
              <div key={dessert.id} className="py-6 px-5 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <p className="text-brand-heading mb-1 font-normal">{dessert.name}</p>
                <p className="text-brand-accent text-sm font-medium mb-5">${(dessert.price / 100).toFixed(2)}</p>
                <button className="w-full py-2.5 text-[11px] uppercase tracking-[0.15em] text-white/40 border border-white/[0.08] hover:text-white hover:border-white/20 rounded-sm transition-all duration-300 cursor-pointer font-medium">Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      <section className="py-20 border-t border-white/[0.04]">
        <div className="container">
          <div className="max-w-sm mx-auto">
            <h3 className="font-serif text-2xl text-brand-heading mb-8 font-normal">Cart Summary</h3>
            <div className="mb-8 pb-8 border-b border-white/[0.06]">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/35 font-light">Items in cart</span>
                <span className="text-brand-heading">0</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-white/35 font-light">Subtotal</span>
                <span className="text-brand-heading">$0.00</span>
              </div>
              <p className="text-[11px] text-white/20 tracking-wider mb-5 uppercase">$40 minimum order</p>
              <div className="w-full bg-white/[0.04] rounded-full h-1">
                <div className="bg-brand-accent/60 h-1 rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
            <button className="w-full py-3.5 bg-brand-accent text-brand-base text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brand-accent-hover hover:shadow-[0_0_30px_rgba(74,222,64,0.15)] transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer" disabled>Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
}
