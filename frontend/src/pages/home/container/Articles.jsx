import React from "react";
import Articlecard from "../../../components/Articlecard";
import { FaArrowRight } from "react-icons/fa";
const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto  px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5  gap-y-5 pb-10 ">
        <Articlecard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <Articlecard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <Articlecard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
      </div>
      <button className="mx-auto  flex  items-center gap-x-2 font- bg-gradient-to-r from-blue-800 to-indigo-900 text-white border-2  px-6 py-3 rounded-lg">
        <span>More Articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
