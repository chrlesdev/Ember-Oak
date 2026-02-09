import NavbarUI from "@/components/NavbarUi";
import DashboardUI from "@/components/DashboardUI";
import FooterUI from "@/components/FooterUI";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await delay(2000);
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
