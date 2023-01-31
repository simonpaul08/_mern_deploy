import React from "react";
import { Link } from "react-router-dom";
import BritishFlag from "../img/BritishFlag.jpg";
import faq from "../img/faq.png";
import StudyMaterials from "../img/StudyMaterials.png";
import ContactUs from "../img/ContactUs.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto p-5">
        <div className="flex flex-col md:flex-row items-center justify-center  mt-12 gap-20">
          <div className="flex-1">
            <h1 className="font-bold text-4xl my-6 text-center">
              Life in the UK Test
            </h1>
            <h2 className="text-center text-lg font-bold">
              Get Ready to pass your Life in the UK test for FREE!
            </h2>
            <p className="text-center text-lg font-normal">
              This website is designed to help you PASS the Life in the UK Test
              easily. We have carefully selected all our questions from the Life
              in the UK: A Guide for New Residents: 3rd edition Handbook used
              for the 2023 Life in the UK exam. And it is completely{" "}
              <span className="text-red-500">FREE</span>!
            </p>
          </div>
          <div className="flex-1">
            <div className="">
              <img
                src={BritishFlag}
                alt="BritishFlag"
                className="w-[18.75rem] h-auto mx-auto"
              />
            </div>
            <button className="uppercase text-lg font-bold bg-[#A8DADC] text-white mx-auto mt-8 block  rounded-full p-4 drop-shadow-2xl">
              Start Practising Now
            </button>
          </div>
        </div>
        <hr className="my-20" />
        <div className="flex items-center justify-center gap-32 mb-10 flex-col md:flex-row">
          <div className="flex-1 text-center">
            <div>
              <img src={faq} alt="" className="mx-auto" />
            </div>
            <h2 className="mt-4">
              <Link
                to="/faqs"
                className="font-bold text-lg  hover:text-[#A8DADC]"
              >
                FAQs
              </Link>
            </h2>
            <p className="text-lg text-[rgb(116,116,116)] pt-3">
              Get ready to pass the Life in the UK Test. Practise for the real
              exam Here!
            </p>
          </div>
          <div className="flex-1 text-center">
            <div>
              <img src={StudyMaterials} alt=" " className="mx-auto" />
            </div>
            <h2 className="mt-4">
              <Link
                to="/studyMaterials"
                className="font-bold text-lg  hover:text-[#A8DADC]"
              >
                Study Materials
              </Link>
            </h2>
            <p className="text-lg text-[rgb(116,116,116)] pt-3">
              Get the Life in the United Kingdom: A Guide for New Residents 3rd
              Edition Handbook.
            </p>
          </div>
          <div className="flex-1 text-center">
            <div>
              <img src={ContactUs} alt="" className="mx-auto" />
            </div>
            <h2 className="mt-4">
              <Link
                to="/contactUs"
                className="font-bold text-lg  hover:text-[#A8DADC]"
              >
                Contact Us
              </Link>
            </h2>
            <p className="text-lg text-[rgb(116,116,116)] pt-3">
              Do not hesitate to contact us for any questions or suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
