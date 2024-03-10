import Image from "next/image";
import React from "react";
import logo from "@/app/logo.webp";
import Form from "./form";
import Carosel from "./carosel";
const Signup = () => {
  return (
    <div className="flex min-h-screen">
      <div className="fixed top-4 left-4">
        <div className="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <select
            className="w-24 border-0 p-2 rounded-lg bg-white"
            name="language"
            id="language"
          >
            <option value="english">English</option>
            <option value="spanish">Hindi</option>
          </select>
        </div>
      </div>
      <div className="w-1/2 flex-col items-center justify-end">
        <div className="flex-col items-center justify-between p-24 bg-white ">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="w-80 mb-10"
            />
          </div>
          <h2 className="flex text-2xl items-center justify-center text-center mb-4">
            Sign Up
          </h2>
          <Form />
        </div>
        <div>
          <p className="text-xs text-center">
            By signing up, you agree to our{" "}
            <span className="cursor-pointer font-bold">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2  flex-col items-center justify-end">
        <Carosel />
      </div>
    </div>
  );
};

export default Signup;
