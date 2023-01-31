import React from "react";
import Donate from "../../components/Donate";
import CustomLink from "../../components/CustomLink";

const Chapter2 = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          Chapter 2: What is the UK?
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row 
          mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 mt-5">
          <div>
            <p>Chapter 2 covers the different nations that make up the
              United Kingdom and the terms that are used to describe the islands
              and its people, providing a map showing the location of the
              different nations that comprise the UK. Additionally, this Chapter
              gives an explanation of what ‘Crown Dependencies’ and ‘British
              overseas territories’ are.
            </p>
            <p>The UK is made up of England, Scotland, Wales and
              Northern Ireland. The rest of Ireland is an independent country.
            </p>
            <img className="mx-auto" src="/images/Life-UK-test-419x700.png" />
            <p>The official name of the country is the United Kingdom of
              Great Britain and Northern Ireland. ‘Great Britain’ refers only
              to England, Scotland and Wales, not to Northern Ireland.
              The words ‘Britain’, ‘British Isles’ or ‘British’, however, are
              used here to refer to everyone in the UK.</p>
            <p>There are also several islands which are closely linked with
              the UK but are not part of it: the Channel Islands and the Isle of
              Man. These have their own governments and are called
              ‘Crown dependencies’. There are also several British overseas
              territories in other parts of the world, such as St Helena and the
              Falkland Islands. They are also linked to the UKbut are not part
              of it.</p>
            <p>The UK is governed by the parliament sitting in Westminster.
              Scotland, Wales and Northern Ireland also have parliaments or
              assemblies of their own, with devolved powers in defined areas.
            </p>
            <h3>Check that you understand</h3>
            <p>• The different countries that make up the UK</p>
          </div>
          <div className="flex flex-wrap justify-around">
            <CustomLink to="/test-1-2">Test your knowledge</CustomLink>
            <CustomLink to="/a-long-and-illustrious-history">Go to Chapter 3</CustomLink>
          </div>
        </div>

        <div className="w-full md:w-60 md:pl-5 mt-5">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default Chapter2;
