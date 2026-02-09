export default function Loading() {
  return (
    <main className="relative min-h-screen bg-[#1A1A1A] pt-24 lg:pt-0 flex items-center justify-center">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#1A1A1A]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#D48C45]/20 animate-pulse rotate-45 rounded-sm"></div>
            <div className="h-4 w-32 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 w-16 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="h-12 w-40 bg-[#D48C45]/10 animate-pulse rounded-md border border-[#D48C45]/20"></div>
          </div>

          <div className="md:hidden">
            <div className="w-10 h-10 bg-white/5 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-[#D48C45]/20"></div>
            <div className="h-3 w-48 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
          </div>

          <div className="space-y-4">
            <div className="h-12 w-3/4 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
            <div className="h-12 w-1/2 bg-[#F5E6CC]/10 animate-pulse rounded"></div>
          </div>

          <div className="space-y-3">
            <div className="h-4 w-full bg-[#F5E6CC]/5 animate-pulse rounded"></div>
            <div className="h-4 w-2/3 bg-[#F5E6CC]/5 animate-pulse rounded"></div>
          </div>
        </div>

        <div className="relative py-12">
          <div className="absolute -inset-2 border border-[#D48C45]/10 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>
          <div className="relative h-[550] w-full bg-[#F5E6CC]/5 animate-pulse border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
