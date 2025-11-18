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
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            Cross River Multi-Mineral Project
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            Exploration of minerals and types readily available for extraction in Calabar, Cross River State.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>380</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Available CUs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>64+</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Minerals Identified</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>10</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Transferable CUs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>Calabar</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Minerals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(107, 42, 0)' }}>
            Key Minerals with Depth Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minerals.filter(m => m.width && m.depth).map((mineral, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                  {mineral.name}
                </h3>
                <div className="space-y-2">
                  <p style={{ color: 'rgb(224, 151, 65)' }}>
                    <strong style={{ color: 'rgb(107, 42, 0)' }}>Width:</strong> {mineral.width}
                  </p>
                  <p style={{ color: 'rgb(224, 151, 65)' }}>
                    <strong style={{ color: 'rgb(107, 42, 0)' }}>Depth:</strong> {mineral.depth}
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
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(107, 42, 0)' }}>
            Complete Mineral List
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {minerals.map((mineral, index) => (
                <div key={index} className="text-center">
                  <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'rgba(224, 151, 65, 0.2)', color: 'rgb(107, 42, 0)' }}>
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
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
              Investment Opportunity
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgb(224, 151, 65)' }}>
              Cadastral owners will receive a percentage of the available minerals from the site. Non-refundable investment required for cadastral unit allocation.
            </p>
            <a
              href="/investment"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: 'rgb(224, 151, 65)' }}
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
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
              Technical Report
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgb(224, 151, 65)' }}>
              Access the complete technical report on alluvial gold mineralization with detailed geological analysis, mineral identification, and exploration findings for the Cross River Multi-Mineral Project.
            </p>
            <a
              href="https://www.notion.so/Technical-Report-for-Alluvial-gold-mineralization_Parts-of-Sheet-314_Ugep-1-final-draft-2af3084ed39580748926cabbe6a2e6cd?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: 'rgb(224, 151, 65)' }}
            >
              View Full Technical Report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}