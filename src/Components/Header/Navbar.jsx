import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-some_green px-6 text-royal_blue flex items-center justify-between shadow-xl">
      <div className="flex gap-12 items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/XSNK3kw/icons8-fashion-64-1.png"
            alt="Logo"
            className="h-18 py-2"
          />
          <span className="text-2xl font-bold"><span className="text-[#edf5d1]">Trend</span>Trove</span>
        </div>
        <div className="text-lg font-medium flex gap-4">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline decoration-2 underline-offset-4"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/addProducts"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline decoration-2 underline-offset-4"
                : ""
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to={"/myCart"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline decoration-2 underline-offset-4"
                : ""
            }
          >
            My Cart
          </NavLink>
        </div>
      </div>
      <div className="">
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-2 border-royal_blue bg-royal_blue text-white px-4 py-2 font-bold rounded-md"
              : "border-2 border-royal_blue px-4 py-2 font-bold rounded-md"
          }
        >
          LOGIN
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
