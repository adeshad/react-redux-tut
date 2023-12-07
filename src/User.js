import React from 'react'
const User=(props)=>{
    console.log(props.data);
   
    return (
        <div>
           <h1> {props.data.name} hello bro  </h1>
        </div>
       
    );
}
export default User;