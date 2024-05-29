import React from 'react'
import { RiTwitterFill, RiInstagramLine, RiFacebookFill, RiPinterestFill } from '@remixicon/react'

const Footer = () => {
  return (
    <footer className='w-full pt-10'>
    <div className='md:w-5/6 mx-auto'>
      <div className='flex md:flex-row flex-col gap-4 items-center justify-between'>
        <img className='h-10' src="./dribble-logo.png" alt="" />
        <div className='flex md:w-full w-5/6 text-center justify-center gap-3 flex-wrap md:gap-10 text-gray-800 font-semibold text-sm'>
          <a href="">Find Designers</a>
          <a href="">Hire Talent</a>
          <a href="">Inspiration</a>
          <a href="">Advertising</a>
          <a href="">Blog</a>
          <a href="">About</a>
          <a href="">careers</a>
          <a href="">Support</a>
        </div>
        <div className='flex gap-2'>
          <span><RiTwitterFill size={22} /></span>
          <span><RiFacebookFill size={22} /></span>
          <span><RiInstagramLine size={22} /></span>
          <span><RiPinterestFill size={22} /></span>
        </div>
      </div>

      <div className='pt-14 pb-8 text-center gap-2 font-light w-full flex md:flex-row flex-col items-center md:justify-between'>
        <div className='flex gap-3 text-gray-400 text-sm'>
          <p>© 2024 Dribbble</p>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Cookies</a>
        </div>

        <div className='flex flex-wrap justify-center gap-3 text-gray-400 text-sm'>
          <a href="">Jobs</a>
          <a href="">Designers</a>
          <a href="">Freelancers</a>
          <a href="">Tags</a>
          <a href="">Places</a>
          <a href="">Resources</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer