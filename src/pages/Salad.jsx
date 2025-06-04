import React from 'react'
import salat1 from '../assets/salad/salat1.png'
import salat2 from '../assets/salad/salat2.jpeg'
import salat3 from '../assets/salad/salat3.jpeg'
import salat4 from '../assets/salad/salat4.jpeg'
import salat5 from '../assets/salad/salat5.jpeg'
import salat6 from '../assets/salad/salat6.png'
import salat7 from '../assets/salad/salat7.png'
import salat8 from '../assets/salad/salat8.png'
import YellowBtn from '../components/YellowBtn'

const Salad = () => {

    const salad_card = [
        {
            id:1,
            img:salat1,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:2,
            img:salat2,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:3,
            img:salat3,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:4,
            img:salat4,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:5,
            img:salat5,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:6,
            img:salat6,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:7,
            img:salat7,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
        {
            id:8,
            img:salat8,
            name:'Дарим кибер-призы',
            text:'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350',
            price:'от 600 ₽'
        },
    ]

    return (
        <div className='container'>
            <h1 className='text-[32px] text-yellow font-extrabold'>Салаты</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                {salad_card.map((item, index) => (
                    <div key={index} className='pizza_card w-[255px] h-[490px] rounded-[18px] pl-[5px] mt-[50px]'>
                        <img src={item.img} alt="" />
                        <h1 className='text-[24px] font-extrabold text-grey'>{item.name}</h1>
                        <p className='text-[13px] font-[400] text-grey py-[12px]'>{item.text}</p>
                        <div className='flex gap-[5px]'>
                            <span className='text-[22px] text-dark font-bold'>{item.price}</span>
                            <YellowBtn text={'В корзину'}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Salad