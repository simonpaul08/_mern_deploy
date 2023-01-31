import React from "react";
import AboutUsTest from "../img/AboutUSTest.png";

const AboutUs = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC]   text-white p-5 m-0 md:mt-4">
        <h1 className="text-2xl screen max-w-screen-xl mx-auto font-bold">
          About US
        </h1>
      </div>
      <div className="min-h-screen max-w-screen-xl mx-auto px-5">
        <p className="max-w-screen-lg my-4">
          Lifeintheuktestweb has been created to help you pass the Life in the
          UK Test. We have the experience of having undertaken and successfully
          passed the UK citizenship test ourselves. Here we have gathered
          numerous questions that cover the contents of the official &apos;Life
          in the United Kingdom: A guide for new residents&apos; 3rd edition
          Handbook, valid for the 2023 Life in the UK Test and that will get you
          ready for the official test.
        </p>
        <p className="my-4 max-w-screen-lg">
          We strive to keep the information presented here free and as
          up-to-date as possible to get you prepared for the official test with
          confidence. We though it was important to offer the option to practice
          for the test by chapter, so you can assess the knowledge you have
          gained at the same time as you read the book. Also, we created tests
          that simulate the real test with questions that cover the entire
          handbook, the same timing as the exam and with the option to mark the
          questions you are unsure of to review or respond them at the end.
        </p>
        <p className="my-4 max-w-screen-lg">
          Many of the questions here have been asked in the official test,
          although the incorrect answers may vary in some cases. We try to
          collect questions that have been recently asked in the official
          citizenship test and we always appreciate candidate&apos;s input. So,
          if you are going to take the exam soon or you have taken it recently
          please email us and share it by contactisng us so future candidates
          get a better experience.
        </p>
        <div className="my-6">
          <img src={AboutUsTest} alt="" className="md:ml-10  m-1" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
