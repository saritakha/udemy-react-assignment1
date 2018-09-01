import React from 'react';

const userOutput = (props) => {
    return  (
    <div className="UserOutput">
       <p>Hello, I am {props.name}. </p>  
       <p>I am studying {props.subject}.</p> 
    </div>
);      
}; 

export default userOutput;