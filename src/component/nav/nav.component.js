import React from 'react'
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/use-state">Use state</Link>
      <Link to="/use-effect">Use effect</Link>
    </nav>
  )
}

export default Nav
