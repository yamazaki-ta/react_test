import React from "react";

type InputBoxProps= {
    inputProps:{
        inputValue:string,
        setInputValue:React.Dispatch<React.SetStateAction<string>>
    }
    setInputValueTitle:React.Dispatch<React.SetStateAction<string|undefined>>
}

const InputBox = ({inputProps, setInputValueTitle}:InputBoxProps)=>{
    const handleClick =()=>{
        if(setInputValueTitle){
        setInputValueTitle(inputProps.inputValue);}}
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputProps.setInputValue(e.target.value);

    }
    return(
    <>
     <input type="text" defaultValue="" onChange={handleChange}/>
     <input type="button" value="入力" onClick={handleClick}/>
    </>
    );
}
export default InputBox