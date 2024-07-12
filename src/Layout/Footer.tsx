import React from 'react';

const navigation = {
  nav: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: "FAQ's", href: '/faq' },
    { name: 'Brochure', href: 'Brochure/Brochure_JLR2021-2.pdf', isExternal: true },
    { name: 'Contact', href: '/contact' }
  ],
  contact: [
    { name: 'Phone: 1234567890', href: 'tel:+1234567890' },
    { name: 'WhatsApp: 1234567890', href: 'https://wa.me/1234567890' },
    { name: 'Email: info@example.com', href: 'mailto:info@example.com' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

export default function Example() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-14"
              src="Images/Logo/LogoforJolrust.webp"
              alt="Company name"
            />
            <p className="text-sm leading-6 text-gray-300">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
              <ul className="mt-6 space-y-4">
                {navigation.nav.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
              <ul className="mt-6 space-y-4">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {currentYear} Jol Illustrations</p>
        </div>
      </div>
    </footer>
  );
}
