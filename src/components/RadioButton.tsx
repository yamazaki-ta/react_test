
type radioInputProps = {
    radioInput:{
    radioValue:string,
    setRadioValue:React.Dispatch<React.SetStateAction<string>>}
}


const RadioButton = ({radioInput: { radioValue, setRadioValue }}:radioInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setRadioValue(e.target.value);
    }
    const radioArray: Array<string> =["寿司","焼肉","ラーメン"]

    return(
    <div>
     {radioArray.map((item)=>
          <label>
          <input type="radio" value={item} name="food" onChange={handleChange} checked={radioValue === item} />
          {item}
       </label>
    )}
    </div>
    )
};
export default RadioButton;