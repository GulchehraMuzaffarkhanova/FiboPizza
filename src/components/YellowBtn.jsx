import React from 'react'

const YellowBtn = ({text, variant}) => {
  return (
    <button className={`yellow_btn text-[16px] font-bold text-dark px-[25px] py-[8px] rounded-[8px] bg-yellow ${variant}`}>{text}</button>
  )
}

export default YellowBtn