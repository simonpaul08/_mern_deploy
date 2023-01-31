import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Donate from "../components/Donate";
import CustomLink from "../components/CustomLink";

const StudyMaterials = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          Study Materials
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 xl:w-1/2">
          <p className="my-8">
            The contents of the study materials used by Life in the UK Test Web
            are based on the Life in the United Kingdom:
            <a
              href="https://www.amazon.co.uk/gp/product/0113413408/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0113413408&linkCode=as2&tag=lifintheukt06-21"
              className=" text-[#A8DADC] whitespace-nowrap"
              target="_blank"
            >
              {" "}
              A Guide for New Residents: 3rd edition
            </a>{" "}
            Handbook used to examine individuals who want to become permanent
            residents or British citizens.
          </p>
          <p className="my-8">
            The topics of study are divided into the following Chapters:
          </p>
          <ul className="my-8 list-disc pl-10">
            <li>
              Chapter 1:{" "}
              <Link
                to="/the-values-and-principles-of-the-uk"
                className=" text-[#A8DADC]"
              >
                The Values and Principles of the UK
              </Link>
            </li>
            <li>
              Chapter 2:{" "}
              <Link to="/what-is-the-uk" className=" text-[#A8DADC]">
                What is the UK?
              </Link>
            </li>
            <li>
              Chapter 3:{" "}
              <Link
                to="/a-long-and-illustrious-history"
                className=" text-[#A8DADC]"
              >
                A Long and Illustrious History
              </Link>
            </li>
            <li>
              Chapter 4:{" "}
              <Link to="/a-modern-thriving-society" className=" text-[#A8DADC]">
                A Modern, Thriving Society
              </Link>
            </li>
            <li>
              Chapter 5:{" "}
              <Link
                to="/the-uk-government-the-law-and-your-role"
                className=" text-[#A8DADC]"
              >
                The UK Government, the Law and Your Role
              </Link>
            </li>
          </ul>
          <div>
              <CustomLink to="/test-1">Test your knowledge</CustomLink>
          </div>
        </div>

        <div className="w-full md:ml-3 lg:ml-5 mt-5 md:w-1/4">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
