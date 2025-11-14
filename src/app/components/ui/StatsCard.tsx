interface StatsCardProps {
  value: string | number;
  label: string;
  subtitle?: string;
}

export default function StatsCard({ value, label, subtitle }: StatsCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
      <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(107, 42, 0)' }}>
        {value}
      </div>
      <div style={{ color: 'rgb(224, 151, 65)' }}>{label}</div>
      {subtitle && (
        <div className="text-sm mt-2" style={{ color: 'rgb(224, 151, 65)' }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}