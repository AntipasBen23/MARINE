import { minerals } from "@/lib/data/minerals";
import { kogiMinerals } from "@/lib/data/kogi-minerals";

export default function MineralsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
            Minerals Catalog
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#2d5a3d' }}>
            Explore our comprehensive mineral resources across our mining sites in Nigeria.
          </p>
        </div>
      </section>

      {/* Cross River State Minerals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
              Cross River State
            </h2>
            <p className="text-lg" style={{ color: '#2d5a3d' }}>
              Over 64 identified minerals ready for extraction in Calabar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {minerals.map((mineral, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-2 hover:shadow-md transition" style={{ borderColor: '#d4a029' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold" style={{ color: '#1a4d2e' }}>
                    {mineral.name}
                  </h3>
                  <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'rgba(124, 179, 66, 0.2)', color: '#1a4d2e' }}>
                    {mineral.symbol}
                  </span>
                </div>
                {mineral.width && mineral.depth && (
                  <div className="text-sm" style={{ color: '#2d5a3d' }}>
                    <p>Width: {mineral.width}</p>
                    <p>Depth: {mineral.depth}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kogi State Minerals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
              Kogi State
            </h2>
            <p className="text-lg" style={{ color: '#2d5a3d' }}>
              18 identified minerals including gold in Lokoja Local Government Area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {kogiMinerals.map((mineral, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-2 hover:shadow-md transition" style={{ borderColor: '#d4a029' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold" style={{ color: '#1a4d2e' }}>
                    {mineral.name}
                  </h3>
                  <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'rgba(124, 179, 66, 0.2)', color: '#1a4d2e' }}>
                    {mineral.symbol}
                  </span>
                </div>
                {mineral.width && mineral.depth && (
                  <div className="text-sm" style={{ color: '#2d5a3d' }}>
                    <p>Width: {mineral.width}</p>
                    <p>Depth: {mineral.depth}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cross River Stats */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a4d2e' }}>
                Cross River State
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: '#2d5a3d' }}>Total Minerals:</span>
                  <span className="font-bold" style={{ color: '#d4a029' }}>64+</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#2d5a3d' }}>Cadastral Units:</span>
                  <span className="font-bold" style={{ color: '#d4a029' }}>380</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#2d5a3d' }}>Location:</span>
                  <span className="font-bold" style={{ color: '#d4a029' }}>Calabar</span>
                </div>
              </div>
            </div>

            {/* Kogi Stats */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a4d2e' }}>
                Kogi State
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: '#2d5a3d' }}>Total Minerals:</span>
                  <span className="font-bold" style={{ color: '#d4a029' }}>18</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#2d5a3d' }}>Cadastral Units:</span>
                  <span className="font-bold" style={{ color: '#d4a029' }}>410</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#2d5a3d' }}>Location:</span>
                  <span className="font-bold" style={{ color: '#d4a029' }}>Lokoja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}