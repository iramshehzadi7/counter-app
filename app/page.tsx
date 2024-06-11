'use client'
import { useEffect, useState } from "react";





export default function Home() {
  let [count, setCount] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(()=>{
    let timer: any;
    if(running){
      timer = setInterval(()=>{
        setCount((prevCount) => prevCount + 1);
      }, 500)
    }

    return () => {
      clearInterval(timer);
    }
  }, [running, count]);

  const handleBegin = () =>{
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
  }

  const handleReset = () => {
    setRunning(false);
    setCount(0)
  }

  return (
    <div id="main" className="h-screen flex justify-center items-center">

      <div className="
      bg-purple-300 
      p-10 shadow-lg 
      shadow-pink-700
      flex
      flex-col
      gap-10
      items-center
      rounded-lg
      ">

        <h1 className="text-4xl font-bold">Iram's Counter App</h1>
        <p className="font-bold text-3xl">{count}</p>

        {/* buttons */}
        <div className="flex gap-4">
        <button onClick={handleBegin}
        className="
        bg-purple-500
        text-green
        p-3
        rounded-lg
        hover:bg-pink-500
        "
        >Begin</button>

        <button onClick={handleStop}
        className="
        bg-purple-500
        text-green
        p-3
        rounded-lg
        hover:bg-pink-500
        ">Stop</button>

        <button onClick={handleReset}
         className="
        bg-purple-800
        text-green
        p-3
        rounded-lg
        hover:bg-pink-500
        ">Reset</button>
        </div>
      </div>
    </div>
  );
}