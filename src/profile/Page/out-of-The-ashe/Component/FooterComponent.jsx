import React from 'react'
import { faFacebook,faMailchimp,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FooterComponent = () => {
  return (
    <section className='h-[100px] w-full absolute bottom-0 bg-brand  flex flex-col   
                        lg:px-[160px] max-lg:px-[32px] max-sm:px[16px]'>
      <div className='flex justify-between items-center'>

      {/* Contact information */}
        <div>
           <h3>Contact</h3>

           <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
           <FontAwesomeIcon icon={faMailchimp}></FontAwesomeIcon>
           <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </div>
      {/* All Right Reserverd */}
        <p>
         Website Content All Right Reserved  &copy Out Of The Ashes
        </p>

     </div>

      <div className='w-full text-center '>
       Website Design and Development All Right Reserverd &copy Abay Tefera
         
      </div>



    </section>
  )
}

export default FooterComponent
