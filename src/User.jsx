function User({displayName, name, getUser}){
    // const displayName = (name) => {
    //   alert(name);
    // }This code will repeat as many times as User is called in app.jsx hence it can be written in App.jsx to prevent this alert message multiple times
    // const name="Anila";
    return (
      <div>
       
        {/* <button onClick={displayName}>Display Name</button> */}
        <button onClick={()=>displayName(name)}>Display Name</button>
        <button onClick={()=>getUser(getUser)}>Get user</button>
      </div>
    );
}
export default User;
