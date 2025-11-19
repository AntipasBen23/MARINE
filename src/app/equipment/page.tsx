import Image from "next/image";

export default function EquipmentPage() {
  const equipment = [
    {
      name: "Hydraulic Excavator",
      image: "/images/hydraulic-excavator.jpg",
      description: "Heavy-duty excavation for mining operations"
    },
    {
      name: "Rope Shovels",
      image: "/images/rope-shovels.jpg",
      description: "Large capacity mineral extraction"
    },
    {
      name: "Crawler Dozers",
      image: "/images/crawler-dozers.jpg",
      description: "Site preparation and earthmoving"
    },
    {
      name: "Off-Highway Trucks",
      image: "/images/off-highway-trucks.jpg",
      description: "Heavy-duty mineral transportation"
    },
    {
      name: "Jaw Crushers",
      image: "/images/jaw-crushers.jpg",
      description: "Mineral crushing and processing"
    },
    {
      name: "Wheel Dozers",
      image: "/images/wheel-dozers.jpg",
      description: "Efficient material handling and grading"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
            Our Equipment
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#2d5a3d' }}>
            State-of-the-art mining equipment and machinery for efficient exploration, extraction, and processing operations.
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="relative h-64">
                  <Image 
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a4d2e' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: '#2d5a3d' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                7+
              </div>
              <div style={{ color: '#d4a029' }}>Equipment Types</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                24/7
              </div>
              <div style={{ color: '#d4a029' }}>Operations</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1a4d2e' }}>
                Modern
              </div>
              <div style={{ color: '#d4a029' }}>Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d2e' }}>
              Equipped for Success
            </h2>
            <p className="text-lg mb-8" style={{ color: '#2d5a3d' }}>
              Our advanced mining equipment ensures efficient operations and high-quality mineral extraction across all our sites.
            </p>
            <a
              href="/investment"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#d4a029' }}
            >
              Explore Investment Opportunities
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}