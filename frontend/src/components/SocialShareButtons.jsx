import React from 'react'
import { FaFacebookSquare , FaTwitterSquare ,FaInstagramSquare,FaWhatsappSquare } from "react-icons/fa"
const SocialShareButtons = ({url,title}) => {
  return (
    <div className='w-full flex justify-between '>
    <a href="/" target='_blank' rel='noreferrer'>
     <FaFacebookSquare className='w-12 h-auto text-[#3b5998]'/>
    </a>
    <a href="/" target='_blank' rel='noreferrer'>
     <FaTwitterSquare className='w-12 h-auto text-[#00acee]'/>
    </a>
    <a href="/" target='_blank' rel='noreferrer'>
     <FaInstagramSquare className='w-12 h-auto bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white'/>
    </a>
    <a href="/" target='_blank' rel='noreferrer'>
     <FaWhatsappSquare className='w-12 h-auto text-[#25d366]'/>
    </a>
      
    </div>
  )
}

export default SocialShareButtons
