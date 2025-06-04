import React from 'react'
import suv1 from '../assets/drinks/suv1.jpeg'
import suv2 from '../assets/drinks/suv2.png'
import suv3 from '../assets/drinks/suv3.png'
import suv4 from '../assets/drinks/suv4.jpg'
import suv5 from '../assets/drinks/suv5.jpg'
import suv6 from '../assets/drinks/suv6.png'
import YellowBtn from '../components/YellowBtn'


const Drinks = () => {

    const drinks_card = [
        {
            id:1,
            img:suv1,
            name:'С креветками и трюфелями',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
            price:'от 600 ₽'
        },
        {
            id:2,
            img:suv2,
            name:'С креветками и трюфелями',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
            price:'от 600 ₽'
        },
        {
            id:3,
            img:suv3,
            name:'С креветками и трюфелями',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
            price:'от 600 ₽'
        },
        {
            id:4,
            img:suv4,
            name:'С креветками и трюфелями',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
            price:'от 600 ₽'
        },
        {
            id:5,
            img:suv5,
            name:'С креветками и трюфелями',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
            price:'от 600 ₽'
        },
        {
            id:6,
            img:suv6,
            name:'С креветками и трюфелями',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
            price:'от 600 ₽'
        }
    ]

  return (
    <div className='container'>
        <h1 className='text-[32px] text-yellow font-extrabold'>Напитки</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {
            drinks_card.map((item,index) => {
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

export default Drinks