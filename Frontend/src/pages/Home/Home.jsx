import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
const Home = () => {
  const[category,setCategory]=useState("ALL");
  return (
    <div>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home
