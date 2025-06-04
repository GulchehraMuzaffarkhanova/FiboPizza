import React from 'react'
import logo from '../assets/logo.svg'
import visa from '../assets/visa.svg'
import pay from '../assets/pay.svg'
import nextpay from '../assets/nextpay.svg'

const Footerleft = () => {
  return (
    <div>
        <img src={logo} alt="" />
        <div className='flex items-center gap-[50px] py-[25px]'>
            <p className='font-bold text-dark'>Калорийность и состав</p>
            <p className='font-bold text-dark'>Правовая информация</p>
        </div>
        <p className='font-bold text-dark'>Мы в соцсетях</p>
        <ul className='flex items-center gap-[100px] py-[15px]'>
            <div className=''>
            <li className='text-dark-grey font-semibold'>
               <a href="#YouTube">YouTube</a>
            </li>
            <li className='text-dark-grey font-semibold py-[15px]'>
               <a href="#instagram">Instagram</a>
            </li>
            </div>
            <div className=''>
            <li className='text-dark-grey font-semibold'>
               <a href="#Facebook">Facebook</a>
            </li>
            <li className='text-dark-grey font-semibold py-[15px]'>
                <a href="#ВКонтакте">ВКонтакте</a>
            </li>
            </div>
            <div className=' w-[163px] leading-[23px]'>
                <span className='text-[14px] text-dark-grey font-semibold'>Москва ул. Проспект Вернадского 86В</span>
            </div>
        </ul>
        <div className='flex items-center gap-[157px]'>
            <p className='text-[14px] font-semibold text-dark'>YaBao Все праав защищены © 2021</p>
            <div className='credit_card flex items-center gap-[20px]'>
                <img src={visa} alt="" />
                <img src={pay} alt="" />
                <img src={nextpay} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footerleft