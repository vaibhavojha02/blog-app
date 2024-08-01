import React from "react";
import { Link } from "react-router-dom";

const SuggestedArticles = ({ classname, header, posts = [], tags }) => {
  return (
    <div className=
      {`shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-full rounded-lg p-4 ${classname}`}
    >
      <h2 className="font-roboto font-medium  px-1 py-2 md:text-xl">{header}</h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts?.map((items) => {
          return (
            <div
              key={items._id}
              className="flex space-x-3 flex-nowrap items-center"
            >
              <img
                src={items.image}
                alt="laptop"
                className="aspect-square object-cover rounded-lg w-1/5 "
              ></img>
              <div className="text-sm font-roboto text-dark-hard font-medium">
                <h2 className="md:text-base text-sm font-roboto text-dark-hard     font-medium">{items.title}</h2>
                <span>
                  {new Date(items.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags?.map((items, index) => {
          return (
            <Link
              key={index}
              to="/"
              className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm "
            >
              {items}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedArticles;
