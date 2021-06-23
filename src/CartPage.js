import React from 'react'
import Header from './Header'
import './cartPage.css';
import { useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { ArrowLeft, InfoRounded } from '@material-ui/icons'
import {useDispatch} from 'react-redux'
import{setTotal,addtocart,removefromcart} from './redux/action'
//import { removefromcart } from './redux/types';


const CartPage = () => {
    const dispatch = useDispatch()
    let cart = useSelector(state => state.cart)
    let totalCost=0;
     cart=cart.map(item=>{
        totalCost=totalCost+item.cost*item.count;
        return item;
      })
    const history = useHistory();
    
    

    const handleCountdown=(item)=>{
        dispatch(removefromcart(item));
      
    
    }
    const handleCountup=(item)=>{
        dispatch(addtocart(item));
        
    }
    return (
        <div>
        <Header/> 
        <div className="cart_main1">
        <button style={{backgroundColor:"transparent",color:"gray",border:"none"}} onClick={()=>history.goBack()}> <ArrowLeft/> Back to Home</button>
        <h4 style={{marginTop:"20px"}}>Order Summary( {cart.length} items)</h4>
        <div className="cart_main2">
        <div className="main21">

        <table>
        <thead>
        <tr className="">
        <th>S. No.</th>
       <th>Items</th>
       <th colSpan="2">QTY</th>
        </tr>
        </thead>
        <tbody>
        {cart.map((item,index)=><tr className="">
        <td>{index}</td>
       <td>{item.name}</td>
       <td colSpan="2">
       <div className="main21_wrapper">
       <button className="subb" onClick={(e)=>{handleCountdown(item)}}>-</button>
       <p style={{backgroundColor:"transparent",
       border:"0.5px solid #4e5565",width:"50px",
       position:"relative",top:"8px",borderRadius:"5px"}}>{item.count}</p>
        <button className="addd" onClick={(e)=>{handleCountup(item)}}>+</button>
       </div> </td>
        
        </tr>)}
        </tbody>
        
        </table>
        <h1></h1>
       <div>
       <p onClick={()=>{}} style={{color:"skyblue",marginTop:"10px",marginLeft:"20px",fontWeight:"bold"}}>+ Add more items</p>
       </div>
       
        </div>
        <div className="main22">
        <h5 className="main22_heading" >Price Details</h5>
        <div>
        {cart.map(item=><div className="costperitem">
        <div className="middle1">  <h5>{item.count} * $ {parseInt((item.cost)).toFixed(2)}</h5></div>
           <div> <h5>$ {(parseInt(item.cost)*parseInt(item.count)).toFixed(2)}</h5></div>
               
        </div>)}</div>
        <div className="main22_middle_section">
        <div className="middlecontent">
        <div className="middle1"> <p>Total Savings</p></div>
        <div><p style={{color: 'green'}}>- $ 5.00 </p></div>
        
        </div>
        <div className="middlecontent">
        <div className="middle1">
        <p>Delivery Fee</p></div>
       <div> <p>$ 5.00 </p></div>
       
        </div>
        <div className="middlecontent">
        <div className="middle1"><p>Taxes and charges <InfoRounded/></p></div>
        <div> <p>$ 5.00 </p></div>
       
        </div>
      

        </div>
        <div className="middlecontent">
        <div className="middle1"><p>To Pay</p></div>
        <div> <p style={{fontWeight:"bold",fontSize:"20px",color:"rgba(0,0,0,0.7)"}}>{totalCost+5}</p></div>
        
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default CartPage