import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const handleNavLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? '700' : 'normal',
      color: isActive ? 'red': 'black'
    }
  }

  return (
    <div>
      <nav style={{backgroundColor: 'antiquewhite'}}>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
        <NavLink style={handleNavLinkStyle} to='/'>Home</NavLink>
        <NavLink style={handleNavLinkStyle} to='/about'>About</NavLink>
        <NavLink style={handleNavLinkStyle} to='/products'>Products</NavLink>
        <NavLink style={handleNavLinkStyle} to='/users'>Users</NavLink>
        <NavLink style={handleNavLinkStyle} to='/profile'>Profile</NavLink>
      </nav>
    </div>
  )
}

export default Header