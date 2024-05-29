import { RiBookmarkLine, RiHeart3Line } from '@remixicon/react'
import React from 'react'

const FixedNav = () => {

    window.addEventListener('scroll', () => {
        const scrollNav = document.querySelector('.scroll-nav')
        const rect = scrollNav.getBoundingClientRect()
        if (window.scrollY > 180) {
          scrollNav.classList.add('fixed')
          scrollNav.classList.add('top-0')
          scrollNav.classList.add('md:w-[75%]')
        } else {
          scrollNav.classList.remove('top-0')
          scrollNav.classList.remove('fixed')
          scrollNav.classList.remove('md:w-[75%]')
        }
      })


  return (
    <section className='pt-14 w-full'>
          <div className='md:w-[75%] w-[95%] mx-auto'>
            <h1 className='text-2xl font-semibold'>Corporate Website</h1>
            <div className='w-full scroll-nav z-50 mx-auto bg-white'>
              <div className='w-full flex justify-between mt-4 pb-3'>

                <div className='flex gap-2 items-center'>
                  <img className='rounded-full md:w-14 w-10' src="./avatar.png" alt="" />
                  <div className='flex flex-col md:text-sm text-[10px] gap-1'>
                    <p className='font-semibold'>Dmitry Lauretsky <span className='font-regular'>for</span> Ronas IT | UI/UX Team</p>
                    <p className='text-green-600 font-medium text-[12px]'>Availaible for work <span className='ml-1 text-gray-500'>Follow</span></p>
                  </div>
                </div>

                <div className='flex gap-3 items-center'>
                  <span className='md:p-3 p-2 rounded-full border border-gray-200'><RiHeart3Line size={20} /></span>
                  <span className='md:p-3 p-2 rounded-full border border-gray-200'><RiBookmarkLine size={20} /></span>
                  <button className='bg-[#0d0c22] md:block hidden text-white text-sm rounded-full p-2 px-5 font-medium'>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </section>

  )
}

export default FixedNav