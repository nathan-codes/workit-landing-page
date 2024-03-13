import PrimaryButton from "@/components/buttons/PrimaryButton";
import { manrope } from "./Fonts";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main
        className={`${manrope.className}  bg-[#24053E] h-[600px] rounded-b-[100px]`}
      >
        <Header />
      </main>

      <footer></footer>
    </>
  );
}
