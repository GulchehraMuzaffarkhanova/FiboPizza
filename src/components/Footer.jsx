import React from 'react'
import Footerleft from './Footerleft'
import Footerright from './Footerright'



const Footer = () => {
  return (
    <section>
        <div className="container">
            <div className='grid md:grid-cols-1 lg:grid-cols-2 place-items-center py-[55px]'>
            <Footerleft/>
            <Footerright/>
            </div>
        </div>
    </section>
  )
}

export default Footer