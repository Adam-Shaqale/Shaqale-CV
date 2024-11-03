import { useEffect } from "react";
import { useState } from "react";

export default function Contact({change}) {
  const [inputValue, setInputValue] = useState('');
  const storeValue = (e) => {
    setInputValue(e.target.value);
    sessionStorage.setItem("fullname", e.target.value);
    change(e.target.value);
  };

  useEffect(() => {
    const specificValue = sessionStorage.getItem("fullname");
    if(specificValue) {
      document.getElementById("full-name").value = specificValue;
    }
  })
  return (
    <>
      {/* Section 1 */}
      <h1 className="mt-5 font-bold text-[2rem] w-full text-center">
        Contact Info
      </h1>
      {/* Contact Information */}
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <div className="flex flex-col gap-5 w-full justify-center items-center max-w-[500px] p-4 border-[1.5px] border-blue-400 rounded-md shadow-md">
          {/* Fullname */}
          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <label
              htmlFor="full-name"
              className="font-bold text-slate-500 flex items-center gap-2"
            >
              <span className="fa-solid fa-user"></span>
              <span>Enter your fullname</span>
            </label>
            <input
              onChange={storeValue}
              value={inputValue}
              required
              type="text"
              placeholder="Enter your fullname"
              id="full-name"
              className=" border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Phone Number */}
          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <label
              htmlFor="phone-number"
              className="font-bold text-slate-500 flex items-center gap-2"
            >
              <span className="fa-solid fa-phone"></span>
              <span>Enter your phone number</span>
            </label>
            <input
              required
              type="tel"
              placeholder="Enter Your phone number"
              id="phone-number"
              className=" border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Email address */}
          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <label
              htmlFor="email"
              className="font-bold text-slate-500 flex items-center gap-2"
            >
              <span className="fa-solid fa-envelope"></span>
              <span>Enter your email address</span>
            </label>
            <input
              required
              type="email"
              placeholder="Enter Your email"
              id="email"
              className=" border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Country */}
          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <label
              htmlFor="country"
              className="font-bold text-slate-500 flex items-center gap-2"
            >
              <span className="fa-solid fa-globe"></span>
              <span>Enter your country</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your country"
              id="country"
              className=" border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* City */}
          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <label
              htmlFor="city"
              className="font-bold text-slate-500 flex items-center gap-2"
            >
              <span className="fa-solid fa-city"></span>
              <span>Enter your city</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your city"
              id="city"
              className=" border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
