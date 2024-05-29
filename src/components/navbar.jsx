import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-8'>
          <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div className='flex gap-10 items-center'>
              <img className='h-10' src="./dribble-logo.png" alt="" />
              <div className='md:flex gap-7 font-semibold text-sm hidden'>
                <a href="">Find Designers</a>
                <a href="">Inspiration</a>
                <a href="">Courses</a>
                <a href="">Jobs</a>
                <a href="">Go Pro</a>
              </div>
            </div>

            <div className='flex gap-5 items-center'>
              <input className='w-[220px] hidden md:block h-[45px] focus:outline-none rounded-3xl bg-[#f4f5fb] px-6' placeholder='Search..' type="text" />
              <button className='hidden md:block'>Log in</button>
              <button className='bg-[#0d0c22] text-white rounded-full p-3 px-6'>Sign up</button>
            </div>
          </div>
        </nav>

  )
}

export default Navbar