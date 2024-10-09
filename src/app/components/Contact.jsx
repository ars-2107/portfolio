"use client";
import React, { useState } from "react";
import XIcon from "../../../public/x-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/contact";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m actively exploring new opportunities, and my inbox is always open.
          Whether you have a question, want to discuss a project or just want to say hi,
          I&apos;ll make it a priority to respond promptly! Looking forward to connecting with you.
        </p>
        <div className="socials flex flex-row gap-4 mt-8">
        <Link href="https://www.x.com/in/ars2107_/">
          <div className="border-2 border-transparent hover:border-purple-800 hover:shadow-[0_0_15px_theme('colors.purple.800')] transition-all duration-300 p-2 rounded-md">
            <Image src={XIcon} alt="X Icon" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/ars2107_/">
          <div className="border-2 border-transparent hover:border-purple-800 hover:shadow-[0_0_15px_theme('colors.purple.800')] transition-all duration-300 p-2 rounded-md">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/apoorvsharma2107/">
          <div className="border-2 border-transparent hover:border-purple-800 hover:shadow-[0_0_15px_theme('colors.purple.800')] transition-all duration-300 p-2 rounded-md">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </div>
        </Link>
        <Link href="https://github.com/ars-2107/">
          <div className="border-2 border-transparent hover:border-purple-800 hover:shadow-[0_0_15px_theme('colors.purple.800')] transition-all duration-300 p-2 rounded-md">
            <Image src={GithubIcon} alt="Github Icon" />
          </div>
        </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-center text-lg mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="user@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-40 resize-none no-scrollbar"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-secondary-600 hover:bg-secondary-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
