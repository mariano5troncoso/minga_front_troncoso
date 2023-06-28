import Search from "./search"

export default function hero() {
  return (
    <div className="flex text-center justify-center items-center md:w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="text-white  ">
        <h1 className=" font-bold text-2xl md:text-5xl w-full">Live the emotion of the manga</h1>
        <div className='md:flex flex-col md:justify-stars md:text-left'>
        <p className="sm:mt-1 md:text-lg">Find the perfect manga for you</p>
        <p className="hidden md:block ">#MingaForever 🔥</p>
        <Search title="Explore"/>
      </div>
  
      </div>
    </div>
  )
}
