"use client";

import { UtensilsCrossed, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function NavbarUI() {
  const routes = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Reservation", link: "/reservation" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1A1A1A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2 group">
          <div className="bg-[#D48C45] p-2 rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-300">
            <UtensilsCrossed className="text-[#1A1A1A] w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
          <span className="font-serif text-xl tracking-widest text-[#F5E6CC] uppercase ml-2">
            Ember <span className="text-[#D48C45]">&</span> Oak
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {routes.map((item) => (
            <Link href={item.link} key={item.name} className="relative text-[#F5E6CC]/80 hover:text-[#D48C45] transition-colors duration-300 text-sm font-medium tracking-widest uppercase group py-2">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1] bg-[#D48C45] transition-all duration-500 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={"/reservation"}
            className="group relative hidden md:flex items-center justify-center bg-[#D48C45] hover:bg-[#b07439] text-[#1A1A1A] font-bold rounded-md px-8 h-12 uppercase tracking-widest overflow-hidden transition-all duration-300 "
          >
            <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-[200%]">Book a Table</span>

            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out translate-y-[150%] group-hover:translate-y-0">Book Now</span>
          </Link>

          <div className="md:hidden ">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-[#F5E6CC] hover:bg-white/5 rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300] bg-[#1A1A1A] border-l border-white/10 text-[#F5E6CC]">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2 text-[#F5E6CC] font-serif tracking-widest uppercase border-b border-white/10 pb-4">
                    <UtensilsCrossed className="w-5 h-5 text-[#D48C45]" /> Ember & Oak
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10 p-6 ">
                  {routes.map((item) => (
                    <Link key={item.name} href={item.link} className="text-xl font-light tracking-widest hover:text-[#D48C45] transition-colors">
                      {item.name}
                    </Link>
                  ))}
                  <Link href={"/reservation"} className=" flex justify-center rounded-md mt-6 bg-[#D48C45] text-[#1A1A1A] font-bold  py-6 uppercase">
                    Make a Reservation
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
