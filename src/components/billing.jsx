import React from 'react'
import { layout, styles } from '../util/style'
import { Apple, Google, Pay } from '../assets'

const Billing = () => {
  return (
    <section id='feutures' className={`${layout.sectionRevorse}`}>
  
      <div className={layout.sectionImageRevorse}>
        <img src={Pay} alt="pay" className={`w-[100%] h-[100%] relative z-[5]`}/>
        
        <div className='absolute z-[3] -left-1/2  w-[50%] h-[50%]  rounded-full top-0 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2  bottom-0 pink__gradient'/>

      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Hisob va Facturial <br className='sm:block hidden'/> Osongina Boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere sit dolores soluta officia libero tempora dignissimos similique explicabo, doloremque quis magni. Laborum excepturi esse dolores itaque asperiores deserunt veniam.</p>

        <div className='flex flex-wrap flex-row sm:mt-10 mt-6'>
          <img src={Apple} alt="uu" className='w-[129px] h-[42px] object-contain mt-5 cursor-pointer'/>
          <img src={Google} alt="gugjhghj" className='w-[129px] h-[42px] object-contain mt-5 cursor-pointer rounded-md'/>
        </div>
      </div>
    </section>
  )
}

export default Billing