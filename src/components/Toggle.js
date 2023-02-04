import React, {useState} from "react";


function Toggle() {
  
  const [isOn, setToggle]=useState(false)


  function letsToggle(){
    setToggle(!isOn)//or use cb function inside setToggle which is actually declared best practice in case u need previous value to determine updated value eg. when using count+1
  }

  const newColor= isOn?"red":"white"
  

  return <button style={{background:newColor}}onClick={letsToggle}>{isOn?"ON":"OFF"}</button>;
}

export default Toggle;
