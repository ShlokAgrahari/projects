import React, { useEffect } from 'react'
import Banner from './Banner'
import Slider from './Slider';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";

const Maincomponent = () => {
  const {products} = useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch=useDispatch();


  useEffect(()=>{dispatch(getProducts());},[dispatch])
    return (
      <div className='home_section'>
        <div className='banner_part'>
          <Banner/>
        </div>
        <div className='slide_part'>
          <div className='left_slide'>
          <Slider title="Deal of the Day" products={products}/>
          </div>
          <div className='right_slide'>
            <h4>Festive Lanches</h4>
            <img src="https://static.india.com/wp-content/uploads/2023/10/Amazon-Great-Indian-Festival-Sale-2023.jpg" alt="pic"/>
            <a href='See More'>See More</a>
          </div>
        </div>
        <Slider title="Today's deal" products={products}/>
        <Slider title="80% Off" products={products}/>
        <Slider title="Best Seller" products={products}/>
      </div>
    );
  }
  

export default Maincomponent