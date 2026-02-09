import ReservationUI from "@/components/ReservationUI";
import NavbarUI from "@/components/NavbarUi";
import FooterUI from "@/components/FooterUI";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function reservation() {
  await delay(3000);
  return (
    <div>
      <NavbarUI />
      <ReservationUI />
      <FooterUI />
    </div>
  );
}
