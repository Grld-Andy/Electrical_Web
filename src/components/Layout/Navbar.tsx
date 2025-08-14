import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
  const navLinks = [
    {text: "Home", link: '/'},
    {text: "About", link: '/about'},
    {text: "Projects", link: '/projects'},
    {text: "Services", link: '/services'},
    {text: "Contact Us", link: '/contact'}
  ]
  
  return (
    <nav className='flex gap-5 items-center justify-between p-5 shadow-sm bg-white'>
      <div>
        <img className='w-[50px] h-[50px]' src='/vite.svg'/>
      </div>
      <ul className='flex gap-10 w-full items-center justify-center'>
        {
          navLinks.map((link) => (
            <li key={link.text}>
              <NavLink className="font-semibold" to={link.link}>{link.text}</NavLink>
            </li>
          ))
        }
      </ul>
      <div>
        <Button className='border bg-blue-500 rounded-sm border-white'>Request A Service</Button>
      </div>
    </nav>
  )
}

export default Navbar