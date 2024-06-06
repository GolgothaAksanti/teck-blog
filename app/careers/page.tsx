"use client";

import Button from "@components/widgets/Button";
import { jobs } from "@lib/constants";
import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

type jobProps = {
  _id: string;
  title: string;
  category: string;
  reportsTo: string;
  employment: string;
  terms: string;
  location: string;
  details: {
    responsibilities: string[];
    requirements: string[];
  };
  salary: string;
  condition: string;
  closingDate: string;
};

function Careers() {
  return (
    <div className="w-full py-10 bg-secondary">
      <div className="lg:w-7/12 w-11/12 space-y-10 mx-auto">
        <div className="space-y-2 lg:space-y-3">
          <p className="text-2xl lg:w-10/12 mx-auto lg:text-5xl text-gray-800 font-semibold">
            Join our team
          </p>

          <p className="lg:text-xl text-sm lg:w-10/12 mx-auto">
            Available Positions
          </p>
        </div>

        <div className="lg:w-10/12 mx-auto space-y-10">
          {jobs.map((job, i) => (
            <Card key={i} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;

const Card = ({
  _id,
  title,
  category,
  reportsTo,
  employment,
  terms,
  location,
  details,
  salary,
  condition,
  closingDate,
}: jobProps) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div className="w-full border-2 lg:border-4 bg-white drop-shadow-secondary lg:drop-shadow-main transition-all duration-300 ease-in-out space-y-2 lg:space-y-5 border-gray-800 p-5">
      <p className="lg:text-xs text-lg font-semibold">{category}</p>
      <p className="text-3xl font-semibold">{title}</p>
      <div className="ml-1 lg:ml-5">
        <p className="lg:text-lg text-sm text-gray-800">
          <span className="font-semibold">Reports to:</span> {reportsTo}
        </p>
        <p className="lg:text-lg text-sm text-gray-800">
          <span className="font-semibold">Employment : </span>
          {employment}
        </p>
        <p className="text-sm lg:text-lg text-gray-800">
          <span className="font-semibold">Employment terms :</span> {terms}
        </p>
        <p className="text-sm lg:text-lg text-gray-800">
          <span className="font-semibold">Salary :</span> {salary}
        </p>
        <p className="text-sm lg:text-lg text-gray-800">
          <span className="font-semibold">To Apply: </span>Send resume
          <span className="text-blue-700"> info@yookatale.com</span>
        </p>
        <p className="text-sm lg:text-lg text-gray-800">
          <span className="font-semibold">Closing Date</span> {closingDate}
        </p>
      </div>

      <Button
        disabled={true}
        className="flex items-center gap-1 text-sm lg:text-base border-[1.5px] bg-gray-300 border-black px-2 py-1"
      >
        <MdOutlineLocationOn className="lg:text-xl text-sm" />
        <span>{location}</span>
      </Button>

      <Button
        onClick={() => setOpenDetails(!openDetails)}
        className="text-sm font-semibold border-[1.5px] focus:ring-0 bg-gray-300 hover:bg-gray-100 border-black px-2 drop-shadow-sml lg:drop-shadow-secondary transition-all duration-150 ease-in-out py-1 "
      >
        <span>{openDetails ? "Close Details" : "View Details"}</span>
      </Button>

      <div
        className={` transition-all lg:border-l lg:ml-10 border-gray-800 duration-500 ease-in-out  lg:w-10/12 lg:p-2 py-2 lg:pl-5 rounded ${
          openDetails ? "block " : "hidden "
        }`}
      >
        <p className="font-semibold mb-4">Key Responsabilities</p>
        <ul className="list-disc list-inside">
          {details.responsibilities.map((item, i) => (
            <li className="lg:ml-5 text-xs lg:text-sm" key={i}>
              {item}
            </li>
          ))}
        </ul>

        <p className="font-semibold mb-4 mt-10">Key Requirements</p>
        <ul className="list-disc list-inside">
          {details.requirements.map((item, i) => (
            <li className=" lg:ml-5 text-xs lg:text-sm" key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
