/* import React, { useState, useRef } from "react";
import Slider from "react-slick";
import './Stylesheet/Slick.css'

function Slick() {
    var workOnebackStyle = {
        backgroundImage: `url("https://i.pinimg.com/564x/3f/7d/d9/3f7dd9f23971fd116738a9359ac4220e.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle2 = {
        backgroundImage: `url("https://i.pinimg.com/564x/3f/7d/d9/3f7dd9f23971fd116738a9359ac4220e.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle3 = {
        backgroundImage: `url("https://i.pinimg.com/564x/3f/7d/d9/3f7dd9f23971fd116738a9359ac4220e.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle4 = {
        backgroundImage: `url("https://i.pinimg.com/564x/3f/7d/d9/3f7dd9f23971fd116738a9359ac4220e.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className="reactSlick">
            <div className="slider">
                <Slider {...settings}>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <div className="singleWork" style={workOnebackStyle}>
                            <div className="no">
                                <div><span className="lineIn">---</span> 01</div>
                            </div>
                            <div className="credit">
                                <p>Shinuya, Japan</p>
                                <h1>Photo by Benjamin Hung</h1>
                                <button className="slideInUp">View in Unsplash</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <div className="singleWork" style={workOnebackStyle2}>
                            <div className="no">
                                <div><span className="lineIn">---</span> 02</div>
                            </div>
                            <div className="credit">
                                <p>Shinuya, Japan</p>
                                <h1>Photo by Benjamin Hung</h1>
                                <button className="slideInUp">View in Unsplash</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <div className="singleWork" style={workOnebackStyle3}>
                            <div className="no">
                                <div><span className="lineIn">---</span> 03</div>
                            </div>
                            <div className="credit">
                                <p>Shinuya, Japan</p>
                                <h1>Photo by Benjamin Hung</h1>
                                <button className="slideInUp">View in Unsplash</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <div className="singleWork" style={workOnebackStyle4}>
                            <div className="no">
                                <div><span className="lineIn">---</span> 04</div>
                            </div>
                            <div className="credit">
                                <p>Shinuya, Japan</p>
                                <h1>Photo by Benjamin Hung</h1>
                                <button className="slideInUp">View in Unsplash</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <div className="singleWork" style={workOnebackStyle}>
                            <div className="no">
                                <div><span className="lineIn">---</span> 05</div>
                            </div>
                            <div className="credit">
                                <p>Shinuya, Japan</p>
                                <h1>Photo by Benjamin Hung</h1>
                                <button className="slideInUp">View in Unsplash</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
export default Slick; */
import React from 'react'
import './Stylesheet/Slick.css'

const Slick = () => {
  return (
   <div className="container">
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/b1/bd/e7/b1bde73ee72d01118d743df48f826f71.jpg" alt="" />
    <br />
        <h6>Ropa y Accesorios</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/6c/e9/39/6ce9394bf19bf34574943a9d6832337b.jpg" alt="" />
        <h6>Electrodomésticos</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/37/8d/ca/378dcab29f599b5508ec838583195097.jpg" alt="" />
        <h6>Informatica ,
elctrónica </h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/b4/5d/30/b45d30ab4d40ee2ca1e2d4e3c8fc02d3.jpg" alt="" />
        <h6>Cine, Libros y Música</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/27/83/81/27838179c154522a65f8ec15003a21b2.jpg" alt="" />
        <h6>Hogar y Jardín</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/c8/b5/4d/c8b54df6612c64221c228883a8896657.jpg" alt="" />
        <h6>Videojuegos
juegos</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/cb/94/6c/cb946c3d91b53a090866ed11e4c6edef.jpg" alt="" />
        <h6>Deporte y ocio</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/c7/9b/ac/c79bacee9d07fa760b9f981130758216.jpg" alt="" />
        <h6>Artículos infantiles</h6>
    </div>
    <div className="item" >
    <img className="imgStyle" src="https://i.pinimg.com/564x/3e/90/15/3e901597308cba363453d893ee749940.jpg" alt="" />
        <h6>Otros</h6>
    </div>
   </div>
  )
}
export default Slick;