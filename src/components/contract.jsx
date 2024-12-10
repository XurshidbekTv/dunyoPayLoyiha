import React from 'react'
import { layout, styles } from '../util/style'
import { Carta } from '../assets'
import Button from './button'

const Contract = () => {
  return (
    <section id='product' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2}`}>
                Bir necha oson qadamda <br className='sm:block hidden'/> Contract tuzish
            </h2>
            <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores consectetur quia quis id dicta minus recusandae molestiae consequuntur illum.
            </p>
            <Button styles={'mt-10'}/>
        </div>
        <div className={layout.sectionImage}>
            <img src={Carta} alt="cstat" className='w-[100%] h-[100%] rounded-2xl' />
        </div>
    </section>
  )
}

export default Contract