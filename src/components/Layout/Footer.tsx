import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-900 p-5'>
      <div className='grid grid-cols-4 gap-3'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-1'>
            <img src='/vite.svg'/>
            <div>
              <h1>Lymfz</h1>
              <p>Electrical Company</p>
            </div>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam.</div>
        </div>
        <div className=''>
          <h1>Quick Links</h1>
        </div>
        <div className=''>
          <h1>Contacts</h1>
          <div className='flex gap-2'>
            <div className='rounded-full bg-white p-1'>
              <FaFacebook className='text-blue-800 w-[20px] h-[20px]' />
            </div>
            <div className='rounded-full bg-white p-1'>
              <FaTwitter className='text-blue-800 w-[20px] h-[20px]' />
            </div>
            <div className='rounded-full bg-white p-1'>
              <FaInstagram className='text-blue-800 w-[20px] h-[20px]' />
            </div>
            <div className='rounded-full bg-white p-1'>
              <FaYoutube className='text-blue-800 w-[20px] h-[20px]' />
            </div>
          </div>
        </div>
        <div className=''>1</div>
      </div>
      <div className=''></div>
    </footer>
  )
}

export default Footer