export default function ReservationLoading() {
  return (
    <div className="px-6 py-24 bg-[#1A1A1A] min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-12">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-3 w-24 bg-[#D48C45]/20 animate-pulse rounded"></div>
          <div className="h-10 w-64 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
          <div className="w-12 h-px bg-[#D48C45]/40"></div>
        </div>

        {/* Form Grid Skeleton */}
        <div className="space-y-8">
          {[1, 2, 3].map((row) => (
            <div key={row} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <div className="h-2 w-20 bg-[#D48C45]/20 rounded"></div>
                <div className="h-12 w-full bg-[#F5E6CC]/5 animate-pulse border-b border-[#F5E6CC]/10"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-20 bg-[#D48C45]/20 rounded"></div>
                <div className="h-12 w-full bg-[#F5E6CC]/5 animate-pulse border-b border-[#F5E6CC]/10"></div>
              </div>
            </div>
          ))}

          {/* Button Skeleton */}
          <div className="flex justify-center pt-8">
            <div className="h-14 w-48 bg-[#D48C45]/20 animate-pulse rounded-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
