import { minerals } from "@/lib/data/minerals";

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
            Our Cross River State site contains over 64 identified minerals ready for extraction.
          </p>
        </div>
      </section>

      {/* Minerals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                64+
              </div>
              <div style={{ color: '#d4a029' }}>Total Minerals</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                380
              </div>
              <div style={{ color: '#d4a029' }}>Available Cadastral Units</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                Calabar
              </div>
              <div style={{ color: '#d4a029' }}>Cross River State</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}