import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import {NavLink} from 'react-router-dom';
import './slider.css';
//import {products} from './productdata';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slider = ({title,products}) => {
  console.log('Products:', products);
  return (
    <div className='products_section'>
      <div className='products_deal'>
        <h3>{title}</h3>
        <button className='view_btn'>View All</button>
      </div>
      <Divider/>
      <Carousel 
      responsive={responsive}
      infinite={true}
      draggable={false}
      swipeable={true}
      showDots={false}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
        {
  products.map((e, index) => {
    return (
      <NavLink to={`/getproductsone/${e.id}`}>
      <div key={index} className='products_items'>
        <div className='poduct_img'>
          <img src={e.url} alt={e.title.shortTitle} />
        </div>
        <p>{e.title.shortTitle}</p>
        <p>{e.discount}</p>
        <p>{e.tagline}</p>
      </div>
      </NavLink>
    );
  })
}

      </Carousel>
    </div>
  )
}

export default Slider