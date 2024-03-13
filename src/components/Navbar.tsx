import React from "react";
import SecondaryButton from "./buttons/SecondaryButton";
import logo from "/public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <div>
        <Image src={logo} alt="workit-logo" />
      </div>
      <div>
        <SecondaryButton text="Apply for access" />
      </div>
    </nav>
  );
};

export default Navbar;
