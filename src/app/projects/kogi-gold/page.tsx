import Image from "next/image";
import { kogiMinerals } from "@/lib/data/kogi-minerals";

export default function KogiGoldPage() {
  // Separate minerals with depth data
  const mineralsWithDepth = kogiMinerals.filter(m => m.width && m.depth);
  const allMinerals = kogiMinerals;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gray-50">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/kogi-gold-hero.jpg" 
            alt="Kogi Gold Project" 
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
            Kogi State Gold Exploration Project
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#2d5a3d' }}>
            Comprehensive geophysical interpretation and gold mineralization project in Lokoja, Kogi State.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>117</div>
              <div style={{ color: '#d4a029' }}>Square Kilometers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>410</div>
              <div style={{ color: '#d4a029' }}>Cadastral Units</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>Gold</div>
              <div style={{ color: '#d4a029' }}>Primary Mineral</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Minerals with Depth Data */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a4d2e' }}>
            Key Minerals with Depth Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mineralsWithDepth.map((mineral, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>
                  {mineral.name} ({mineral.symbol})
                </h3>
                <div className="space-y-2">
                  <p style={{ color: '#2d5a3d' }}>
                    <strong style={{ color: '#1a4d2e' }}>Width:</strong> {mineral.width}
                  </p>
                  <p style={{ color: '#2d5a3d' }}>
                    <strong style={{ color: '#1a4d2e' }}>Depth:</strong> {mineral.depth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Mineral List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a4d2e' }}>
            Complete Mineral List
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allMinerals.map((mineral, index) => (
                <div key={index} className="text-center">
                  <span 
                    className="text-sm px-2 py-1 rounded inline-block" 
                    style={{ backgroundColor: 'rgba(124, 179, 66, 0.2)', color: '#1a4d2e' }}
                  >
                    {mineral.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a4d2e' }}>
            Location Details
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>Area</h3>
                <p style={{ color: '#2d5a3d' }}>Lokoja Local Government Area, Kogi State</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>Accessibility</h3>
                <p style={{ color: '#2d5a3d' }}>Close to River Niger, accessible via footpath and untarred road</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>Geology</h3>
                <p style={{ color: '#2d5a3d' }}>Undifferentiated Schist, favorable for gold mineralization</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>Topography</h3>
                <p style={{ color: '#2d5a3d' }}>Mild ridge trending east-west direction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a4d2e' }}>
            Key Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>
                Geological Setting
              </h3>
              <p style={{ color: '#2d5a3d' }}>
                The area is suitable for gold mineralization due to pronounced tectonic activities and intense hydrothermal alteration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>
                Mineralization Type
              </h3>
              <p style={{ color: '#2d5a3d' }}>
                Both primary and alluvial gold mineralization potential identified in the northeastern part of the concession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Report CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
              Technical Report
            </h2>
            <p className="text-lg mb-8" style={{ color: '#2d5a3d' }}>
              Access the complete geophysical interpretation report with detailed findings, geological data, and mineral exploration analysis for the Kogi State Gold Exploration Project.
            </p>
           <a
              href="https://pear-fireman-5e2.notion.site/Kogi-Technical-Report-for-gold-mineralization_Kirri-NE_Koton-Karfi-for-B-R-Marine-Energy-2ac3084ed3958068aaaae2f2c992b8e9?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#d4a029' }}
            >
              View Full Technical Report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}