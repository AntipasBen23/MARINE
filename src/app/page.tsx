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
            src="/images/hero-background.jpg" 
            alt="Mining Operations" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {companyInfo.mission}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {companyInfo.vision}
            </p>
            <p className="text-lg text-blue-200 mb-8">
              {companyInfo.overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600/20 transition"
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
              <div className="text-4xl font-bold text-amber-700 mb-2">
                {companyInfo.sites.kogi.cadastralUnits}
              </div>
              <div className="text-gray-600">Cadastral Units - Kogi</div>
              <div className="text-sm text-gray-500 mt-2">Gold Exploration</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-700 mb-2">
                {companyInfo.sites.crossRiver.cadastralUnits}
              </div>
              <div className="text-gray-600">Cadastral Units - Cross River</div>
              <div className="text-sm text-gray-500 mt-2">Multi-Mineral</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-700 mb-2">
                {companyInfo.sites.crossRiver.mineralsCount}+
              </div>
              <div className="text-gray-600">Minerals Identified</div>
              <div className="text-sm text-gray-500 mt-2">Calabar Site</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.coreValues.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-700">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-amber-700">
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest in Africa's Future?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Join us in unlocking the mineral wealth of Nigeria
          </p>
          <a
            href="/investment"
            className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
          >
            Investment Opportunities
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 B&R Marine Energy Logistics Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}