"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { UtensilsCrossed, Globe, Instagram, Facebook } from "lucide-react";

export default function FooterUI() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  if (isLoading) {
    return (
      <footer className="bg-[#1A1A1A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-4">
              <Skeleton className="h-8 w-40 bg-white/5" />
              <Skeleton className="h-4 w-64 bg-white/5" />
              <Skeleton className="h-4 w-52 bg-white/5" />
            </div>
            <div className="md:col-span-8 grid grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-5 w-24 bg-white/5" />
                  <Skeleton className="h-4 w-20 bg-white/5" />
                  <Skeleton className="h-4 w-28 bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const sections = [
    {
      title: "Explore",
      links: [
        { name: "The Menu", href: "/" },
        { name: "Private Dining", href: "/" },
        { name: "Special Events", href: "/" },
        { name: "Our Story", href: "/" },
      ],
    },
    {
      title: "Visit",
      links: [
        { name: "Reservations", href: "/" },
        { name: "Gift Cards", href: "/" },
        { name: "Contact", href: "/" },
        { name: "Careers", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10 text-[#F5E6CC]">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <Link href={"/"} className="flex items-center gap-2 group">
              <div className="bg-[#D48C45] p-2 rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <UtensilsCrossed className="text-[#1A1A1A] w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase ml-2">
                Ember <span className="text-[#D48C45]">&</span> Oak
              </span>
            </Link>
            <p className="text-[#F5E6CC]/60 text-sm leading-relaxed max-w-xs font-light">Where the tradition of the hearth meets modern culinary artistry. Join us for an evening of wood-fired excellence.</p>
            <div className="flex gap-5">
              <Link href="#" className="text-[#D48C45] hover:text-[#F5E6CC] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#D48C45] hover:text-[#F5E6CC] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[#D48C45] text-xs font-bold uppercase tracking-[0.3em] mb-8">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[#F5E6CC]/50 hover:text-[#D48C45] text-sm transition-colors font-light tracking-wide">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Location/Hours Column */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h3 className="text-[#D48C45] text-xs font-bold uppercase tracking-[0.3em] mb-4">Location</h3>
              <p className="text-[#F5E6CC]/50 text-sm font-light leading-relaxed">
                123 Hearthside Way,
                <br />
                Tangerang, Banten 15111
              </p>
            </div>
            <div>
              <h3 className="text-[#D48C45] text-xs font-bold uppercase tracking-[0.3em] mb-4">Hours</h3>
              <p className="text-[#F5E6CC]/50 text-sm font-light leading-relaxed">
                Tue — Sun: 5:00 PM - 11:00 PM
                <br />
                Mon: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#F5E6CC]/30 text-[10px] tracking-widest uppercase">
            © {currentYear} Ember & Oak. Crafted by <span className="text-[#D48C45]">Charles</span>.
          </p>

          <div className="flex items-center gap-8 text-[10px] tracking-widest uppercase text-[#F5E6CC]/30">
            <Link href="/privacy" className="hover:text-[#D48C45] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#D48C45] transition-colors">
              Terms
            </Link>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" />
              <span>ID — EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
