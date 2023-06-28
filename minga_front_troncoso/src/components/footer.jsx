
export default function footer() {
  return (
    <footer className="flex flex-wrap items-center w-full gap-6 flex-col md:flex-row md:justify-between justify-center pb-2  px-12">

    <img src="/footer.png" alt="footer" className="hidden sm:block w-full rounded-xl"/>
    
    <div className='flex gap-6 text-xl'>
      <h6>Home</h6>
      <h6>Mangas</h6>
      </div>
      
      <div> <img src="/Logo.png" alt="" className="h-24 w-24" /></div>
     
      <div className='flex-col'>
        <div className='flex justify-around'>
        <img src="/facebook-black.png" alt="socialmedia" className="h-10 w-10" />
        <img src="/twitter-black.png" alt="socialmedia" className="h-10 w-10" />
        <img src="/vimeo-black.png" alt="socialmedia" className="h-10 w-10" />
        <img src="/youtube-black.png" alt="socialmedia" className="h-10 w-10" />
        </div>
      <button className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-600 text-white w-56 h-10  
        rounded-md mt-2">
          <div className='flex'>
          <span className="ml-16">Donate</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="w-6 h-6 ml-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597      1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
        </div></button></div>
      </footer>
  )
}
