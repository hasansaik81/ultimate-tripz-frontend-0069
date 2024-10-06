"use client";

import Link from "next/link";
import { links } from "./CustomNavbar";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="dark:bg-dark-100 text-white py-12 mt-20">
      <div className="lg:px-40 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:place-items-center ">
        {/* Section 1: About Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400">Ultimate Tripz</h2>
          <p className="text-sm text-gray-300">
            Welcome to Ultimate Tripz! We are a community of passionate
            travelers sharing tips, guides, and personal stories to help you
            plan unforgettable journeys. Discover new destinations, and connect
            with fellow explorers!
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-yellow-400">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {links?.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Section 3: Stay Connected */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-yellow-400">Stay Connected</h2>
          <p className="text-sm text-gray-300">
            Follow us on social media and never miss an update!
          </p>
          <div className="flex space-x-4 text-3xl">
            <LiaFacebookSquare />
            <IoLogoInstagram />
            <CiLinkedin />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 Ultimate Tripz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
