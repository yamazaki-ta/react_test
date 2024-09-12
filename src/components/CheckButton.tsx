import React from 'react';

type checkButtonProps ={
    checked:{
        checkedValue: string[];
        setCheckedValue :React.Dispatch<React.SetStateAction<string[]>>;
    }
}

const checkButton: React.FC<checkButtonProps> =( {checked:{checkedValue ,setCheckedValue} })=>{
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        if (checkedValue.includes(e.target.value)){
            setCheckedValue(checkedValue.filter((value)=>
            (value !== e.target.value)))
        }
        else{
            setCheckedValue([...checkedValue,e.target.value])
        }

    }
    
    const subjects =[
        {id:1,item:"算数"},
        {id:2,item:"国語"},
        {id:3,item:"英語"},
    ]
    return(
        <>
         <h3>学科のチェックボックス</h3>
         {subjects.map((subject)=>(
                      <label key={subject.id}>
                      <input type="checkbox" onChange={handleChange} value={subject.item} checked={checkedValue.includes(subject.item)}/>
                      {subject.item}
                      </label>
         ))}
        </>
    )
}
export default checkButton;