import React from 'react'
import logo from '../assets/logo.svg'
import visa from '../assets/visa.svg'
import pay from '../assets/pay.svg'
import nextpay from '../assets/nextpay.svg'

const Footerleft = () => {
  return (
    <div>
        <img src={logo} alt="" />
        <div className='block gap-15 py-4 sm:block md:flex lg:flex'>
            <div className='font-bold text-dark'>
                <p>Калорийность и состав</p>
                <p className='py-5'>Мы в соцсетях</p>
            </div>
            <p className='font-bold text-dark'>Правовая информация</p>
        </div>
        
        <div className='block gap-15 py-4 sm:flex md:flex lg:flex '>
            <div className='flex-col flex space-y-3 text-grey font-semibold'>
                <a href="#youtube">YouTube</a>
                <a href="#instagram ">Instagram</a>
            </div>
            <div className='flex-col flex space-y-3 text-grey font-semibold '>
                <a href="#facebook">Facebook</a>
                <a href="#oncontact">ВКонтакте</a>
            </div>
            <div className='font-semibold text-grey'>
                <p className='w-[193px] h-[65px] -leading-4'>Москва ул. Проспект Вернадского 86В</p>
            </div>
        </div>

        <div className='block gap-15 py-4 sm:block md:flex lg:flex'>
            <p className='text-[14px] font-semibold'>YaBao Все праав защищены © 2021</p>
            <div className='flex items-center gap-[23px]'>
                <img src={visa} alt="" />
                <img src={pay} alt="" />
                <img src={nextpay} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footerleft