export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-32 px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="h-10 w-48 bg-[#F5E6CC]/10 animate-pulse rounded"></div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-between items-end border-b border-white/5 pb-4">
              <div className="space-y-2 w-full">
                <div className="h-5 w-1/3 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
                <div className="h-3 w-2/3 bg-[#F5E6CC]/5 animate-pulse rounded"></div>
              </div>
              <div className="h-5 w-12 bg-[#D48C45]/10 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
