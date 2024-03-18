import Navbar from "./Navbar";
import { fraunces } from "@/app/Fonts";
import PrimaryButton from "./buttons/PrimaryButton";
import leftwaves from "/public/leftwaves.svg";
import rightwaves from "/public/rightwaves.svg";
import iphone from "/public/iphone.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="  text-white max-w-screen-xl mx-auto pt-5 px-4 md:px-10 xl:px-0 relative ">
      <Image
        src={leftwaves}
        alt="left-waves"
        className="absolute hidden sm:block top-8 left-[-210px] lg:left-[-270px] "
      />
      <Image
        src={rightwaves}
        alt="right-waves"
        className="absolute hidden sm:block top-[13rem] right-[-80px] lg:right-[-150px]"
      />
      <Navbar />

      {/* Banner Text */}
      <h1
        className={`w-[343px] md:w-[573px] lg:w-[635px] mt-10 mb-6 text-center  text-white text-[45px]  font-semibold  md:text-6xl lg:text-[80px]  leading-[60px] md:leading-[80px] lg:leading-[100px] mx-auto ${fraunces.className}`}
      >
        Data <span className="border-b-[3px] border-b-green-300">tailored</span>{" "}
        to your needs.
      </h1>

      {/* Learn More Button */}
      <div className=" flex justify-center">
        <PrimaryButton text="Learn more" />
      </div>
      <div className="w-[320px] sm:w-[514px] md:[w-767px] mx-auto my-10">
        <Image src={iphone} alt="iphone-image" className=" w-full " />
      </div>
    </header>
  );
};

export default Header;
