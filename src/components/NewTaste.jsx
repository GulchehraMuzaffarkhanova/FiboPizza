import React from 'react'
import korbanar from '../assets/korbanar.svg'
import boy from '../assets/boy.svg'

const NewTaste = () => {

    const new_taste = [
        {
            img:korbanar,
            title:'Карбонара',
            price:'от 120 ₽'
        },
        {
            img:korbanar,
            title:'Карбонара',
            price:'от 120 ₽'
        },
        {
            img:korbanar,
            title:'Карбонара',
            price:'от 120 ₽'
        },
        {
            img:korbanar,
            title:'Карбонара',
            price:'от 120 ₽'
        }
    ]

  return (
    <section className='mt-[50px] relative'>
{/*        <img className=" absolute sm:hidden md:hidden lg:flex" src={boy} alt="" /> */}
        <div className="container">
            <h1 className='text-[24px] text-dark font-bold'>Новинки</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
            {
                new_taste.map((item, index) => {
                    return(
                        <div key={index} className='new_taste w-[255px] h-[100px] bg-white rounded-[12px] flex items-center mt-[33px]'>
                            <img className='p-[15px]' src={item.img} alt="" />
                            <div className=''>
                               <p className='text-[18px] text-dark font-bold'>{item.title}</p>
                               <p className=' text-yellow font-bold'>{item.price}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default NewTaste