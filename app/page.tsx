import NavbarUI from "@/components/NavbarUi";
import DashboardUI from "@/components/DashboardUI";
import FooterUI from "@/components/FooterUI";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] h-screen w-screen">
      <NavbarUI />
      <section>
        <DashboardUI />
      </section>
      <FooterUI />
    </div>
  );
}
