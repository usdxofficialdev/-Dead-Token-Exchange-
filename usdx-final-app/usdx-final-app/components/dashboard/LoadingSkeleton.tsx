export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="glass rounded-lg p-6 animate-pulse">
          <div className="h-4 bg-[#1a1a24] rounded w-3/4 mb-3"></div>
          <div className="h-8 bg-[#1a1a24] rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}
