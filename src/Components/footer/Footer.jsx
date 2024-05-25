import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="h-[92vh] flex items-center bg-slate-900/70 rounded-t-3xl">
      <div className=" p-3 pt-5 w-full space-y-9 lg:m-auto lg:space-y-2 lg:w-4/5">
        {/* About */}
        <div className="text-lg lg:text-center p-2">
          <h5 className="text-2xl font-bold underline underline-offset-4 inline">
            About
          </h5>
          <span className="font-bold"> - : </span>
          <p className="inline">
            ZED-KART, a brainchild of Kundan, aspiring to evolve into a fully
            functional E-commerce platform with the grace of destiny.
          </p>
        </div>

        {/* Contact */}
        <div className=" lg:flex lg:justify-around lg:py-10">
          <div className=" flex flex-col justify-center">
            <h5 className="text-center mb-2 font-bold text-xl underline underline-offset-4 lg:mb-5">
              Contact Information
            </h5>
            <div className="text-lg px-2 ">
              <span className="flex items-center gap-2 ">
                <span>
                  <MdEmail />
                </span>{" "}
                <span>-: kundankumarratu@gmail.com</span>
              </span>
              <span className="flex items-center gap-2">
                <span>
                  <MdPhone />
                </span>
                <span>-: +91 7634881182</span>
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-3 p-3 py-8 lg:p-0">
            <span className="text-8xl lg:text-9xl">
              <RiShoppingCartFill />
            </span>
            <p className="text-3xl font-extrabold">ZED-KART</p>
          </div>
        </div>

        {/* Social media links */}
        <div className=" text-center text-3xl ">
          <div className="inline-flex gap-5 outline outline-2 py-3 px-6 rounded-xl">
            <a
              href="https://www.instagram.com/kun_dan.kr"
              className="hover:text-[#b359e0]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/kundan-kumar-ratu"
              className="hover:text-[#b359e0]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/07kundan/E-Commerce"
              className="hover:text-[#b359e0]"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/kundan_X_07"
              className=" hover:text-[#b359e0]"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* bottom text */}
        <div className="text-center space-y-10 pt-4">
          <span className="inline-flex items-center gap-1">
            Developed with{" "}
            <span className="text-red-500 text-xl">
              <FaHeart />
            </span>
            by Kundan
          </span>
          <p className="text-sm">All &copy; reserved to @none</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
