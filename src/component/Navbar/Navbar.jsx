import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' '>
  <div className="navbar bg-black">
  <div className="navbar-start block">

    {/* logo  */}
    <div className="navbar-start bg-black block lg:hidden">
    <ul className="menu lg:menu-horizontal gap-4 px-1">
     <NavLink to='/' className={(isActive)=>{
      isActive ? 'btn btn-secondary' : " btn bg-red-500 "
     }}
     >
      Home
     </NavLink>
    </ul>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu lg:menu-horizontal gap-2 px-1">
   
    <NavLink to='/' className={({isActive})=>
      isActive ? ' p-1 text-orange-500 text-lg ' : " text-white  text-lg p-1 "
     }
     >
      Home
     </NavLink>
    <NavLink to='/about' className={({isActive})=>
      isActive ? '  text-lg p-1 text-orange-500 ' : " text-white text-lg p-1"
    }
     >
      About
     </NavLink>
    <NavLink to='/contact' className={({isActive})=>
      isActive ? '   text-lg p-1 text-orange-500 ' : " text-white text-lg p-1"
    }
     >
      Contact
     </NavLink>
    
    </ul>
  </div>
  <div className="navbar-end">
    <Link>
    <button className='btn btn-outline border-orange-600 text-lg text-orange-500'> Log In</button>
    </Link>
  </div>
</div>

    </div>
  )
}

export default Navbar