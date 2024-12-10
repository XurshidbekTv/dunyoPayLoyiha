import React from 'react'
import { layout, styles } from '../util/style'
import Button from './button'
import { feutures } from '../util/constants'
import FeautureCard from './feauture-card'

const Busniss = () => {
  return (
    <section id='future' className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Biznesni rivojlantiring,<br className='sm:block hidden'/> pulni biz halqilamiz
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[600px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates vitae dicta dignissimos, exercitationem molestiae labore eos qui deleniti nemo minima nisi ab tenetur corrupti nostrum minus consequatur nobis dolorum!
        </p>
        <Button styles={'mt-10'}/>
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {
          feutures.map((feauture, idx)=>(
            <FeautureCard key={feauture.id} {...feauture} idx={idx}/>
          ))
        }
      </div>
    </section>
  )
}

export default Busniss