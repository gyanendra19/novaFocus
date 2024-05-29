import React from 'react'

const AllImages = ({setShowModal, setImage}) => {
    const images = ['image3', 'image4', 'image5', 'image6', 'image7', 'image8']

    const handleModal = (e) => {
        setShowModal(true)
        setImage(e.target.src.split('/')[3])
    }

    return (
        <section className='w-full pb-6'>
            <div className='md:w-[75%] mx-auto'>
                <img onClick={e => handleModal(e)} className='mb-10 md:mb-20 mt-4 rounded-md' src="./image2.png" alt="" />
                {images.map(image => (
                    <img key={image} onClick={e => handleModal(e)} className='mb-10 md:mb-20 rounded-md' src={`./${image}.png`} alt="" />

                ))}
            </div>
        </section>

    )
}

export default AllImages