import React from "react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between">
      <span className={`font-poppins ${poppins.className} text-2xl text-white font-semibold`}>ars<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">.</span></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
