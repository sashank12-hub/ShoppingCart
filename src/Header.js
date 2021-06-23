import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";
import {useSelector} from 'react-redux'
import{Link} from 'react-router-dom'
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  console.log(history.location.pathname)
  //const total = useSelector(state => state.total)
  let cart = useSelector(state => state.cart)
  let count=0;
  cart=cart.map(item=>{
    count=count+item.count;
    return item;
  })

  return (
    <div className="header">
      <div className="left">
        <img
          alt="logo"
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
        />
        <h4>Happay</h4>
      </div>
      <div className="right">
      {history.location.pathname!=="/shoppingCart/cart"?<Link  to="/shoppingCart/cart">
      <IconButton>
    
      <div className="circle">{count}</div>
        <ShoppingCartIcon className="cart" />
      
      </IconButton>
      </Link>:''}
      
        <IconButton>
         
        <Avatar alt="profile"src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random()*5000)}.svg`}/>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
