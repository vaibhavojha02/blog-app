import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const itemsList = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["about us", "contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];
const Navitems = ({ item,index }) => 
{
 
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDownHandler = () => {
    setDropDown((currState) => {
      return !currState;
    });
  };
  return (
    <li key= {index} className="relative group">
      {item.type === "link" ? (
        <>
          <a key={index}  href="" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] group-hover:opacity-100 opacity-0">/</span>
        </>
      ) : (
        <>
          <button
            onClick={toggleDropDownHandler}
            className="px-4 py-2 flex justify-center items-center gap-x-1 transition-all duration-1000 group"
          >
            {item.name} <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="  flex flex-col  shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page,index) => (
                <>
                <a key={index} href="/" className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                  {page}
                </a>
                </>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};
const Header = () => {
  const [navIsvisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };
  return (
    <section className="sticky top-0 right-0 left-0 z-[50] bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div className="text-[#183B56]  text-xl font-bold">
          blog<span className="h-[28px] w-[90px] text-[#1565D8]">S</span>pot
        </div>
        <div className="lg:hidden z-[50]">
          {navIsvisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsvisible ? "right-0" : "-right-full"
          } transition-all duartion-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {itemsList.map((item, index) => (
              <Navitems item={item} key={index} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
