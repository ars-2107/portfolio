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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        setEmailSubmitted(true);
      } else {
        console.error("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("An error occurred, please try again.")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
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
        <div className="socials flex flex-row gap-4 my-8">
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
          <div className="flex flex-col items-center justify-center h-[250px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
              <circle cx="12" cy="12" r="12" fill="#9333ea"/>
              <path d="M9 16.2l-3.5-3.5a1 1 0 011.4-1.4l2.1 2.1 5.6-5.6a1 1 0 011.4 1.4l-6.6 6.6a1 1 0 01-1.4 0z" fill="#ffffff" transform="translate(1, 0)"/>
            </svg>
            <p className="text-purple-600 text-center text-lg mt-2 neon-text">
              Email sent successfully!
            </p>
            <button
              onClick={() => {setEmailSubmitted(false)}}
              className="mt-6 px-4 py-2 text-purple-600 border-2 border-purple-600 bg-transparent text-sm font-semibold rounded-full 
              transform transition duration-300 ease-in-out hover:bg-purple-800 hover:bg-opacity-20"
            >
              Go Back
            </button>
          </div>
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
              {isLoading ? (
                <span>Sending...</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
