type selectBoxProps ={
    selectLang:{
        selectFavLang: string
        setSelectFavLang :React.Dispatch<React.SetStateAction<string>>
    }
}

const SelectBox = ({selectLang}:selectBoxProps)=> {

    const handleChange:React.ChangeEventHandler<HTMLSelectElement> =(e)=>{
        selectLang.setSelectFavLang(e.target.value)}

    const selectOption = [
        "何か選んでください",
        "react",
        "php",
        "python"
    ]

    return(
        <>
         <label htmlFor="langSelect">言語セレクト</label>
         <select name="langFavoriteSelect" id="langSelect" onChange={handleChange} value={selectLang.selectFavLang}>
         {selectOption.map((item) => (
        <option  value={item}>
          {item}
        </option>
      ))};
         </select>
        </>
    );
}
export default SelectBox