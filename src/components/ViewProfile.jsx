import React from 'react'

const ViewProfile = () => {
  return (
    <section className='pt-12 pb-10 w-full'>
          <div className='w-[75%] mx-auto flex items-center gap-6'>
            <span className='h-[2px] bg-gray-300 w-[50%]'></span>
            <img className='rounded-full' src="./logo.jpg" alt="" />
            <span className='h-[2px] bg-gray-300 w-[50%]'></span>
          </div>

          <div className='w-full text-center mt-4'>
            <p className='text-xl font-medium'>Ronas IT | UI/UX Team</p>
            <p className='pb-3 w-11/12 mx-auto text-sm'>We make complex applications simple for users🖤</p>
            <button className='bg-[#0d0c22] text-white text-sm rounded-full p-2 px-5 font-medium'>Get in touch</button>
          </div>

          <div className='w-full py-14'>
            <div className='md:w-5/6 w-11/12 md:text-md text-sm mx-auto flex justify-between'>
              <p className='font-semibold'>More by Ronas IT | UI/UX Team</p>
              <p>View profile</p>
            </div>
            <div className='md:w-5/6 w-11/12 mx-auto flex md:flex-row flex-col gap-10 pt-2'>
              <img className='h-48 rounded-lg' src="./website1.png" alt="" />
              <img className='h-48 rounded-lg' src="./website2.png" alt="" />
              <img className='h-48 rounded-lg' src="./website3.png" alt="" />
              <img className='h-48 rounded-lg' src="./website4.png" alt="" />
            </div>
          </div>
        </section>
  )
}

export default ViewProfile