
import { GiRocketFlight } from "react-icons/gi";


const Header = () => {
          
      
    return (
        <header className='w-full p-4 bg-slate-50'>
          <nav className='flex  items-center justify-between max-w-6xl mx-auto'>
            <a href="/" className='text-lg font-bold flex  items-center'><GiRocketFlight className="text-2xl mr-1 text-indigo-600"/>Travel Logo</a>
            <button className='bg-indigo-500 text-white px-6 py-2 rounded  font-medium'>Login</button>
          </nav>
        </header>
    )
}


export default Header