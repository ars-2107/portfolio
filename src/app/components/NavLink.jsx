"use client";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="group relative inline-flex items-center justify-center text-md font-medium text-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:via-secondary-500 group-hover:to-primary-500 opacity-0 group-hover:opacity-100 group-hover:gradient-animation transition-all duration-300" />
        <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-transparent rounded-md group-hover:bg-opacity-0">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default NavLink;
