import { useEffect, useState, useRef, useContext } from "react";
import { InputContext } from "./InputContext";

export default function Contact({ fullName, phoneNumber, email, country, city, charSize }) {
  const { setValue1, setValue2, setValue3, setValue4, setValue5 } = useContext(InputContext);

  const [inputs, setInputs] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    country: "",
    city: "",
  });

  const fullNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);

  const storeValue = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
    sessionStorage.setItem(key, value);

    if (key === "fullname") {
      fullName(value);
      setValue1(value);
    } else if (key === "phoneNumber") {
      setValue2(value);
    } else if (key === "email") {
      setValue3(value);
    } else if (key === "country") {
      setValue4(value);
    } else if (key === "city") {
      setValue5(value);
    }
  };

  useEffect(() => {
    const savedValues = {
      fullname: sessionStorage.getItem("fullname") || "",
      phoneNumber: sessionStorage.getItem("phoneNumber") || "",
      email: sessionStorage.getItem("email") || "",
      country: sessionStorage.getItem("country") || "",
      city: sessionStorage.getItem("city") || "",
    };
    setInputs(savedValues);
  }, []);

  return (
    <>
      <h1 className="mt-5 mb-2 font-bold text-[2rem] w-full text-center">
        Contact Info
      </h1>
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <div className="flex flex-col gap-5 w-full justify-center items-center max-w-[500px] p-4 border-[1.5px] border-blue-400 rounded-md shadow-md">
          
          {/* Fullname */}
          <InputField
            id="fullname"
            label="Enter your fullname"
            iconClass="fa-user"
            value={inputs.fullname}
            onChange={(e) => storeValue("fullname", e.target.value)}
            inputRef={fullNameRef}
          />
          {charSize(fullNameRef.current ? fullNameRef.current.value.length : 0, 32)}

          {/* Phone Number */}
          <InputField
            id="phoneNumber"
            label="Enter your phone number"
            iconClass="fa-phone"
            type="tel"
            value={inputs.phoneNumber}
            onChange={(e) => storeValue("phoneNumber", e.target.value)}
            inputRef={phoneNumberRef}
          />
          {charSize(phoneNumberRef.current ? phoneNumberRef.current.value.length : 0, 15)}

          {/* Email */}
          <InputField
            id="email"
            label="Enter your email address"
            iconClass="fa-envelope"
            type="email"
            value={inputs.email}
            onChange={(e) => storeValue("email", e.target.value)}
            inputRef={emailRef}
          />
          {charSize(emailRef.current ? emailRef.current.value.length : 0, 50)}

          {/* Country */}
          <InputField
            id="country"
            label="Enter your country"
            iconClass="fa-globe"
            value={inputs.country}
            onChange={(e) => storeValue("country", e.target.value)}
            inputRef={countryRef}
          />
          {charSize(countryRef.current ? countryRef.current.value.length : 0, 30)}

          {/* City */}
          <InputField
            id="city"
            label="Enter your city"
            iconClass="fa-city"
            value={inputs.city}
            onChange={(e) => storeValue("city", e.target.value)}
            inputRef={cityRef}
          />
          {charSize(cityRef.current ? cityRef.current.value.length : 0, 30)}
          
        </div>
      </div>
    </>
  );
}

// Reusable input component
const InputField = ({
  id,
  label,
  iconClass,
  type = "text",
  value,
  onChange,
  inputRef,
}) => (
  <div className="flex flex-col gap-2 w-full max-w-[400px]">
    <label
      htmlFor={id}
      className="font-bold text-slate-500 flex items-center gap-2"
    >
      <span className={`fa-solid ${iconClass}`}></span>
      <span>{label}</span>
    </label>
    <input
      ref={inputRef}
      required
      type={type}
      placeholder={label}
      id={id}
      value={value}
      onChange={onChange}
      className="border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);
