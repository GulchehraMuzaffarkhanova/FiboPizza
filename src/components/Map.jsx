import React from 'react'
import MapCard from './MapCard'

const Map = () => {
  return (
    <section className='bg-light-blue '>
        <div className="container m-auto py-[40px]">
            <h1 className='text-[30px] text-yellow font-extrabold flex items-center justify-center'>Оплата и доставка</h1>

            <div className=''>
              <MapCard />
            </div>

            <iframe className='w-full h-[450px] rounded-[14px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6424.426721967028!2d69.58847789231199!3d40.8510787250585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2d9478996ef1%3A0xd34c9a593a495cc9!2sUcell!5e0!3m2!1sen!2sde!4v1748605864178!5m2!1sen!2sde" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
        </div>
    </section>
  )
}

export default Map