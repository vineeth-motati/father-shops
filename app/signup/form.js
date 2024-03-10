"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Form = () => {
  const [phone, setPhone] = useState("");

  return (
    <form className="flex flex-col items-center justify-between space-y-5 px-24">
      <input
        type="text"
        placeholder="Full Name"
        className="border-0 p-2 rounded-lg w-full bg-gray-100"
      />
      <PhoneInput
        defaultCountry="in"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        className="border-0 p-1 rounded-lg w-full bg-gray-100"
      />
      <input
        type="email"
        placeholder="Email"
        className="border-0 p-2 rounded-lg w-full bg-gray-100"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-0 p-2 rounded-lg w-full bg-gray-100"
      />
      <button
        type="submit"
        className="bg-black text-white rounded-lg p-2 w-full"
      >
        Create Account
      </button>
      <p>
        Already have an account{" "}
        <span className="cursor-pointer font-bold">Login</span>
      </p>
    </form>
  );
};

export default Form;
