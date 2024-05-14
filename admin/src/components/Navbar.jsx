import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-3'>
        <nav className='max-w-6xl mx-auto  flex justify-between items-center'>

        
        <Link to="/">
            <img src={assets.logo} alt="logo" className="w-32" />
          </Link>

          <img src={assets.profile_image} alt="logo" className="w-12" />
         
        </nav>
    </div>
  )
}

export default Navbar