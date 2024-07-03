import { useEffect, useState } from "react";
import SelectOption from "../../base/Select";
import Button from "../../base/Button";
import Input from "../../base/Input";
import { useScrollNav } from "../../../hooks/useScrollNav";
import Jumbotron from "../jumbotron";
import NavLogo from "./nav-logo";
import NavMobile from "./nav-mobile";
import NavSearch from "./nav-search";
import NavAuth from "./nav-auth";

const Navbar = () => {
  const show = useScrollNav();
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div
        className={`sticky xl:fixed top-0 w-full transition-transform duration-700 transform ${
          show ? "translate-y-0" : "-translate-y-full"
        } font-poppins z-10`}
      >
        <div className="bg-main-red shadow-md xl:h-20 min-h-full xl:px-[15%] md:px-10 px-5 py-3 flex flex-col xl:flex-row justify-around xl:items-center gap-x-0 gap-y-2 xl:gap-x-2">
          <NavLogo open={open} setOpen={setOpen} />
          <NavMobile open={open} />
          <NavSearch />
          <NavAuth />
        </div>
      </div>
      <div className="hidden xl:block mx-auto xl:px-4 xl:py-2 bg-gray-200 xl:h-10"></div>
      <Jumbotron />
    </nav>
  );
};

export default Navbar;
