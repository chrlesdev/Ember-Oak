import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ReservationUI() {
  return (
    <div className="px-6 py-24 bg-[#1A1A1A] text-[#F5E6CC] min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="text-[#D48C45] font-sans text-xs tracking-[0.3em] uppercase block">Reservations</span>
          <h1 className="text-4xl md:text-5xl font-serif">Book A Table</h1>
          <div className="flex justify-center">
            <div className="w-12 h-[1] bg-[#D48C45]"></div>
          </div>
          <p className="text-[#F5E6CC]/60 font-light italic text-sm">Join us for an evening of fire-kissed flavors.</p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#D48C45]/80 ml-1">First Name</label>
              <Input type="text" placeholder="John" className="bg-transparent border-[#F5E6CC]/10 border-b-2 border-x-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:border-[#D48C45] transition-colors h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#D48C45]/80 ml-1">Last Name</label>
              <Input type="text" placeholder="Doe" className="bg-transparent border-[#F5E6CC]/10 border-b-2 border-x-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:border-[#D48C45] transition-colors h-12 text-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#D48C45]/80 ml-1">Email Address</label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent border-[#F5E6CC]/10 border-b-2 border-x-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:border-[#D48C45] transition-colors h-12 text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#D48C45]/80 ml-1">Phone Number</label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-transparent border-[#F5E6CC]/10 border-b-2 border-x-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:border-[#D48C45] transition-colors h-12 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Guests Input */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#D48C45] mb-2 block font-bold">Party Size</label>
              <input type="text" placeholder="e.g. 2 Guests" className="w-full bg-transparent border-b border-[#F5E6CC]/20 py-3 outline-none focus:border-[#D48C45] transition-colors placeholder:text-[#F5E6CC]/20 font-serif text-xl" />
            </div>

            {/* Date & Time Input */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#D48C45] mb-2 block font-bold">Preferred Date & Time</label>
              <input
                type="text"
                placeholder="e.g. Oct 12th, 7:30 PM"
                className="w-full bg-transparent border-b border-[#F5E6CC]/20 py-3 outline-none focus:border-[#D48C45] transition-colors placeholder:text-[#F5E6CC]/20 font-serif text-xl"
              />
            </div>
          </div>
          <div className="pt-8 flex justify-center">
            <Button className="bg-[#D48C45] hover:bg-[#b37335] text-black font-bold py-6 px-12 rounded-none transition-all duration-300 tracking-widest uppercase text-xs">Confirm Reservation</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
