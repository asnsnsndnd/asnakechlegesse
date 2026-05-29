import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavComponent = () => {
  return (
    <section className='w-full h-[90px]  fixed top-0 bg-brand lg:px-[160px] 
            max-lg:px-[32px]  max-sm:px-[26px] 
               flex  justify-between items-center '>

        {/* logo box */}
     <div className='w-[102px] h-[42px]  '>

         <img src="out.png" alt="" />

     </div>

{/* nav box */}
    <button className='sm:hidden'>

            <FontAwesomeIcon icon={faBars} className='text-white  text-[26px] font-bold'></FontAwesomeIcon>

     </button>

     <nav className='w-[259px] h-[68px]  max-sm:hidden text-white  flex justify-between items-center'>

          <button className='text-[16px] hover:font-bold  max-lg:text-[18px] pxhover:text-[#2E37B0] 
                               hover:text-[20px transtion-all duration-300] cursor-pointer'>Home
          </button>

          <button className='w-[93px] h-[46px] text-[16px] hover:bg-[#2E37B0] 
                               transtion-all duration-300 ease  cursor-pointer 
                                 rounded-[12px] bg-[#3B39CE]'>Login
          </button>

      </nav>

      
    </section>
  )
}

export default NavComponent
