import React from 'react'

function Footer() {
  return (
    
    <div className=' w-full flex justify-between'>
        <ul className=' w-full flex justify-between m-3'>
            <li className='text-white font-semibold'>DR. YANGA'S HOSPITAL</li>
            <li className='text-white hidden lg:block'><a  href="https://www.facebook.com/DYHospital" target="_blank" rel="noopener noreferrer">https://www.facebook.com/DYHospital/</a></li>
            <li className='text-white font-semibold'>(+63)922 881 4335</li>
            <li className='text-white hidden lg:block'>252 P. Burgos Street, Poblacion, Bocaue, Philippines</li>      
        </ul>
    </div>
  )
}

export default Footer