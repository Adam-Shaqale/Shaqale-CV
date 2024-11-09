import { useState, useRef } from "react";
import Resume from "./Resume-Components/Resume";
import { InputContext } from "./Resume-Components/InputContext";
import "./App.css";

function App() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
  return (
    <InputContext.Provider value={{
        value1, setValue1,
        value2, setValue2,
        value3, setValue3,
        value4, setValue4,
        value5, setValue5,
        }}>
      <Resume/> 
    </InputContext.Provider>
  );
};
  
export default App;
