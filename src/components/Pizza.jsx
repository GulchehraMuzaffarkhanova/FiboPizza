import React from 'react'
import PizzaCard from './PizzaCard'

const Pizza = () => {
  return (
    <section className='mt-[46px]'>
        <div className="container">
            <h1 className='text-[32px] text-yellow font-extrabold'>Пицца</h1>
            <PizzaCard/>
        </div>
    </section>
  )
}

export default Pizza