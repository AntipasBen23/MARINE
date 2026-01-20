import { companyInfo } from "@/lib/data/company";
import Image from "next/image";

export default function OperationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
            Our Operations
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#2d5a3d' }}>
            We operate across multiple sites in Nigeria, utilizing advanced technologies for exploration, extraction, and processing.
          </p>
        </div>
      </section>

      {/* Kogi State Site */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
                Kogi State Operations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Location
                  </h3>
                  <p style={{ color: '#2d5a3d' }}>
                    {companyInfo.sites.kogi.location}, near {companyInfo.sites.kogi.nearRiver}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Cadastral Units
                  </h3>
                  <p className="text-3xl font-bold" style={{ color: '#d4a029' }}>
                    {companyInfo.sites.kogi.cadastralUnits}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Focus
                  </h3>
                  <p style={{ color: '#2d5a3d' }}>
                    {companyInfo.sites.kogi.focus}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <Image 
                src="/images/kogi-site.png" 
                alt="Kogi State Operations" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cross River State Site */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 order-2 lg:order-1">
              <Image 
                src="/images/cross-river-site.jpg" 
                alt="Cross River State Operations" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
                Cross River State Operations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Location
                  </h3>
                  <p style={{ color: '#2d5a3d' }}>
                    {companyInfo.sites.crossRiver.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Cadastral Units
                  </h3>
                  <p className="text-3xl font-bold" style={{ color: '#d4a029' }}>
                    {companyInfo.sites.crossRiver.cadastralUnits}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    Focus
                  </h3>
                  <p style={{ color: '#2d5a3d' }}>
                    {companyInfo.sites.crossRiver.focus} - {companyInfo.sites.crossRiver.mineralsCount}+ minerals identified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a4d2e' }}>
            Our Activities
          </h2>
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
    </main>
  );
}