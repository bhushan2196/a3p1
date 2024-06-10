// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    /*Complete the missing code*/
    let clearId=setInterval(() => {
      setCount((prevCount)=>{
        if(prevCount<=1){
          clearInterval(clearId)
        }
        return prevCount-1
      })


    }, 1000);
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
