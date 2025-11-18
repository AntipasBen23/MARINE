import { companyInfo, contactInfo } from "@/lib/data/company";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-hero.jfif" 
            alt="About B&R Marine" 
            fill
            className="object-cover opacity-20"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
            About B&R Marine Energy
          </h1>
          <p className="text-lg max-w-3xl text-white">
            {companyInfo.overview}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a4d2e' }}>
                Our Mission
              </h2>
              <p style={{ color: '#d4a029' }}>
                {companyInfo.mission}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a4d2e' }}>
                Our Vision
              </h2>
              <p style={{ color: '#d4a029' }}>
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(124, 179, 66, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#1a4d2e' }}>{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#d4a029' }}>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>
            Leadership
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
            {/* Managing Director Photo */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image 
                src="/images/managing-director.png" 
                alt={contactInfo.managingDirector.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
              {contactInfo.managingDirector.name}
            </h3>
            <p style={{ color: '#d4a029' }} className="mb-2">
              {contactInfo.managingDirector.title}
            </p>
            <p style={{ color: '#2d5a3d' }}>
              {contactInfo.managingDirector.role}
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>
            Our Partners
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Partner Logo */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <Image 
                  src="/images/partners/ebranell-logo.png" 
                  alt="EBRANELL ORES NIG LTD"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Partner Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a4d2e' }}>
                  EBRANELL ORES NIG LTD
                </h3>
                <p className="mb-4" style={{ color: '#2d5a3d' }}>
                  Since our incorporation in 2007, we have been the trusted partner for clients navigating the complex world of solid minerals and mining. Backed by the expertise of three generations, we combine deep technical knowledge with strategic insight to deliver solutions that drive results.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Partnership Value
                  </h4>
                  <p style={{ color: '#2d5a3d' }}>
                    They are in charge of the geographical measurements of the site and provide comprehensive exploration and mapping services from reconnaissance to production.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Core Expertise
                  </h4>
                  <div className="space-y-1" style={{ color: '#2d5a3d' }}>
                    <p>• Geological mapping & geophysical surveys</p>
                    <p>• Geochemical surveys & core drilling services</p>
                    <p>• Full-cycle mining expertise</p>
                    <p>• High-caliber team of geologists and geophysicists</p>
                  </div>
                </div>

                <a 
                  href="http://www.enbranell.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-lg text-white hover:opacity-90 transition"
                  style={{ backgroundColor: '#d4a029' }}
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>
            Our Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ministry of Solid Minerals Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image 
                  src="/images/clients/ministry-solid-minerals.png" 
                  alt="Ministry of Solid Minerals Development"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#1a4d2e' }}>
                Ministry of Solid Minerals Development
              </h3>
            </div>

            {/* Mining Cadastre Office */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image 
                  src="/images/clients/mining-cadastre-office.png" 
                  alt="Mining Cadastre Office"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#1a4d2e' }}>
                Mining Cadastre Office
              </h3>
            </div>

            {/* Nigerian Geological Survey Agency */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image 
                  src="/images/clients/nigerian-geological-survey.png" 
                  alt="Nigerian Geological Survey Agency"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#1a4d2e' }}>
                Nigerian Geological Survey Agency
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>
            Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                  {office.city}, {office.country}
                </h3>
                <p className="text-sm" style={{ color: '#d4a029' }}>
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}