import { minerals } from "@/lib/data/minerals";
import Image from "next/image";

export default function CrossRiverPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gray-50">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/cross-river-hero.jpg" 
            alt="Cross River Project" 
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
            Cross River Multi-Mineral Project
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#2d5a3d' }}>
            Exploration of minerals and types readily available for extraction in Calabar, Cross River State.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>380</div>
              <div style={{ color: '#d4a029' }}>Available CUs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>64+</div>
              <div style={{ color: '#d4a029' }}>Minerals Identified</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>10</div>
              <div style={{ color: '#d4a029' }}>Transferable CUs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>Calabar</div>
              <div style={{ color: '#d4a029' }}>Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Minerals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a4d2e' }}>
            Key Minerals with Depth Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minerals.filter(m => m.width && m.depth).map((mineral, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a4d2e' }}>
                  {mineral.name}
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

      {/* All Minerals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a4d2e' }}>
            Complete Mineral List
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {minerals.map((mineral, index) => (
                <div key={index} className="text-center">
                  <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'rgba(124, 179, 66, 0.2)', color: '#1a4d2e' }}>
                    {mineral.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
              Investment Opportunity
            </h2>
            <p className="text-lg mb-8" style={{ color: '#2d5a3d' }}>
              Cadastral owners will receive a percentage of the available minerals from the site. Non-refundable investment required for cadastral unit allocation.
            </p>
            <a
              href="/investment"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#d4a029' }}
            >
              Learn More About Investment
            </a>
          </div>
        </div>
      </section>

      {/* Technical Report CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
              Technical Report
            </h2>
            <p className="text-lg mb-8" style={{ color: '#2d5a3d' }}>
              Access the complete technical report on alluvial gold mineralization with detailed geological analysis, mineral identification, and exploration findings for the Cross River Multi-Mineral Project.
            </p>
            <a
              href="https://pear-fireman-5e2.notion.site/Technical-Report-for-Alluvial-gold-mineralization_Parts-of-Sheet-314_Ugep-1-final-draft-2af3084ed39580748926cabbe6a2e6cd?source=copy_link"
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