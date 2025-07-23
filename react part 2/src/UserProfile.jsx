// import "./css/style.css";
import style from './css/userprofile.module.css'
function UserProfile(){
    return (
      <div>
        <h1 className={style.heading}>User Profile-Style with CSS module</h1>
        <h2>
          This allows to aply style to specific component without affecting
          others
        </h2>
        <div className={style.container}>
          <div className={style.card}>
            <img
              className="img-style"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHF73TVYIQMsxgpYc-ZCOecIC8YgJvAUieA&s"
              alt="user"
            ></img>
            <div className={style.textWrap}>
              <h4>Sukanya</h4>
              <p>Software Engineer</p>
            </div>
           


           
          </div>
        </div>
      </div>
    );
}
export default UserProfile;