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
    <div className='relative sm:mt-5 md:mt-5'>
        <h1 className='text-[14px] font-bold text-dark'>Остались вопросы? А мы всегда на связи:</h1>
        <div className='grid grid-cols-4 gap-[15px]'>
        {
          footer_right.map((item, index)=> {
            return(
            <div key={index}>
              <div className='border-3 border-light-blue rounded-[13px] px-5 py-3 flex items-center justify-center'><img src={item.img} alt="" /></div>
            </div>
            )
          })
        }
        <div className='lg:col-span-2 border-3 border-light-blue rounded-[13px] px-[60px] py-[18px] flex items-center justify-center'><span className='text-[14px] font-bold text-dark'>Написать нам</span></div>
        </div>
        <div className=''>
        <p className='text-[30px] font-bold text-yellow my-[27px]'>8 499 391-84-49</p>
        <OrderBtn text={'Заказать звонок'}/>
        </div>
{/*        <img className='last_img absolute right-0 -bottom-[55px] ' src={footericon} alt="" /> */}    
      </div>
  )
}

export default Footerright