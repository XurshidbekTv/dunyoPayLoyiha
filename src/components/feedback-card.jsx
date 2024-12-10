import React from 'react'
import { Iweb } from '../assets'

const FeedbackCard = ({name, title, content}) => {
  return (
    <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5'>
        <img src={Iweb} alt='qoutes' className={`w-[100px] h-[100px] object-contain rounded-full`} />
        <p className={`font-montserrat font-normal text-[18px] leading-[32px] text-white my-10`}>{content}</p>

        <div className='flex flex-row'>
            <div className='flex flex-col ml-4'>
                <h4 className='font-montserrat font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
                <p className='font-montserrat font-normal text-[16px] leading-[32px] text-lightWhite'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard