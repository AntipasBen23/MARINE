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
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            About B&R Marine Energy
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            {companyInfo.overview}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
                Our Mission
              </h2>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
                {companyInfo.mission}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
                Our Vision
              </h2>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(224, 151, 65, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: 'rgb(107, 42, 0)' }}>{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'rgb(224, 151, 65)' }}>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
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

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
            Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                  {office.city}, {office.country}
                </h3>
                <p className="text-sm" style={{ color: 'rgb(224, 151, 65)' }}>
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