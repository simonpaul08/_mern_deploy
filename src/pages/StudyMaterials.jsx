import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const StudyMaterials = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC]   text-white  m-0 md:mt-4 p-5">
        <h1 className="text-2xl screen max-w-screen-xl mx-auto font-bold">
          Study Materials
        </h1>
      </div>
      <div className=" max-w-screen-xl mx-auto text-lg px-5">
        <p className="max-w-screen-md my-8">
          The contents of the study materials used by Life in the UK Test Web
          are based on the Life in the United Kingdom:
          <a
            href="https://www.amazon.co.uk/gp/product/0113413408/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0113413408&linkCode=as2&tag=lifintheukt06-21"
            className=" text-[#A8DADC]"
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
            <Link
              to="/a-long-and-illustrious-history"
              className=" text-[#A8DADC]"
            >
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
          <button className="uppercase text-lg font-bold bg-[#A8DADC] text-white mx-auto my-8 block  rounded-full p-4 drop-shadow-2xl">
            <AiOutlineArrowRight className="inline-block " />
            <span className="pl-2">Test your knowledge</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
