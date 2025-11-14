import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            Our Projects
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            Explore our major mining projects across Nigeria with detailed geological reports and findings.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kogi Gold Project */}
            <Link href="/projects/kogi-gold" className="group">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="relative h-64">
                  <Image 
                    src="/images/projects/kogi-gold.png" 
                    alt="Kogi Gold Project" 
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                    Kogi State Gold Exploration
                  </h2>
                  <p className="mb-4" style={{ color: 'rgb(224, 151, 65)' }}>
                    Comprehensive geological survey and gold mineralization project in Lokoja, Kogi State. 117 sq. km exploration license.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(224, 151, 65, 0.2)', color: 'rgb(107, 42, 0)' }}>
                      410 CUs
                    </span>
                    <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(224, 151, 65, 0.2)', color: 'rgb(107, 42, 0)' }}>
                      Gold
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Cross River Project */}
            <Link href="/projects/cross-river" className="group">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="relative h-64">
                  <Image 
                    src="/images/projects/cross-river.jpg" 
                    alt="Cross River Project" 
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                    Cross River Multi-Mineral Project
                  </h2>
                  <p className="mb-4" style={{ color: 'rgb(224, 151, 65)' }}>
                    Multi-mineral exploration and extraction project in Calabar with over 64 identified minerals ready for mining.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(224, 151, 65, 0.2)', color: 'rgb(107, 42, 0)' }}>
                      380 CUs
                    </span>
                    <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(224, 151, 65, 0.2)', color: 'rgb(107, 42, 0)' }}>
                      64+ Minerals
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}