import React from 'react'

const OrderBtn = ({text, variant}) => {
  return (
    <button className={`px-[28px] py-[8px] rounded-[28px] bg-light-grey text-[14px] text-grey font-bold ${variant}`}>{text}</button>
  )
}

export default OrderBtn