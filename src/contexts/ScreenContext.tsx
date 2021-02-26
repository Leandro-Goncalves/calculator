import { createContext, ReactNode, useState } from "react";

interface ScreenContextData {
  result: string;
  addItemInResult: (
  item : {
    type: string,
    payload: string
  }) => void;
  isOn: boolean;
  turnOn: () => void;
  turnOff: () => void;
  accountHistory: string;
}

interface ScreenProviderProps {
  children: ReactNode;
}

export const ScreenContext = createContext({} as ScreenContextData);

export function ScreenProvider({ children }: ScreenProviderProps) {

  const [accountHistory , setAccountHistory] = useState("");
  const [result, setResult] = useState("");
  const [isOn, setIsOn] = useState(true);

  const [isFinished, setIsFinished] = useState(false);

  function evalAndString(string: string){
    return String(eval(string));
  }

  function addItemInResult(item : {
    type: string,
    payload: string
  }) {
    if(isOn){ //if is on
      if(isFinished){
        setAccountHistory("");
        setResult("");
        setIsFinished(false)
      }
      if(item.type === "number"){ //number

        const newValue  = isFinished ? item.payload : result + item.payload;

        if(parseInt(newValue)){
          setResult(newValue);
        }
  
      }
      if(item.type === "action" && !isFinished && parseInt(result)){ //action

        switch(item.payload){
          case 'clean':
            setAccountHistory("");
            setResult("");
            break;
          case 'sum':
            setAccountHistory(accountHistory + result + "+");
            setResult("");
            break;
          case 'less':
            setAccountHistory(accountHistory + result + "-");
            setResult("");
            break;
          case 'divide':
            setAccountHistory(accountHistory + result + "÷");
            setResult("");
            break;
          case 'squareRoot':
            setAccountHistory("√("+ accountHistory + result +")");
            const resultEditedSquare = (accountHistory + result).replace("÷", "/").replace("x", "*");
            setResult(String(Math.sqrt(eval(resultEditedSquare))));
            setIsFinished(true)
            break;
          case 'times':
            setAccountHistory(accountHistory + result + "x");
            setResult("");
            break;
          case 'percent':
            if(accountHistory){
              const resultEditedPercent = (accountHistory).replace("÷", "/").replace("x", "*");
              const resultEditedEval = parseFloat(resultEditedPercent);     
              setAccountHistory(String(resultEditedPercent + (parseFloat(result) / 100) * resultEditedEval) + "=")
              setResult(evalAndString(String(resultEditedPercent + (parseFloat(result) / 100) * resultEditedEval) ));
            }else{
              setResult(evalAndString(result + " / 100"));
            }
            setIsFinished(true)
            break;
          case 'timesMinusOne':
            setResult(String(parseFloat(result) * -1));
            break;
          case 'equal':
            setAccountHistory(accountHistory + result + "=");
            const resultEdited = (accountHistory + result).replace("÷", "/").replace("x", "*");
            setResult(evalAndString(resultEdited));
            setIsFinished(true)
            break;
        }
      }
    }
  }

  function turnOn() {
    setIsOn(true)
  }

  function turnOff() {
    setIsOn(false);
    setAccountHistory("")
    setResult("")
  }

  return(
    <ScreenContext.Provider value={{
      result,
      accountHistory,
      addItemInResult,
      isOn,
      turnOn,
      turnOff,
    }}>
      {children}
    </ScreenContext.Provider>
  );
}