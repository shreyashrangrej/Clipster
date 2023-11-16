import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
        <div className="flex space-x-4 ml-auto">
            <ModeToggle />
        </div>

    </nav>
  )
}

export default Navbar