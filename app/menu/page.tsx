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
      {/* Hero - asymmetric layout */}
      <section className="pt-20 pb-24">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-5 font-medium">Weekly Selection</p>
            <h1 className="font-serif text-5xl md:text-7xl text-brand-heading mb-6 font-normal leading-[1.05]">
              This Week&apos;s<br />Menu
            </h1>
            <div className="flex items-center gap-6 text-sm">
              <p className="text-white/40 font-light">{currentWeek.weekStart} &ndash; {currentWeek.weekEnd}</p>
              <span className="w-8 h-px bg-white/10" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent/50 font-medium">Order by {currentWeek.cutoffDate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Menu + Sticky Cart Sidebar */}
      <section className="border-t border-white/[0.04]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">

            {/* Left: Menu Items */}
            <div>
              {/* Main Dishes - Editorial List */}
              <div className="py-20">
                <h2 className="font-serif text-3xl text-brand-heading mb-4 font-normal">Main Dishes</h2>
                <p className="text-white/25 text-sm font-light mb-14">Half and full portions available</p>

                {/* Featured first two - larger */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  {menuItems.slice(0, 2).map((item) => (
                    <MenuItemCard key={item.id} {...item} featured />
                  ))}
                </div>

                {/* Rest - compact list style */}
                <div className="space-y-0">
                  {menuItems.slice(2).map((item) => (
                    <div key={item.id} className={`flex items-center justify-between py-6 border-b border-white/[0.04] group ${item.isSoldOut ? 'opacity-30' : ''}`}>
                      <div className="flex-1 min-w-0 mr-8">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-serif text-lg text-brand-heading font-normal">{item.name}</h3>
                          <span className="hidden md:block flex-1 border-b border-dotted border-white/[0.06]" />
                          <span className="text-brand-accent text-sm font-medium whitespace-nowrap">
                            ${(item.halfPortionPrice / 100).toFixed(2)} / ${(item.fullPortionPrice / 100).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-white/25 text-sm font-light mt-1">{item.description}</p>
                      </div>
                      <button
                        className={`text-[10px] uppercase tracking-[0.15em] px-5 py-2 border rounded-sm transition-all duration-300 font-medium whitespace-nowrap ${
                          item.isSoldOut
                            ? 'text-white/15 border-white/[0.04] cursor-not-allowed'
                            : 'text-white/40 border-white/[0.08] hover:text-brand-accent hover:border-brand-accent/30 cursor-pointer'
                        }`}
                        disabled={item.isSoldOut}
                      >
                        {item.isSoldOut ? 'Sold Out' : 'Add'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-Ons - Compact horizontal strip */}
              <div className="py-16 border-t border-white/[0.04]">
                <div className="flex items-baseline justify-between mb-10">
                  <h2 className="font-serif text-2xl text-brand-heading font-normal">Sides &amp; Add-Ons</h2>
                  <span className="text-[11px] text-white/20 uppercase tracking-[0.2em]">{addOns.length} items</span>
                </div>
                <div className="space-y-0">
                  {addOns.map((addon) => (
                    <div key={addon.id} className="flex items-center justify-between py-4 border-b border-white/[0.04] group">
                      <div className="flex items-baseline gap-3 flex-1">
                        <span className="text-white/50 text-sm font-light">{addon.name}</span>
                        <span className="hidden md:block flex-1 border-b border-dotted border-white/[0.04]" />
                        <span className="text-brand-accent text-sm font-medium">${(addon.price / 100).toFixed(2)}</span>
                      </div>
                      <button className="ml-6 text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-brand-accent transition-colors duration-300 cursor-pointer font-medium">Add</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desserts - Visual break with different treatment */}
              <div className="py-16 border-t border-white/[0.04]">
                <div className="flex items-baseline justify-between mb-10">
                  <h2 className="font-serif text-2xl text-brand-heading font-normal">Desserts</h2>
                  <span className="text-[11px] text-white/20 uppercase tracking-[0.2em]">Sweet finishes</span>
                </div>
                <div className="grid grid-cols-3 gap-0 border border-white/[0.04]">
                  {desserts.map((dessert, i) => (
                    <div key={dessert.id} className={`p-6 text-center hover:bg-white/[0.02] transition-all duration-300 ${i < desserts.length - 1 ? 'border-r border-white/[0.04]' : ''}`}>
                      <p className="font-serif text-brand-heading text-base mb-2 font-normal">{dessert.name}</p>
                      <p className="text-brand-accent text-sm font-medium mb-5">${(dessert.price / 100).toFixed(2)}</p>
                      <button className="text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-brand-accent transition-colors duration-300 cursor-pointer font-medium">Add</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Cart Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-28 py-20">
                <div className="border-l border-white/[0.06] pl-10">
                  <h3 className="text-[11px] uppercase tracking-[0.25em] text-white/30 mb-8 font-medium">Your Order</h3>

                  <div className="mb-8 text-sm">
                    <div className="flex justify-between mb-3">
                      <span className="text-white/25 font-light">Items</span>
                      <span className="text-white/60">0</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span className="text-white/25 font-light">Subtotal</span>
                      <span className="text-white/60">$0.00</span>
                    </div>

                    <div className="w-full bg-white/[0.04] rounded-full h-0.5 mb-2">
                      <div className="bg-brand-accent/50 h-0.5 rounded-full" style={{ width: '0%' }} />
                    </div>
                    <p className="text-[10px] text-white/15 tracking-wider uppercase">$40 minimum</p>
                  </div>

                  <button
                    className="w-full py-3 bg-brand-accent text-brand-base text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-brand-accent-hover hover:shadow-[0_0_30px_rgba(74,222,64,0.15)] transition-all duration-300 disabled:opacity-15 disabled:cursor-not-allowed cursor-pointer"
                    disabled
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Cart - only visible on small screens */}
      <section className="lg:hidden py-16 border-t border-white/[0.04]">
        <div className="container">
          <div className="max-w-sm mx-auto">
            <h3 className="font-serif text-2xl text-brand-heading mb-8 font-normal">Your Order</h3>
            <div className="mb-6 text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-white/25 font-light">Items</span>
                <span className="text-white/60">0</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-white/25 font-light">Subtotal</span>
                <span className="text-white/60">$0.00</span>
              </div>
              <p className="text-[10px] text-white/15 tracking-wider uppercase mb-6">$40 minimum order</p>
            </div>
            <button className="w-full py-3.5 bg-brand-accent text-brand-base text-[11px] uppercase tracking-[0.15em] font-medium disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer" disabled>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
