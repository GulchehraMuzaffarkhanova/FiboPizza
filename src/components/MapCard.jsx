import React from 'react'
import product from '../assets/product.svg'
import delivery from '../assets/delivery.svg'
import check from '../assets/check.svg'
import time from '../assets/time.svg'

const MapCard = () => {
    const map_card = [
        {
            img: product,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: check,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: time,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
    ]
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 mt-[65px] gap-y-13 place-items-center'>
      {map_card.map((item, index) => {
        return(
            <div key={index} className='w-[255px] h-[104px] bg-white rounded-[14px]'>
                <div className='flex justify-center'>
                <div className='w-[77px] h-[77px] bg-white rounded-full flex justify-center items-center -mt-[34px]'>
                <img src={item.img} alt={item.img}/>
                </div>
                </div>
                <div className='flex justify-center'>
                <h5 className='px-[20px] font-semibold text-[14px]  text-[#473E43]'>{item.desc}</h5>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default MapCard
