import React from 'react'
import Footerleft from './Footerleft'
import Footerright from './Footerright'



const Footer = () => {
  return (
    <section>
        <div className="container">
            <div className='grid py-[55px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <Footerleft/>
            <Footerright/>
            </div>
        </div>
    </section>
  )
}

export default Footer