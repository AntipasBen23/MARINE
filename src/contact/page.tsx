import { contactInfo } from "@/lib/data/company";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            Contact Us
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            Get in touch with our team to discuss investment opportunities or learn more about our operations.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
                Email
              </h3>
              <a href={`mailto:${contactInfo.contact.email}`} style={{ color: 'rgb(224, 151, 65)' }}>
                {contactInfo.contact.email}
              </a>
              <br />
              <a href={`mailto:${contactInfo.contact.emailAlt}`} style={{ color: 'rgb(224, 151, 65)' }}>
                {contactInfo.contact.emailAlt}
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
                Phone
              </h3>
              {contactInfo.contact.phones.map((phone, index) => (
                <div key={index}>
                  <a href={`tel:${phone}`} style={{ color: 'rgb(224, 151, 65)' }}>
                    {phone}
                  </a>
                  <br />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
              Website
            </h3>
            <a href={`https://${contactInfo.contact.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(224, 151, 65)' }}>
              {contactInfo.contact.website}
            </a>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                  {office.city}, {office.country}
                </h3>
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Director */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
              {contactInfo.managingDirector.name}
            </h3>
            <p style={{ color: 'rgb(224, 151, 65)' }} className="mb-2">
              {contactInfo.managingDirector.title}
            </p>
            <p style={{ color: 'rgb(224, 151, 65)' }}>
              {contactInfo.managingDirector.role}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}