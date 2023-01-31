import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#E63946] py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white text-xl font-bold">
        <div className="z-50 p-5 md:w-auto  w-full flex justify-between">
          <img src={Logo} alt="" className="cursor-pointer w-40  md:w-60" />
          <div
            className=" text-black text-4xl md:hidden block"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden justify-between items-center gap-8 h-full">
          <li>
            <Link to="/" className="capitalize  hover:text-[#A8DADC]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/studyMaterials"
              className="capitalize  hover:text-[#A8DADC]"
            >
              study materials
            </Link>
          </li>
          <li>
            <Link to="/tests" className="capitalize  hover:text-[#A8DADC]">
              tests
            </Link>
          </li>
          <li>
            <Link to="/exams" className="uppercase  hover:text-[#A8DADC]">
              exams
            </Link>
          </li>

          <li>
            <Link to="/aboutUs" className="capitalize  hover:text-[#A8DADC]">
              about us
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className="capitalize  hover:text-[#A8DADC]">
              contact us
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`md:hidden block bg-white absolute w-full h-full bottom-0 text-black py-24 pl-4 duration-500 ${
            open ? "left-0" : "-left-[100%]"
          }`}
        >
          <li className="capitalize px-3 py-7   hover:text-[#A8DADC]">
            <Link to="/">Home</Link>
          </li>
          <li className="capitalize px-3 py-7 hover:text-[#A8DADC]">
            <Link to="/studyMaterials">study materials</Link>
          </li>
          <li className="capitalize px-3 py-7 hover:text-[#A8DADC]">
            <Link to="/tests">tests</Link>
          </li>
          <li className="uppercase px-3 py-7 hover:text-[#A8DADC]">
            <Link to="/exams">exams</Link>
          </li>
          <li className="capitalize px-3 py-7   hover:text-[#A8DADC]">
            <Link to="/aboutUs">about us</Link>
          </li>
          <li className="capitalize px-3 py-7   hover:text-[#A8DADC]">
            <Link to="/contactUs">contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
