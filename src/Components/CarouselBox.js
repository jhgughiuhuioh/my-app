 import React, { Component } from 'react';
 import Carousel  from 'react-bootstrap/Carousel';
 import notebookImg from "../assets/notebook.jpg"
 import glassesImg from "../assets/glasses.jpg"
 import maskImg from "../assets/mask.jpg"
import girlImg from "../assets/girl.jpg"
import { CarouselItem } from 'react-bootstrap';
 
 export default class CarouselBox extends Component {
     render() {
         return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ notebookImg } 
                        alt="Notebook"
                    />
                   </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ glassesImg } 
                        alt="Glasses"
                    />
                </Carousel.Item> 

                <Carousel.Item>
                   <img 
                       className="d-block w-100"
                       src={ maskImg } 
                       alt="Mask"
                   />
                </Carousel.Item>

                <Carousel.Item>
                   <img 
                       className="d-block w-100"
                       src={ girlImg } 
                       alt="Girl"
                   />
                </Carousel.Item>
               
            </Carousel>
         );
     }
 }
 
 