// UserInput.jsx
// import React, { forwardRef } from "react";

// const UserInput = forwardRef((props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }); this was older method

 const UserInput = (props) => {
  return (
    <div>
      <input type="text"  ref={props.ref}/>
    </div>
  )
};
export default UserInput;
