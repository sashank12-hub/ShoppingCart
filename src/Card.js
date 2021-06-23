/* eslint-disable eqeqeq */
import React,{useEffect,useState} from 'react'
import './Card.css'
import {IconButton } from "@material-ui/core";
import {useDispatch,useSelector} from 'react-redux'
import{setTotal,addtocart,removefromcart} from './redux/action'


const Card = ({item}) => {
    const [count, setcount] = useState(0)
    const [clicked, setclicked] = useState(false);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const a=cart.filter(cart_item=>cart_item.id==item.id)
    useEffect(() => {
        console.log(a)
       if(a[0]?.count>0){
         setcount(a[0].count)
           setclicked(true)
       }
       
    }, []);
    useEffect(() => {
       if(count<0){
        setclicked(false)
        setcount(0)
       }
      
    }, [count]);
const handleCountdown=()=>{
    console.log(a)
    if(count>0){
        setcount(count=>count-1)
        dispatch(setTotal('-1'))
       
        dispatch(removefromcart(item));
    }
    else{
        setcount(count=>count-1)
        dispatch(setTotal('-1'))
    }
    

}
const handleCountup=()=>{
    setcount(count=>count+1)
    dispatch(setTotal('+1'))
    dispatch(addtocart(item));
}
    console.log(item)
   const {id,img_url,name,description,final_price,original_price,discount}=item;
    
    return (
        <div className="card" key={id}>
        <div className="image">
        <img alt={name}src={img_url}/>
        {discount? <div className="discountband">{`${discount}% OFF`}</div>:""}
       
        </div>
       
        <div className="content">
        <div className="content1">
        <div><h5>{name}</h5></div>
       
        <div className="cost">
        {original_price? 
            <p style={{textDecoration: "line-through",color:"gray"}}>$ {parseInt((original_price)).toFixed(2)}</p>:""}
       
        <p style={{ fontWeight: "bold",fontSize:"20px"}}>$  {parseInt((final_price)).toFixed(2)}</p>
        </div>
        </div>
        <div className="content2">
        {description}
        </div>
      {clicked===false? <button className="button" onClick={()=>{setclicked(true)
        dispatch(setTotal('+1'))}}>Add to cart</button>
    
    
    :<div className="wrapper">
    <button className="sub" onClick={()=>{handleCountdown(item)}}>-</button>
    <h5 className="countt">{count}</h5>
    <button className="add" onClick={()=>{handleCountup(item)}}>+</button>
    </div>
}
       
        
        </div>
        <div className="textbox">
       
       
        </div>
            
        </div>
    )
}

export default Card
