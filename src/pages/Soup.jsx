import React from 'react'
import cupi1 from '../assets/supi/cupi1.png'
import cupi2 from '../assets/supi/supi2.png'
import cupi3 from '../assets/supi/supi3.png'
import cupi4 from '../assets/supi/supi4.png'
import YellowBtn from '../components/YellowBtn'


const Soup = () => {

    const soup_card = [
        {
            id:1,
            img:cupi1,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:2,
            img:cupi2,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },{
            id:3,
            img:cupi3,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },{
            id:4,
            img:cupi4,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        }
    ]

  return (
    <div className='container'>
        <h1 className='text-[32px] text-yellow font-extrabold'>Супы</h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
        {
            soup_card.map((item, index)=> {
                return(
                    <div key={index} className='pizza_card w-[255px] h-[490px] rounded-[18px] pl-[5px] mt-[50px]'>
                        <img src={item.img} alt="" />
                        <h1 className='text-[24px] font-extrabold text-grey'>{item.name}</h1>
                        <p className='text-[13px] font-[400] text-grey py-[12px]'>{item.text}</p>
                        <div className='flex gap-[5px]'>
                        <span className='text-[22px] text-dark font-bold'>{item.price}</span>
                        <YellowBtn text={'В корзину'}/>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Soup