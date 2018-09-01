import React from 'react';

const userInput = (props) => {
   return (
    <div className="UserInput">
      <p>Input your name </p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>   
   );
}

export default userInput;