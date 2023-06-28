import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-between min-h-screen items-center bg-center mb:bg-none ">
      <nav className='flex w-full justify-between items-center px-5 h-20 absolute z-50 md:w-screen xl:w-[1200px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <img src="/logo1.png" alt="logo" className="h-12 w-12 " />
      </nav>
      <main className=" bg-[url('/naruto-mobile.png')] bg-center bg-cover md:bg-none flex flex-col  flex-grow min-h-screen w-full justify-evenly items-center pt-20 px-5 md:w-screen xl:w-[1200px]">
        <div className="hidden lg:flex justify-center items-center w-full h-[100%]">
          <div className='flex text-white w-[90%] h-[75%] rounded-md bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] justify-around gap-[15px] items-center p-2'>
            {/* <Arrow icon = {left} /> */}
            <img className='h-[120%] max-w-[230px]' src="/personaje.png" />
            <img className='h-[120%] pb-[35px] rounded-md max-w-[180px]' src="/trigun.png" />
            <div className='flex flex-col w-[40%] gap-4 ms-3'>
              <p className='font-medium text-[24px]'>Shonen</p>
              <p className='w-[90%] text-[14px]'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            {/* <Arrow icon = {right} /> */}
          </div>
        </div>

        <div>
          <p className="text-5xl  font-bold">Live the emotion of the manga</p>
          <p className=" ">Find the perfect manga for you</p>
          <button className="hidden md:block  text-white bg-[#F9A8D4]  rounded-md py-5 px-20">Explore</button>
          <button className="md:hidden text-white bg-[#F9A8D4] rounded-md py-5 px-20">Explore</button>
        </div>

      </main>
      <footer className="flex flex-col  w-full justify-between items-center pb-5">

      </footer>
    </div>
  );
}

export default App;


