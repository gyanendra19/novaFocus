import { useState } from 'react'
import Navbar from './components/navbar'
import FixedNav from './components/FixedNav'
import Hero from './components/Hero'
import AllImages from './components/AllImages'
import ViewProfile from './components/ViewProfile'
import Footer from './components/Footer'

function App() {
const [showModal, setShowModal] = useState(false)
const [image, setImage] = useState('')


  return (
    <>
      <main className='w-full relative'>
        <div onClick={() => setShowModal(false)} className={`w-full h-full absolute bg-black opacity-40 z-[100] ${showModal ? '' : 'hidden'}`}></div>
        <div className={`h-full w-fit middle left-1/2 top-[60%] items-center fixed z-[200] ${showModal ? '' : 'hidden'}`}>
          <img className='' src={`./${image}`} alt="" />
        </div>
        <Navbar />
        <FixedNav />
        <Hero setShowModal = {setShowModal} setImage = {setImage} />
        <AllImages setShowModal = {setShowModal} setImage = {setImage} />
        <ViewProfile />
        <Footer />
      </main>
    </>
  )
}

export default App
