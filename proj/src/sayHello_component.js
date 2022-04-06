import React from 'react';

function Hello() {

    var sayHello = () => {console.log("You're a silly head")}
  
    return (
      <div>
        <button onClick = {sayHello}>Check your console</button>  
       </div>
    );
  }
  
  // on this page we are creating a component which is inserted (rendered) in the dom of the index.html file
  export default Hello;
  