import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'rgb(107, 42, 0)' }}>
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-6" style={{ color: 'rgb(224, 151, 65)' }}>
          Page Not Found
        </h2>
        <p className="text-lg mb-8" style={{ color: 'rgb(224, 151, 65)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
          style={{ backgroundColor: 'rgb(224, 151, 65)' }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}