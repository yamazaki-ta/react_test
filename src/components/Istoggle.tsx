type toggle={
    toggle :boolean;
}

const IsToggle =({toggle}:toggle)=>{
    return (
    <>
        {toggle && <p>ログイン中です</p>}
        {toggle || <p>ログアウトしております。</p>}
    </>
    )
};
export default IsToggle;