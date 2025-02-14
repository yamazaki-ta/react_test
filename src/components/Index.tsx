import { useState } from "react";
import ToggleButton from "./ToggleButton";
import IsToggle from "./Istoggle";
import InputBox from "./InputBox"
import SelectBox from "./SelectBox";
import RadioButton from "./RadioButton";
import CheckButton from "./CheckButton";
import UseStateComp from "./UseStateComp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Index =()=> {
     const [toggle,setToggle] = useState<boolean>(false)
     const [inputValue , setInputValue] = useState<string>("")
     const [inputValueTitle , setInputValueTitle] = useState<string>()
     const [selectFavLang , setSelectFavLang] = useState<string>("")
     const [radioValue,setRadioValue] =useState<string>("ラーメン")
     const [checkedValue,setCheckedValue]= useState<string[]>([])
     const num = [2,4,6,8]
     const items = num.map((item)=> <li>{item*2}</li>)
     const inputProps = {
       inputValue
      ,setInputValue
     }
     const selectLang = {
      selectFavLang,
      setSelectFavLang
     }
     const radioInput ={
      radioValue,
      setRadioValue
     }
     const checked ={
      checkedValue,
      setCheckedValue
     }
  return (
     <>
      {/* <Router>
      <Routes> */}
        <ToggleButton toggle={toggle} setToggle={setToggle}/>
        <IsToggle toggle={toggle}/>
        <ul>
            {items}
        </ul>
        <h1>{`ここにinputの内容が入ります。(${inputValueTitle})`}</h1>
        <InputBox inputProps={inputProps} setInputValueTitle={setInputValueTitle}/>
        <h2>{`ここにselectの内容が入ります。(${selectFavLang})`}</h2>
        <SelectBox selectLang={selectLang}/>
        <h2>{`ここにラジオボタンの内容を入れます。(${radioValue})`}</h2>
        <RadioButton radioInput={radioInput}/>
        <h2>{`ここにチェックボタンの内容を入れます。(${[...checkedValue]})`}</h2>
        <CheckButton checked={checked}/>
        <UseStateComp />
        <UseStateComp />
        {/* <UseStateComp UseStateCompObj={useStateCompObj}/> */}
        {/* <UseStateComp UseStateCompObj={useStateCompObj}/> */}
      {/* </Routes>
      </Router> */}
    </>
  );
}

export default Index;
