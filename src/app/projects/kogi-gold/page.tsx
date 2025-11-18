import Image from "next/image";

export default function KogiGoldPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            Kogi State Gold Exploration Project
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            Comprehensive geophysical interpretation and gold mineralization project in Lokoja, Kogi State.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>117</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Square Kilometers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>410</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Cadastral Units</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>Gold</div>
              <div style={{ color: 'rgb(224, 151, 65)' }}>Primary Mineral</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(107, 42, 0)' }}>
            Location Details
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>Area</h3>
                <p style={{ color: 'rgb(224, 151, 65)' }}>Lokoja Local Government Area, Kogi State</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>Accessibility</h3>
                <p style={{ color: 'rgb(224, 151, 65)' }}>Close to River Niger, accessible via footpath and untarred road</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>Geology</h3>
                <p style={{ color: 'rgb(224, 151, 65)' }}>Undifferentiated Schist, favorable for gold mineralization</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>Topography</h3>
                <p style={{ color: 'rgb(224, 151, 65)' }}>Mild ridge trending east-west direction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(107, 42, 0)' }}>
            Key Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                Geological Setting
              </h3>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
                The area is suitable for gold mineralization due to pronounced tectonic activities and intense hydrothermal alteration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                Mineralization Type
              </h3>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
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
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
              Technical Report
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgb(224, 151, 65)' }}>
              Access the complete geophysical interpretation report with detailed findings, geological data, and mineral exploration analysis for the Kogi State Gold Exploration Project.
            </p>
            <a
              href="https://www.notion.so/Kogi-Technical-Report-for-gold-mineralization_Kirri-NE_Koton-Karfi-for-B-R-Marine-Energy-2ac3084ed3958068aaaae2f2c992b8e9?source=copy_link"
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