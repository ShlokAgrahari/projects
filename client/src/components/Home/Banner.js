import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './banner.css';

const data = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.jpg",
    "banner4.jpg",
    "banner5.jpg",
    "banner6.jpg"
];

const Banner = () => {
  return (
    <Carousel className="carousel"
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsProps={{
      style:{
        backgroundColor:"white",
        color:"black",
        borderRadius:0,
        marginTop:-22,
        height:"104px"
      }
    }
    }>
      {data.map((image, i) => (
        <img key={i} src={image} alt={`Banner ${i}`} className="banner_img" />
      ))}
    </Carousel>
  );
};

export default Banner;
