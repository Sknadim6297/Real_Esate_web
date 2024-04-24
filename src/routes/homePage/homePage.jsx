import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

function homePage() {
  return (
    <div className='homePage'>
    <div className="textContainer">
    <div className="wrapper">
        <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus doloremque aliquid nobis magni deleniti architecto ut, officia voluptatibus? Sapiente beatae suscipit nam recusandae</p>
        <SearchBar/>
        <div className='boxes'>
    <div className='box'>
    <h1>16+</h1>
    <h2>Years Of Experience</h2>
    </div>
    <div className='box'>
    <h1>2000+</h1>
    <h2>Property Ready</h2>
    </div>
    <div className='box'>
    <h1>200</h1>
    <h2>Award Gained </h2>
    </div>
      
    </div>
        </div>
    </div>
    <div className="imgContainer">
        <img src="/bg.png.jpg" alt="" />
    </div>
    
      
    </div>
  )
}

export default homePage
