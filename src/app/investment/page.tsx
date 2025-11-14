import { companyInfo } from "@/lib/data/company";

export default function InvestmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
            Investment Opportunities
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
            Partner with us to unlock Africa's mineral wealth. Join a leading mining operation with proven resources.
          </p>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
            Available Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-2" style={{ borderColor: 'rgb(224, 151, 65)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
                Kogi State Gold Project
              </h3>
              <div className="space-y-3 mb-6">
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  <strong style={{ color: 'rgb(107, 42, 0)' }}>Cadastral Units:</strong> 410 CUs
                </p>
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  <strong style={{ color: 'rgb(107, 42, 0)' }}>Focus:</strong> Gold Exploration & Mining
                </p>
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  <strong style={{ color: 'rgb(107, 42, 0)' }}>Location:</strong> Lokoja, Kogi State
                </p>
              </div>
              <a 
                href="/projects/kogi-gold"
                className="block w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition text-center" 
                style={{ backgroundColor: 'rgb(224, 151, 65)' }}
              >
                Learn More
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2" style={{ borderColor: 'rgb(224, 151, 65)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
                Cross River Multi-Mineral Project
              </h3>
              <div className="space-y-3 mb-6">
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  <strong style={{ color: 'rgb(107, 42, 0)' }}>Cadastral Units:</strong> 380 CUs Available
                </p>
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  <strong style={{ color: 'rgb(107, 42, 0)' }}>Minerals:</strong> 64+ Identified
                </p>
                <p style={{ color: 'rgb(224, 151, 65)' }}>
                  <strong style={{ color: 'rgb(107, 42, 0)' }}>Location:</strong> Calabar, Cross River State
                </p>
              </div>
              <a 
                href="/projects/cross-river"
                className="block w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition text-center" 
                style={{ backgroundColor: 'rgb(224, 151, 65)' }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(107, 42, 0)' }}>
            Investor Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                Mineral Percentage
              </h3>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
                Receive a percentage of available minerals from the site based on your cadastral unit allocation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                Proven Resources
              </h3>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
                Invest in sites with comprehensive geological surveys and confirmed mineral deposits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 42, 0)' }}>
                Expert Operations
              </h3>
              <p style={{ color: 'rgb(224, 151, 65)' }}>
                Benefit from our experienced team and state-of-the-art mining equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to right, rgb(224, 151, 65), rgb(204, 131, 45))' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss investment opportunities and schedule a site visit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            style={{ color: 'rgb(224, 151, 65)' }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}