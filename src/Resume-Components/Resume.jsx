import { useEffect, useState } from "react";
import Contact from "./Contact";
import Objective from "./Objective";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Marital from "./Marital";
import Certifications from "./Certifications";
import Template from "./Template";

export default function Resume() {
  // function charSize(size, allowedSize) {
  //   if (size > allowedSize) {
  //     return (
  //       <p className="text-red-500">Warning: Size exceeds the allowed limit!</p>
  //     );
  //   }

  //   return <p>Character size is within the allowed limit.</p>;
  // }

  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const functionBtns = document.querySelectorAll(".function-btn");
    functionBtns[0].classList.add("activeBtn");

    function activeClass(event) {
      if (functionBtns) {
        functionBtns.forEach((btn) => btn.classList.remove("activeBtn"));
        event.currentTarget.classList.add("activeBtn");
      }

      switch (true) {
        case event.currentTarget.classList.contains("edit"):
          setIsPreview(false);
          break;
        case event.currentTarget.classList.contains("preview"):
          setIsPreview(true);
          break;
      }
    }
    functionBtns.forEach((btn) => btn.addEventListener("click", activeClass));

    return () =>
      functionBtns.forEach((btn) =>
        btn.removeEventListener("click", activeClass)
      );
  }, []);

  const [value, setValue] = useState('');

    const handleValue = (newVaue) => {
      setValue(newVaue);
    };
    console.log(value)


  return (
    <div className=" w-full flex flex-col justify-center items-center p-5">
      <h1 id="hide" className="my-5 font-bold text-[2rem] w-full text-center">
        Create Your CV
      </h1>
      <div id="hide" className="flex gap-10  my-4">
        <button
          id="function-btn"
          className="edit function-btn border-[1.5px] border-slate-300 rounded-md bg-white text-black hover:bg-slate-800 hover:text-white px-4 py-2 flex gap-2 justify-center items-center"
        >
          <span className="fa-solid fa-pen-to-square"></span>
          <span className=" font-semibold rounded-md">Edit CV</span>
        </button>
        <button
          id="function-btn"
          className="preview function-btn border-[1.5px] border-slate-300 rounded-md bg-white text-black hover:bg-slate-800 hover:text-white px-4 py-2 flex gap-2 justify-center items-center"
        >
          <span className="fa-regular fa-eye"></span>
          <span className="font-semibold rounded-md">Preview CV</span>
        </button>
      </div>
      {isPreview ? (
          <Template value={value}/>
      ) : (
        <>
          {/* Input Form */}
          <form
            action=""
            className="max-w-[600px] w-full flex flex-col justify-center items-center gap-5 shadow-md px-2 mt-5 py-5 border-2 border-blue-500 rounded-md"
          >
            <Contact change={handleValue}/>
            <Objective/>
            <Skills/>
            <Education/>
            <Work/>
            <Marital/>
            <Certifications/>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              Generate CV
            </button>
          </form>
        </>
      )}
    </div>
  );
}
