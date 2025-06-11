import React from 'react'
import phone from '../assets/phone.svg'
import sss from '../assets/sss.svg'
import chat from '../assets/chat.svg'
import telegram from '../assets/telegram.svg'
import facebook from '../assets/facebook.svg'
import vk from '../assets/vk.svg'
import footericon from '../assets/footericon.svg'
import OrderBtn from './OrderBtn'

const Footerright = () => {

const footer_right = [
    {
      img:phone
    },
    {
      img:sss
    },
    {
      img:chat
    },
    {
      img:telegram
    },
    {
      img:facebook
    },
    {
      img:vk
    }
  ]
    
  return (
    <div className='mt-[30px]'>
        <p className='text-[15px] font-bold text-dark'>Остались вопросы? А мы всегда на связи:</p>
      <div className='grid grid-cols-4  gap-[15px] py-[33px]'>
        {
          footer_right.map((item, index)=> {
            return(
              <div key={index} className='px-4 py-2 border-3 border-light-blue rounded-xl flex items-center justify-center'>
                <img src={item.img} alt="" />
              </div>
            )
          })
        }
        <div className='border-3 border-light-blue rounded-xl flex items-center justify-center text-[13px] font-bold col-span-2'>
          <span>Написать нам</span>
        </div>
      </div>
      
      <div>
        <p className='text-yellow text-[30px] font-bold py-[20px]'>8 499 391-84-49</p>
        <OrderBtn text={'Заказать звонок'}/>
      </div>
    </div>
  ) 
}

export default Footerright