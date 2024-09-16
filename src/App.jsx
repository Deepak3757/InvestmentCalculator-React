import Results from "./components/Results";
import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, 
        // '+' will convert newValue to a Number(otherwise it is a string)
      };
    });
  }
  
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Results userInput={userInput}/>
    </>
  )
}

export default App
