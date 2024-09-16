import { calculateInvestmentResults } from "../util/investment";
export default function Results({userInput}){
    const result=calculateInvestmentResults(userInput);
    console.log(result);
}