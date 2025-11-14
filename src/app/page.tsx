import { companyInfo } from "@/lib/data/company";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.jfif" 
            alt="Mining Operations" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-blue-950/70"></div>
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
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
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
              <div className="text-4xl font-bold text-blue-900 mb-2">
                {companyInfo.sites.kogi.cadastralUnits}
              </div>
              <div className="text-gray-600">Cadastral Units - Kogi</div>
              <div className="text-sm text-gray-500 mt-2">Gold Exploration</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                {companyInfo.sites.crossRiver.cadastralUnits}
              </div>
              <div className="text-gray-600">Cadastral Units - Cross River</div>
              <div className="text-sm text-gray-500 mt-2">Multi-Mineral</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-900 mb-2">
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">{index + 1}</span>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest in Africa's Future?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us in unlocking the mineral wealth of Nigeria
          </p>
          <a
            href="/investment"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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