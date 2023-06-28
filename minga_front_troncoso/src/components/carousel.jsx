import Arrow from "./arrow"

export default function carousel() {
    let left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    let right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  return (
    <div className='max-md:hidden w-full h-g4 rounded-md bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] flex justify-around gap-4 items-center'>

<Arrow icon = {left} />
   
    <img src="/personaje.png" alt="imgtransparente" className='w-64 self-end mb-0.5' />
      <img src="/trigun.png" alt="img" className='h-60 self-end mb-8' />
    
    
    <article className='flex flex-col w-1/3 gap-2'>
    
    <h4 className='text-white leading-95 font-medium text-base font-button'>Shonen</h4>
    
    <p className='font-button w-11/12 text-md leading-95 text-white'> Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
    
    
    </article>
    <Arrow icon = {right} />
    </div>
  )
}
