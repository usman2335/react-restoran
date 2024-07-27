import React from 'react'
import "./navbar.css"
import { Button, Stack } from '@mui/material'
import BookButton from '../book-btn/BookButton'

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <i>Restoran</i>
        <Stack direction={'row'} spacing = {2}>
            <Button variant='text'>Home</Button>
            <Button variant='text'>Contact</Button>
            <Button variant = 'contained'>Book A Table</Button>
            </Stack>
        
    </div>
  )
}

export default Navbar