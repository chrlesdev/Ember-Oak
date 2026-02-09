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
    { title: "Appetizers", data: appetizers },
    { title: "Seasonal Mains", data: mainCourse },
    { title: "Desserts", data: dessert },
  ];

  const handleItemClick = (sectionTitle: string, photoPath: string) => {
    setActiveImages((prev) => ({
      ...prev,
      [sectionTitle]: photoPath,
    }));
  };

  return (
    <section className="px-8 py-24 bg-[#1A1A1A] text-[#F5E6CC] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col gap-10 md:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div className="flex-1 w-full">
              <div className="relative aspect-4/5 flex justify-items-center">
                <Image alt={section.title} fill src={activeImages[section.title]} className="object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#F5E6CC]/50 border-b border-[#F5E6CC]/10 pb-4">{section.title}</h2>

              {section.data.map((item, idx) => {
                const isActive = activeImages[section.title] === item.photo;

                return (
                  <div key={idx} onMouseEnter={() => setActiveImages({ ...activeImages, [section.title]: item.photo })} onClick={() => handleItemClick(section.title, item.photo)} className="group cursor-pointer py-4">
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${isActive ? "text-[#D48C45]" : "text-[#F5E6CC]/40 group-hover:text-[#F5E6CC]/80"}`}>{item.name}</h4>

                      {/* The dotted line - hidden on mobile, shown on web/active */}
                      <div className={`flex-1 border-b border-[#F5E6CC]/10 border-dotted mb-1 transition-opacity ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}></div>

                      <span className={`text-sm font-sans italic transition-colors ${isActive ? "text-[#D48C45]" : "text-[#D48C45]/30"}`}>{section.title === "Appetizers" ? "24" : section.title === "Desserts" ? "18" : "52"}</span>
                    </div>

                    <p
                      className={`text-[#F5E6CC]/50 font-light mt-2 max-w-md italic text-sm leading-relaxed transition-all duration-500 ${
                        isActive ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-70 md:group-hover:max-h-20"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
