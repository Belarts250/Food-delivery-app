import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/FoodDisplay/Fooddisplay';
import Appdownload from '../../components/Appdownload/Appdownload';

function Home() {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category}/>
      <Appdownload /> 
    </div>
  )
}

export default Home
