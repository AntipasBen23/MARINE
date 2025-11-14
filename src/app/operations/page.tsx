import { companyInfo } from "@/lib/data/company";
import Image from "next/image";

export default function OperationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            Our Operations
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            We operate across multiple sites in Nigeria, utilizing advanced technologies for exploration, extraction, and processing.
          </p>
        </div>
      </section>

      {/* Kogi State Site */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
                Kogi State Operations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                    Location
                  </h3>
                  <p style={{ color: 'rgb(224, 151, 65)' }}>
                    {companyInfo.sites.kogi.location}, near {companyInfo.sites.kogi.nearRiver}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                    Cadastral Units
                  </h3>
                  <p className="text-3xl font-bold" style={{ color: 'rgb(224, 151, 65)' }}>
                    {companyInfo.sites.kogi.cadastralUnits}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                    Focus
                  </h3>
                  <p style={{ color: 'rgb(224, 151, 65)' }}>
                    {companyInfo.sites.kogi.focus}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <Image 
                src="/images/kogi-site.jfif" 
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
                src="/images/cross-river-site.jfif" 
                alt="Cross River State Operations" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
                Cross River State Operations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                    Location
                  </h3>
                  <p style={{ color: 'rgb(224, 151, 65)' }}>
                    {companyInfo.sites.crossRiver.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                    Cadastral Units
                  </h3>
                  <p className="text-3xl font-bold" style={{ color: 'rgb(224, 151, 65)' }}>
                    {companyInfo.sites.crossRiver.cadastralUnits}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
                    Focus
                  </h3>
                  <p style={{ color: 'rgb(224, 151, 65)' }}>
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
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                  {activity.title}
                </h3>
                <p style={{ color: 'rgb(224, 151, 65)' }}>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}