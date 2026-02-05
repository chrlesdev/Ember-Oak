"use client";
import { useState } from "react";
import Image from "next/image";

const appetizers = [
  {
    name: "Hokkaido Scallops",
    description: "Ember-charred leek, brown butter emulsion, sea buckthorn.",
    photo: "/hokkaidoScallop.jpg",
  },
  {
    name: "Aged Beetroot",
    description: "Smoked goat curd, wildflower honey, toasted hazelnut crumble.",
    photo: "/agedBeetroot.jpg",
  },
  {
    name: "Wagyu Tartare",
    description: "Bone marrow aioli, cured egg yolk, oak-smoked salt, sourdough.",
    photo: "/wagyuTartare.jpg",
  },
  {
    name: "Forest Mushroom",
    description: "Wild pine needle oil, truffle dashi, fermented garlic.",
    photo: "/forestMushroom.jpg",
  },

  {
    name: "Roasted Heirloom",
    description: "Goat curd, burnt honey",
    photo: "/roastedHeirloom.jpg",
  },
];

const mainCourse = [
  {
    name: "Heritage Ribeye",
    description: "45-day dry-aged, wood-fired oak, burnt onion purée, red wine jus.",
    photo: "/ribeyeSteak.jpg",
  },
  {
    name: "Atlantic Turbot",
    description: "Grilled over cherry wood, white asparagus, lemon verbena foam.",
    photo: "/fishChips.jpg",
  },
  {
    name: "Glazed Iberico Pork",
    description: "Smoked plum, crackling, parsnip velvet, mountain herbs.",
    photo: "/porkRib.jpg",
  },
  {
    name: "Salt-Baked Celeriac",
    description: "Truffle emulsion, roasted sunflower seeds, herb oil.",
    photo: "/celeriac.jpg",
  },
];

const dessert = [
  {
    name: "Dark Chocolate & Smoke",
    description: "Smoke	70% cacao, smoked sea salt, toasted oak gelato, espresso foam.",
    photo: "/darkChocolate.jpg",
  },
  {
    name: "Caramel Choco Iced Cream",
    description: "Smoke	70% cacao, Caramel, cultured cream, mint.",
    photo: "/caramelizedIceCream.jpg",
  },
];

export default function MenuUI() {
  const [activeImages, setActiveImages] = useState<Record<string, string>>({
    Appetizers: appetizers[0].photo,
    "Seasonal Mains": mainCourse[0].photo,
    Desserts: dessert[0].photo,
  });

  const sections = [
    {
      title: "Appetizers",
      data: appetizers,
      featured: "Hokkaido Scallops",
    },
    {
      title: "Seasonal Mains",
      data: mainCourse,
      featured: "The Heritage Ribeye",
    },
    {
      title: "Desserts",
      data: dessert,
      featured: "Dark Chocolate & Smoke",
    },
  ];

  return (
    <section className="px-8 py-24 bg-[#1A1A1A] text-[#F5E6CC] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-40">
        {sections.map((section, idx) => (
          <div key={idx} className={`flex flex-col gap-12 lg:gap-20 items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            <div className="flex-1 w-full group">
              <div className="relative h-[600] w-full overflow-hidden border border-white/5 shadow-2xl transition-all duration-700">
                <Image
                  src={activeImages[section.title] || section.data[0].photo}
                  alt={section.title}
                  fill
                  className="object-cover grayscale-20% sepia-10%] opacity-80 transition-all duration-700 ease-in-out group-hover:scale-105 rounded-md"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#D48C45] mb-1">Signature</p>
                  <p className="font-serif text-xl italic text-white">{section.featured}</p>
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="flex-1 w-full">
              <h3 className="text-[#D48C45] font-sans text-xs tracking-[0.4em] uppercase mb-12 border-b border-white/5 pb-4">{section.title}</h3>

              <div className="space-y-10">
                {section.data.map((item, index) => (
                  <div key={index} className="group cursor-pointer" onMouseEnter={() => setActiveImages({ ...activeImages, [section.title]: item.photo })}>
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="text-xl md:text-2xl font-serif group-hover:text-[#D48C45] transition-colors duration-300">{item.name}</h4>
                      <div className="flex-1 border-b border-white/5 border-dotted mb-1 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-sm font-sans text-[#D48C45]/50 italic group-hover:text-[#D48C45] transition-colors">{section.title === "Appetizers" ? "24" : section.title === "Desserts" ? "18" : "52"}</span>
                    </div>
                    <p className="text-[#F5E6CC]/50 font-light mt-2 max-w-md italic text-sm leading-relaxed group-hover:text-[#F5E6CC]/80 transition-colors">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
