import React from 'react'
import NoteList from './NotesList'

const Navbar = () => {

  return (
    <>
    <nav className="flex justify-around bg-amber-400 items-center p-4 z-[100]">
        <h1 className='text-4xl font-bold text-black'>
            Smart Notes
        </h1>
        
 
        

      
    </nav>
    <NoteList/>
    
    </>
  )
}

export default Navbar
