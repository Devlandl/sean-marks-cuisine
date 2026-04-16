import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-brand-base border-t border-brand-accent/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/Logo 2.jpg"
              alt="Sean Mark's Cuisine"
              width={120}
              height={48}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-brand-text/70 leading-relaxed">
              Crafting culinary experiences with heart and precision.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-brand-heading font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/menu', label: 'Weekly Menu' },
                { href: '/catering', label: 'Catering' },
                { href: '/events', label: 'Events' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-text/60 hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-brand-heading font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-brand-text/60">
              <p>233 Main St, Lebanon, NJ 08833</p>
              <p>(908) 505-8050</p>
              <p>hello@seanmarkscuisine.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              {[
                { href: 'https://instagram.com/seanmarkscuisine', label: 'Instagram', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
                { href: 'https://facebook.com/seanmarkscuisine', label: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { href: 'https://tiktok.com/@seanmarkscuisine', label: 'TikTok', icon: 'M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-text/40 hover:text-brand-accent transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 text-center text-xs text-brand-text/40">
          <p>&copy; 2026 Sean Mark&apos;s Cuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
