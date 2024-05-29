import React from 'react'

const Hero = ({setShowModal, setImage}) => {

    
    const handleModal = (e) => {
        setShowModal(true)
        setImage(e.target.src.split('/')[3])
    }

  return (
    <section className='pt-6 w-full'>
          <div className='md:w-[75%] pb-12 mx-auto'>
            <img onClick={e => handleModal(e)} className='rounded-md' src="./image1.png" alt="" />
          </div>

          <div className='md:w-[60%] w-[95%] mx-auto'>
            <p className='text-center font-semibold md:text-xl'> Have a project idea? We are available for new projects!</p>
            <div className='text-center font-semibold md:text-xl flex-wrap flex gap-2 justify-center mr-6'>
              <a className='border-b-2 border-[#ea64d9]' href="">hello@ronasit.com |</a>
              <a className='border-b-2 border-[#ea64d9]' href="">Telegram |</a>
              <a className='border-b-2 border-[#ea64d9]' href="">Whatsapp |</a>
              <a className='border-b-2 border-[#ea64d9]' href="">Website</a>
            </div>

            <p className='w-full md:text-xl leading-7 md:leading-8 py-10'>Having a well-designed website with useful information gives off the impression that you are running a reliable and credible business. Meet our new concept of a design studio’s corporate website!</p>
            <p className='w-full md:text-xl leading-7 md:leading-8 pb-8'>The first screen displays the company’s motto. The next two screens display the company description and a list of its services. Another screen displays the list of the team members and their responsibilities. The last screen displays the contact information.</p>
            <p className='w-full md:text-xl leading-7 md:leading-8 pb-8'>Our designers used neutral grey shades for the background and added blurry gradients as the main colorful accent. This simple color scheme doesn’t distract users from observing the company’s portfolio.</p>
            <p className='w-full md:text-xl leading-7 md:leading-8 pb-8'>The minimal design, large print, and colorful accents convey the company’s mission and emphasize its creativity. The simple navigation and clear information layout make the website pleasant to use.</p>
          </div>
        </section>
  )
}

export default Hero