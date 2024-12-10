import React from 'react'
import { styles } from '../util/style'
import { Robot } from '../assets'
import Button from './button'

const Home = () => {
  return (
   <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
   
    {/* Information */}
    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
       {/* Animation img */}
    <div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
      <img src={Robot} alt="robot" className='w-[100%] h-[100%] relative z-10 rounded-xl mr-6 pb-8' />
    </div>
    {/* Discount information */}
     <div className='py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient'>
        <p className='text-white'>
            20% <span className='text-yellow-100'>Chegirma</span> 1 Oylik xisob uchun
        </p>
     </div>
     {/* Title */}
     <div className='w-full'>
      <h1 className={`${styles.heading1} capitalize`}>
        Yangi avlod <span className='text-gradient'>to'lov usuli</span>
      </h1>
     </div>
     {/* Description */}
     <p className={`${styles.paragraph} mt-5 max-w-[950px]`}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus, odio maxime temporibus at ipsa? Quisquam enim, recusandae consectetur, nemo consequuntur sapiente dolores atque esse harum autem blanditiis repellendus doloribus!
     </p>
     {/* Getting started */}
     <Button styles={'mt-5'}/>
     {/* Gradient background */}
     <div className='absolute z-[0] w-[40%] h-[35%]  top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%]  rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%]  right-20 bottom-20 blue__gradient'/>
    </div>
    
   </section>
  )
}

export default Home