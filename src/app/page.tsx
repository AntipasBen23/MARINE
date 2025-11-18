"use client";

import { companyInfo } from "@/lib/data/company";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.png" 
            alt="Mining Operations" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {companyInfo.mission}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              {companyInfo.vision}
            </p>
            <p className="text-lg mb-8 text-white">
              {companyInfo.overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-90"
                style={{ backgroundColor: '#d4a029', color: 'white' }}
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="border-2 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
                style={{ borderColor: '#d4a029' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                {companyInfo.sites.kogi.cadastralUnits}
              </div>
              <div style={{ color: '#d4a029' }}>Cadastral Units - Kogi</div>
              <div className="text-sm mt-2" style={{ color: '#7cb342' }}>Gold Exploration</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                {companyInfo.sites.crossRiver.cadastralUnits}
              </div>
              <div style={{ color: '#d4a029' }}>Cadastral Units - Cross River</div>
              <div className="text-sm mt-2" style={{ color: '#7cb342' }}>Multi-Mineral</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                {companyInfo.sites.crossRiver.mineralsCount}+
              </div>
              <div style={{ color: '#d4a029' }}>Minerals Identified</div>
              <div className="text-sm mt-2" style={{ color: '#7cb342' }}>Calabar Site</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.coreValues.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(124, 179, 66, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#1a4d2e' }}>{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#d4a029' }}>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>Our Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>
                  {activity.title}
                </h3>
                <p style={{ color: '#d4a029' }}>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 text-white" style={{ background: 'linear-gradient(to right, #1a4d2e, #2d5a3d)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest in Africa's Future?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join us in unlocking the mineral wealth of Nigeria
          </p>
          <a
            href="/investment"
            className="inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: '#d4a029', color: 'white' }}
          >
            Investment Opportunities
          </a>
        </div>
      </section>
    </main>
  );
}