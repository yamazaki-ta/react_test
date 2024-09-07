import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import IsToggle from "./components/Istoggle";
import InputBox from "./components/InputBox"
function App() {
     const [toggle,setToggle] = useState<boolean>(false)
     const [inputValue , setInputValue] = useState<string>("")
     const [inputValueTitle , setInputValueTitle] = useState<string>("ここがタイトルです")
     const num = [2,4,6,8]
     const items = num.map((item)=> <li>{item*2}</li>)
     const test =[<li>2</li>,<li>4</li>]
     const inputProps = {
       inputValue
      ,setInputValue
     }
     console.log(items);

  return (
     <>
      <ToggleButton toggle={toggle} setToggle={setToggle}/>
      <IsToggle toggle={toggle}/>
      <ul>
          {test}
      </ul>
      <h1>{`ここにinputの内容が入ります。(${inputValueTitle})`}</h1>
      <InputBox inputProps={inputProps} setInputValueTitle={setInputValueTitle}/>

    </>
  );
}

export default App;
