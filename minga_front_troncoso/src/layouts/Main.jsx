import Nabvar from "../components/nabvar";
import Footer from "../components/footer"


export default function Main({ children }) {
    console.log(children)
  return (
    <div className='flex flex-col min-h-screen items-center justify-between'>

<Nabvar/>
{/* contenido dinamico de cada interfaz */}
{children}
<Footer/>

</div>
  )
}
