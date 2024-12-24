import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>
    <img src='https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D'/>
    <h4>Your movie night, every night, whenever you want.</h4>
  <Link to='movies'>  <button>Click</button></Link>
    </div>
  )
}

export default Home
