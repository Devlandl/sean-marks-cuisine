import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-12 mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-xl mb-4">Sean Mark&apos;s Cuisine</h3>
          <p className="text-sm opacity-80">
            Crafting culinary experiences with heart and precision.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/menu"
                className="hover:text-brand-gold transition-colors"
              >
                Weekly Menu
              </Link>
            </li>
            <li>
              <Link
                href="/catering"
                className="hover:text-brand-gold transition-colors"
              >
                Catering
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-brand-gold transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-brand-gold transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">233 Main St, Lebanon, NJ 08833</p>
          <p className="text-sm mb-2">(908) 505-8050</p>
          <p className="text-sm mb-4">hello@seanmarkscuisine.com</p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://instagram.com/seanmarkscuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/seanmarkscuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://tiktok.com/@seanmarkscuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-opacity-20 border-brand-cream pt-8 text-center text-sm opacity-60">
        <p>&copy; 2026 Sean Mark&apos;s Cuisine. All rights reserved.</p>
      </div>
    </footer>
  );
}
