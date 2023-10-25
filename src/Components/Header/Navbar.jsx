import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdCloseFullscreen } from "react-icons/md";
import { useAuthContext } from "../../AuthProvider";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Add Product", link: "/addProducts" },
    { name: "My Cart", link: "/myCart" },
  ];

  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuthContext();

  const LogOutHandler = () => {
    logOut()
      .then(() => swal("Logout Successfull!", "", "success"))
      .catch((error) => console.log.error(error));
  };

  return (
    <>
      <div className="bg-some_green px-4 lg:px-6 py-1 lg:py-auto text-royal_blue flex items-center justify-between shadow-xl relative">
        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-4">
            <span
              onClick={() => {
                setOpen(!open);
              }}
              className="cursor-pointer block lg:hidden"
            >
              {open ? <MdCloseFullscreen /> : <FiMenu />}
            </span>
            <div className="flex items-center gap-2 lg:gap-4">
              <img
                src="https://i.ibb.co/XSNK3kw/icons8-fashion-64-1.png"
                alt="Logo"
                className="h-10 lg:h-16 py-2"
              />
              <span className="text-lg lg:text-2xl font-bold">
                <span className="text-[#edf5d1]">Trend</span>Trove
              </span>
            </div>
          </div>
          <div
            className={`text-lg font-medium ${
              open ? "" : "hidden lg:flex"
            } flex flex-col lg:flex-row gap-4 absolute lg:relative top-11 left-0 lg:top-auto lg:left-auto pl-4 lg:pl-0 w-full lg:w-fit bg-some_green`}
          >
            {links.map(({ name, link }) => (
              <NavLink
                to={link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="">
          {user ? (
            <div className="flex items-center gap-4">
              <button onClick={LogOutHandler} className="btn btn-sm btn-warning">
                Logout
              </button>
              <span>{user.email.slice(0, user.email.indexOf("@"))}</span>
              {user.photoURL ? (
                <div className="h-8 rounded-full overflow-hidden">
                  <img src={user.photoURL} alt="" className="h-full" />
                </div>
              ) : (
                <div className="h-8 rounded-full overflow-hidden">
                  <img src="" alt="" className="h-full" />
                </div>
              )}
            </div>
          ) : (
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
          )}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Navbar;
