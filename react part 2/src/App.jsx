import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'
import './css/style.css'
import { useRef } from 'react'
import User from './User'
import UserInput from './Userinput'
import {useFormStatus} from 'react-dom'


function App() {
  const [cardstyle, setCardstyle] = useState({
    border: "1px solid green",
    width: "200px",
    margin: "20px",
  });
  const [grid, setgrid] = useState(true);
  const updateTheme = (bgColor, textColor) => {
    setCardstyle({
      ...cardstyle,
      backgroundColor: bgColor,
      color: textColor,
    });
  };

  const inputRef = useRef(null);
  const inputhandler = () => {
    inputRef.current.focus(); // Focus the input
    inputRef.current.style.color = "red"; // Change text color
    inputRef.current.placeholder = "Enter password"; // Change placeholder
  };
  // Uncontrollable component using query selector and useRef.
  const handleform = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user);
  };

  const userref = useRef();
  const passwordref = useRef();
  const formRef = (event) => {
    event.preventDefault();
    // const user= document.querySelector("#user").value;
    // const password= document.querySelector("#password").value;
    const user = userref.current.value;
    const password = passwordref.current.value;
    console.log(user, password);
  };
  const displayName = (name) => {
    alert("Display name function");
    alert(name);
  }
  const getUser=()=>{
    alert("get user function called");
  }
 const inputref= useRef(null);
  const updateInput= ()=>{
    inputref.current.value=1000;
    inputref.current.focus();
    inputref.current.style.color="red";
  }

  const handleSubmit=async ()=>{
    // To delay submission
   await  new Promise(res=>setTimeout(res, 2000));
    console.log("submit")
  }
// useform status
  function CustomerForm() {
    const {pending}= useFormStatus();
    console.log(pending);
    return (

      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="text" placeholder="Enter Password" />
        <br />
        <br />
        <button type="submit" disabled={pending}>{pending ?'Submitting':'Submit'}</button>
      </div>
    );
  }
  // UseState to show pending state
  // const [pending, setPending]= useState(false);
  // const handleButton=async()=>{
  //   setPending (true);
  //  await new Promise(res=>setTimeout(res, 2000))
  //  setPending(false);
  // }
  const [pending, startTransition]= useTransition();
  const handleButton=()=>{
    startTransition(async()=>{
      await new Promise(res=>setTimeout(res, 2000));
// by default it is false and turns true after 2s
    })
  }
  // derived state
  const [user, setUser]=useState('')
  const [users, setUsers]=useState([]);
  const handleaddusers=()=>{
    setUsers([...users, user])
  }
  console.log(users);
  
  return (
    <>
      <h1 className="heading">External style with css</h1>
      <h1>Style with CSS Module in React js</h1>
      <div className="container">
        <div className="user-card">
          <img
            className="img-style"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
            alt="user"
          ></img>
          <div className="text-wrap">
            <h4>Sukanya</h4>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="user-card">
          <img
            className="img-style"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
            alt="user"
          ></img>
          <div className="text-wrap">
            <h4>Yashika</h4>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="user-card">
          <img
            className="img-style"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
            alt="user"
          ></img>
          <div className="text-wrap">
            <h4>Ajay</h4>
            <p>Testing Engineer</p>
          </div>
        </div>
        <div className="user-card">
          <img
            className="img-style"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
            alt="user"
          ></img>
          <div className="text-wrap">
            <h4>Amar</h4>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="user-card">
          <img
            className="img-style"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
            alt="user"
          ></img>
          <div className="text-wrap">
            <h4>Simran</h4>
            <p>SBackend Developer</p>
          </div>
        </div>

        <div className="user-card">
          <img
            className="img-style"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
            alt="user"
          ></img>
          <div className="text-wrap">
            <h4>Siddharth</h4>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>

      <UserProfile />
      <div>
        <h2>Dynamic and Conditional Style with css</h2>
        <p>
          Dynamic style appears when there is a change of an event like click of
          button.{" "}
        </p>
        <button onClick={() => setgrid(!grid)}>Toggle</button>
        <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
          <div className="user-card " style={cardstyle}>
            <img
              className="img-style"
              src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
              alt="user"
            ></img>
            <div className="text-wrap">
              <h4>Sukanya</h4>
              <p>Software Engineer</p>
            </div>
            <button onClick={() => updateTheme("pink", "green")}>
              Pink theme
            </button>
            <button onClick={() => updateTheme("white", "black")}>
              Default theme
            </button>
          </div>
          <div className="user-card " style={cardstyle}>
            <img
              className="img-style"
              src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
              alt="user"
            ></img>
            <div className="text-wrap">
              <h4>Sukanya</h4>
              <p>Software Engineer</p>
            </div>
            <button onClick={() => updateTheme("pink", "green")}>
              Pink theme
            </button>
            <button onClick={() => updateTheme("white", "black")}>
              Default theme
            </button>
          </div>
          <div className="user-card " style={cardstyle}>
            <img
              className="img-style"
              src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
              alt="user"
            ></img>
            <div className="text-wrap">
              <h4>Sukanya</h4>
              <p>Software Engineer</p>
            </div>
            <button onClick={() => updateTheme("pink", "green")}>
              Pink theme
            </button>
            <button onClick={() => updateTheme("white", "black")}>
              Default theme
            </button>
          </div>
          <div className="user-card " style={cardstyle}>
            <img
              className="img-style"
              src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
              alt="user"
            ></img>
            <div className="text-wrap">
              <h4>Sukanya</h4>
              <p>Software Engineer</p>
            </div>
            <button onClick={() => updateTheme("pink", "green")}>
              Pink theme
            </button>
            <button onClick={() => updateTheme("white", "black")}>
              Default theme
            </button>
          </div>
          <div className="user-card " style={cardstyle}>
            <img
              className="img-style"
              src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740"
              alt="user"
            ></img>
            <div className="text-wrap">
              <h4>Sukanya</h4>
              <p>Software Engineer</p>
            </div>
            <button onClick={() => updateTheme("pink", "green")}>
              Pink theme
            </button>
            <button onClick={() => updateTheme("white", "black")}>
              Default theme
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2>UseRef</h2>
        <p style={{ textAlign: "left" }}>
          UseRef is used to control input field and provides a way to interact
          directly with the DOM and store mutable values that persist across
          component re-renders without triggering additional renders. Unlike
          useState, which manages state and re-renders the component when
          updated, useRef offers a way to manage values imperatively and
          efficiently.
        </p>
        <input ref={inputRef} type="text" placeholder="enter name" />
        <button onClick={inputhandler}>Focus on input field</button>
      </div>

      <div>
        <h2> Uncontrolled Components</h2>
        <p style={{ justifyItems: "left", textAlign: "left" }}>
          {" "}
          The value in controlled components is controlled by using state values
          whereas state has no role in uncontrolled components i.e. we can
          directly get input field value using dom.
          <li>Make uncontrolled component using query selector</li>{" "}
        </p>
        <form action="" method="post" onSubmit={handleform}>
          <input type="text" id="user" placeholder="Enter your name" />
          <br></br>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <br></br>
          <button>Submit</button>
        </form>
        <hr />
        <h2>Uncontrolled component with useRef</h2>
        <form action="" method="post" onSubmit={formRef}>
          <input
            type="text"
            ref={userref}
            id="userref"
            placeholder="Enter your name"
          />
          <br></br>
          <input
            type="password"
            ref={passwordref}
            id="passwordref"
            placeholder="Enter your password"
          />
          <br></br>
          <button>Submit</button>
        </form>

        <h2>Pass Function in Component as props</h2>
        <h4>Call Parent Component Function from child component</h4>
        <ul>
          <li>Make parent and child component</li>
          <li>
            Call function from parent to child component. There is no passing of
            an event.
          </li>
        </ul>
        <User displayName={displayName} name="sam" getUser={getUser} />
        <User displayName={displayName} name="Asad" getUser={getUser} />
        <User displayName={displayName} name="Sara" getUser={getUser} />
        <User displayName={displayName} name="Dheeraj" getUser={getUser} />
        <User displayName={displayName} name="Myra" getUser={getUser} />
      </div>

      <div>
        <h3>Learning UseForward ref which has been removed in React 19</h3>
        <UserInput ref={inputref} />
        <button onClick={updateInput}>Update input field</button>
      </div>
      <div>
        <h2>UseForm status hook</h2>
        <form action={handleSubmit}>
          <CustomerForm />
        </form>
      </div>

      <div>
        <h2>Use Transition Hook</h2>
        <p>
          <ul>
            <li>
              It can be used without using a form to show the loader
              state/pending state.
            </li>
            <li>
              Earlier async function was not supported in useTransition but
              react 19 supports it in useTransition.
            </li>
          </ul>
        </p>
        {pending ? (
          <img
            style={{ width: "100px" }}
            src="https://assets-v2.lottiefiles.com/a/91ccdf52-1150-11ee-b7cc-8f23ce57c5d5/3b61VveWDX.gif"
            alt="loading"
          />
        ) : null}
        <button disabled={pending} onClick={handleButton}>
          Click
        </button>
      </div>

      <div>
        <h2>Pure Functions</h2>
        <p>
          <ul>
            <li>
              A Pure Function is a function (a block of code) that always
              returns the same result if the same arguments are passed.
            </li>
            <li>
              The function does not:
              <ul>
                <li>Modify variables outside its scope.</li>
                <li>
                  Interact with external systems like APIs, databases, or DOM
                  manipulation and do not Change mutable data.
                </li>
              </ul>
            </li>
            <li>
              ReactJS Pure Components are similar to regular class components but with a key optimization. They skip re-renders when the propsand state remain the same.{" "}
            </li>
          </ul>
        </p>
        <h3>Keeping components pure</h3>
        <Cup guest={1}/>
        <Cup guest={3}/>
        <Cup guest={5}/>
      </div>
      <div><h2>Derived State in react js</h2><p>State that is calculated or derived from other state values or props within your component. Derived state can be a variable. No need to extra state only variables or constants are enough. Use of variables is more for faster rendering</p>
      <input type='text' onClick={(event)=>setUsers(event.target.value)} placeholder='add new user'/>
      <button onClick={handleaddusers} >Add user</button>
      </div>

    </>
  );
}
const Cup = ({ guest }) => {
  let count = guest;
  return (
    <h3>
      We have {count} guest and we have to make {count} cup of tea
    </h3>
  );
}
export default App
