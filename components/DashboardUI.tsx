import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function DashboardUI() {
  return (
    <main className="relative min-h-screen grid grid-cols-1 bg-[#1A1A1A]  items-center pt-24 lg:pt-0">
      {/* first Section */}
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center mt-10 lg:mt-0">
        <div className="z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1] bg-[#D48C45]"></div>
            <span className="font-sans text-xs tracking-[0.4em] text-[#D48C45] uppercase">Est. 2026 • Michelin Standards</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-[#F5E6CC] leading-[1.1] mb-8">
            The Art of the <br />
            <span className="italic text-[#D48C45] block mt-2">Open Flame.</span>
          </h1>

          <p className="font-sans text-[#F5E6CC]/70 text-lg max-w-md leading-relaxed mb-10">Experience a symphony of wood-fired flavors and artisanal craft. Where heritage oak meets the intensity of the ember.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={"/reservation"}
              className="group relative hidden md:flex items-center justify-center bg-[#D48C45] hover:bg-[#b07439] text-[#1A1A1A] font-bold rounded-md px-8 h-14 uppercase tracking-widest overflow-hidden transition-all duration-300 "
            >
              <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-[200%]">Book a Table</span>

              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out translate-y-[150%] group-hover:translate-y-0">Book Now</span>
            </Link>

            <Link href={"/menu"}>
              <Button
                variant="outline"
                className="group relative hidden md:flex items-center justify-center bg-transparent border border-[#D48C45] hover:bg-[#D48C45] text-[#D48C45] hover:text-[#1A1A1A] font-bold rounded-md px-8 h-14 uppercase tracking-widest overflow-hidden transition-all duration-300"
              >
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-x-[10%]">View Menu</span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out translate-x-full group-hover:translate-x-13">
                  <ArrowBigRight className="w-10 h-10" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative block lg:py-12">
          <div className="absolute -inset-2 border border-[#D48C45]/30 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>
          <div className="relative h-[550] w-full overflow-hidden border border-white/10 shadow-2xl">
            <Image fill src="/food.jpg" alt="Fine Dining" className="object-cover w-full h-full grayscale-20% hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <section className="bg-[#1A1A1A] w-full py-24 px-8 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-[#D48C45] font-sans text-xs tracking-[0.3em] uppercase block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6CC] leading-tight">
                The Philosophy <br /> of the <span className="italic">Hearth</span>
              </h2>
            </div>

            <p className="text-lg font-light text-[#F5E6CC]/80 leading-relaxed font-sans max-w-xl">
              At <span className="text-[#D48C45] font-medium">Ember & Oak</span>, every detail is guided by restraint and respect. From the crackle of the wood-fired oven to the precise pour of a vintage red, our team moves with purpose —
              attentive without intrusion, present without performance.
            </p>
          </div>

          <div className="relative w-full max-w-md aspect-4/5 overflow-hidden shadow-2xl bg-[#1a1a1a]">
            {/* Added a background color so the SVG isn't floating in void */}

            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#D48C45]/40 z-10"></div>

            <Image
              src="/service.svg"
              alt="Elegant restaurant service"
              fill // Use fill instead of fixed width/height for aspect-ratio containers
              className="object-contain p-12 grayscale-30% hover:scale-110 transition-transform duration-1000"
            />

            <div className="absolute inset-0 bg-linear-to-tr from-[#1A1A1A]/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <section className="bg-[#1A1A1A] py-24 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="text-[#D48C45] font-sans text-xs tracking-[0.4em] uppercase">The Seasonal Collection</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#F5E6CC]">
                From the <span className="italic">Hearth</span>
              </h2>
              <p className="text-[#F5E6CC]/60 max-w-lg mx-auto font-light">A curated selection of our signature dishes, prepared over aged oak and glowing embers.</p>
            </div>

            {/* Dish Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Salt-Baked Celeriac",
                  desc: "Truffle emulsion, roasted sunflower seeds, herb oil.",
                  price: "75",
                  img: "/celeriac.jpg",
                },
                {
                  title: "Forest Mushroom",
                  desc: "Wild pine needle oil, truffle dashi, fermented garlic.",
                  price: "42",
                  img: "/forestMushroom.jpg",
                },
                {
                  title: "Roasted Heirloom",
                  desc: "Goat curd, burnt honey",
                  price: "28",
                  img: "/roastedHeirloom.jpg",
                },
              ].map((dish, index) => (
                <div key={index} className="group relative overflow-hidden bg-black aspect-3/4">
                  {/* Image */}
                  <Image src={dish.img} alt={dish.title} width={500} height={600} className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#D48C45] text-sm font-bold mb-2">${dish.price}</span>
                    <h3 className="text-2xl font-serif text-[#F5E6CC] mb-1">{dish.title}</h3>
                    <p className="text-[#F5E6CC]/60 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{dish.desc}</p>
                    {/* Elegant Line */}
                    <div className="w-0 group-hover:w-full h-[1] bg-[#D48C45] mt-4 transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* View Full Menu Link */}
            <div className="mt-16 text-center">
              <button className="border border-[#F5E6CC]/20 px-12 py-4 text-[#F5E6CC] uppercase tracking-widest text-xs hover:bg-[#F5E6CC] hover:text-[#1A1A1A] transition-all duration-300">Explore Full Menu</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
