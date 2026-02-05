export default function MenuUI() {
  const appetizers = [
    {
      name: "Hokkaido Scallops",
      description: "Ember-charred leek, brown butter emulsion, sea buckthorn.",
      photo: "",
    },
    {
      name: "Aged Beetroot",
      description: "Smoked goat curd, wildflower honey, toasted hazelnut crumble.",
      photo: "",
    },
    {
      name: "Wagyu Tartare",
      description: "Bone marrow aioli, cured egg yolk, oak-smoked salt, sourdough.",
      photo: "",
    },
    {
      name: "Forest Mushroom",
      description: "Wild pine needle oil, truffle dashi, fermented garlic.",
      photo: "",
    },
  ];

  const mainCourse = [
    {
      name: "Heritage Ribeye",
      description: "45-day dry-aged, wood-fired oak, burnt onion purée, red wine jus.",
      photo: "",
    },
    {
      name: "Atlantic Turbot",
      description: "Grilled over cherry wood, white asparagus, lemon verbena foam.",
      photo: "",
    },
    {
      name: "Glazed Iberico Pork",
      description: "Smoked plum, crackling, parsnip velvet, mountain herbs.",
      photo: "",
    },
    {
      name: "Salt-Baked Celeriac",
      description: "Truffle emulsion, roasted sunflower seeds, herb oil.",
      photo: "",
    },
  ];

  const dessert = [
    {
      name: "Dark Chocolate & Smoke",
      description: "Smoke	70% cacao, smoked sea salt, toasted oak gelato, espresso foam.",
      photo: "",
    },
    {
      name: "Preserved Orchard Pear",
      description: "Poached in elderflower, honeycomb, cultured cream, mint.",
      photo: "",
    },
  ];
  const sections = [
    { title: "Appetizers", data: appetizers },
    { title: "Main Course", data: mainCourse },
    { title: "Desserts", data: dessert },
  ];
  return (
    <section className="px-8 py-24 bg-[#1A1A1A] text-[#F5E6CC]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#D48C45] font-sans text-xs tracking-[0.4em] uppercase">Selection</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-2">The Menu</h2>
          <div className="w-12 h-[1] bg-[#D48C45] mx-auto mt-6"></div>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="font-serif text-2xl mb-10 text-[#D48C45] italic border-b border-white/10 pb-4">{section.title}</h3>

            <div className="grid gap-12">
              {section.data.map((item, index) => (
                <div key={index} className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4">
                      <h4 className="text-xl md:text-2xl font-serif group-hover:text-[#D48C45] transition-colors duration-300">{item.name}</h4>
                      <div className="hidden md:block flex-1 border-b border-white/5 border-dotted"></div>
                    </div>
                    <p className="text-[#F5E6CC]/60 font-light italic mt-1 text-sm md:text-base max-w-xl">{item.description}</p>
                  </div>

                  <span className="font-sans text-[#D48C45] font-medium tracking-widest text-sm">{section.title === "Appetizers" ? "24" : section.title === "Desserts" ? "18" : "52"}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-[#F5E6CC]/40 text-xs font-light tracking-widest uppercase mt-10">* Please inform your server of any dietary requirements</p>
      </div>
    </section>
  );
}
