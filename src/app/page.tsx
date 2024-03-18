import PrimaryButton from "@/components/buttons/PrimaryButton";
import { manrope } from "./Fonts";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <header
        className={`${manrope.className}   h-[450px] md:h-[560px]  bg-[#24053E]  rounded-b-[100px]`}
      >
        <Header />

        <div className="absolute bottom-0 left-0 w-full h-12">
          <div className="wave-container h-full"></div>
        </div>
      </header>

      <section className="border-3 border-red-700 mt-30 relative top-[70px] sm:top-[100px] md:top-[150px] lg:top-[170px]">
        <Features />
      </section>


      <section>

      </section>
      
      <footer></footer>
    </>
  );
}
