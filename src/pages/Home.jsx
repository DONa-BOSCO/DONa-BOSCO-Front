import React from 'react'
import Slide from"../components/Slide"
import Slick from '../components/Slick'
import './Stylesheet/Home.css'



const Home = () => {
 
  return (
    <>
    <Slide/>
    <div className="home--text">
    <h1 style={{textAlign: "center"}}>
    Dona lo que ya no utilizas. 
    <br />
    Fácil, rápido y sin moverte del sofá.</h1>
    </div>
    <div className="home--search">
    <input className="searchinput" type="text" placeholder="Busca por categorias"/>
    </div>
    
   <Slick/>

    </>
 
    
  )
}
export default Home