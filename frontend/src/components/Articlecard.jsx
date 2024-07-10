import React from "react";
import images from "../constants/images.js";
import {BsCheckLg} from "react-icons/bs"

const Articlecard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]     ${className}`}
    >
      <img
        src={images.articleImage}
        alt="title"
        className="w-full  object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      ></img>
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Future of Work
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img className="h-9 w-9 md:w-10 md:h-10 rounded-full" src={images.avatarImage}></img>
            <div className="flex flex-col ">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">Vaibhav ojha</h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit p-1.5 rounded-full bg-opacity-20"><BsCheckLg className="text-[#36B37E] w-1.5 h-1.5"/></span>
                <span className="italic text-dark-light text-xs md:text-sm">Verified writer</span>
              </div>
            </div>
          </div>
          <span className=" font-bold text-sm text-dark-light italic md:text-base">08 July</span>
        </div>
      </div>
    </div>
  );
};

export default Articlecard;
