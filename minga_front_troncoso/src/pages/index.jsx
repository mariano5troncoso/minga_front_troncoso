import Hero from "../components/hero";
import Carousel from "../components/carousel";

export default function index() {
  return (
    <main className='  bg-[url("/naruto-mobile.png")] bg-center bg-cover md:bg-none flex flex-col  flex-grow min-h-screen w-full justify-evenly items-center pt-20 px-5 md:w-screen xl:w-[1200px] '>

 
<Carousel/>
  
  
  
    <div className="relative ">
  <img src="/naruto.png" alt="background" className="hidden md:block md:w-full my-11 rounded-xl" />
  
  <Hero/>
    
  </div>
  
    </main>
    )
}
