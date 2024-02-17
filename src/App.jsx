

import Booking from './components/Booking'
import Header from './components/Header'
import Table from './components/Table';



function App() {



  return (
    <div className='bg-[url(https://cdn.wallpapersafari.com/30/38/EMsS05.jpeg)] bg-cover bg-no-repeat'>
      <Header />
      <section className='h-screen'>
        <Booking />
        <Table />
      </section>
    </div>
  )
}

export default App
