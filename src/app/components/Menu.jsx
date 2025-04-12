import React from "react";
import NavLink from "./NavLink";

const Menu = ({ links }) => {
  return (
    <div className="w-full bg-transparent">
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index} className="w-full text-center">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
