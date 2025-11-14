export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
          style={{ 
            borderColor: 'rgb(224, 151, 65)',
            borderTopColor: 'transparent'
          }}>
        </div>
        <p style={{ color: 'rgb(107, 42, 0)' }}>Loading...</p>
      </div>
    </div>
  );
}