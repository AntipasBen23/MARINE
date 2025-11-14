import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  overlay?: boolean;
}

export default function HeroSection({ title, description, backgroundImage, overlay = true }: HeroSectionProps) {
  return (
    <section className="relative py-24 bg-gray-50">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover opacity-20"
          />
          {overlay && <div className="absolute inset-0 bg-black/20"></div>}
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(107, 42, 0)' }}>
          {title}
        </h1>
        <p className="text-lg max-w-3xl" style={{ color: 'rgb(224, 151, 65)' }}>
          {description}
        </p>
      </div>
    </section>
  );
}