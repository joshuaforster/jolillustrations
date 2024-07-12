import React from 'react';

const services = [
  {
    title: "Personalised Commissions",
    description: "We do more than just prints - our focus is on personalised commissions, adapted to your specific needs.\n\nIf you need a thoughtful gift for a loved one or simple illustrations to complement your restaurant's environment, we're here to help.\n\nCommissions start at £50.\n\nFor more information, please contact us.",
    buttonText: "Contact Us",
    image: "Images/personalised_commissions.webp"
  },
  {
    title: "Logo Design",
    description: "Looking for a logo that stands out?\n\nWe focus on crafting distinct, fresh logos, using Holly's unique drawing style to add a bit of individuality.\n\nWe recently placed runners-up in a brand identity competition for a local charity, 'Cultural Connection Volunteering', based in Great Yarmouth, Norfolk.\n\nFor a closer look, download our competition entry to understand our approach to creating logos.",
    buttonText: "View PDF",
    image: "Images/logo_design.webp"
  },
  {
    title: "Design and Layout Services",
    description: "In addition to illustrations and logo design, we also provide Web, Graphic & Layout Services.\n\nWe can take on graphic design and layout work for a range of projects, such as book designs and restaurant menus. If a website is what you're after, we can design and code it, while staying true to our ethos of creating illustrations that enhance your brand.\n\nWe use Holly's unique creative approach in these services, helping your brand make an impact, whether on a webpage, a book cover, or a menu.\n\nFeel free to contact us to discuss how we can help bring your vision to life across different platforms.",
    buttonText: "Contact Us",
    image: "Images/design_and_layout_services.webp"
  }
];

export default function Services() {
  return (
    <section className="isolate overflow-hidden px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:max-w-7xl">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />

        <div className="container mx-auto">
          <h2 className="text-center mb-5 text-4xl font-extrabold text-gray-900 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white shadow-lg rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-full shadow-1-strong mb-4 mx-auto"
                  style={{ width: '150px' }}
                />
                <h5 className="mb-3 text-2xl font-bold">{service.title}</h5>
                <p className="text-gray-600 mb-4">
                  {service.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
