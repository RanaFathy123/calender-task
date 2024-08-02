import Calender from "@/components/Calender";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Pick A Date",
  description: "Calender App with List",
};
const SelectedDateList = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Pick Date</h1>
          <Link
            href="/"
            className="bg-slate-900 text-white p-3 rounded-lg font-bold"
          >
            Selected Date List
          </Link>
        </div>
        <div className="p-4">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default SelectedDateList;
