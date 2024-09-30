import React from 'react'
import './navbaar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import {NavLink} from 'react-router-dom';

const Navbaar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                <NavLink to="/"> <img src="/amazonlogo.png" alt="amazon" /></NavLink>
                 </div>
                <div className='nav_searchbaar'>
                    <input type='text'></input>
                    <div className='search_icon'>
                        <SearchIcon/>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='nav_btn'>
                    <a href='http://localhost:3000/login'>sign in</a>
                </div>
                <div className='cart_btn'>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon"/>
                 </Badge>
                 <p>  Cart</p>
                </div>
                <div>
                <Avatar className='avatar'/>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbaar