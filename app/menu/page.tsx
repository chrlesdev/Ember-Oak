import MenuUI from "@/components/MenuUI";
import NavbarUI from "@/components/NavbarUi";
import FooterUI from "@/components/FooterUI";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function menu() {
  await delay(2000);

  return (
    <>
      <NavbarUI />
      <MenuUI />
      <FooterUI />
    </>
  );
}
