import React from 'react'
import Header from './Header'
import './Home.css'
import * as data from './data';
import Card from './Card'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import {IconButton } from "@material-ui/core";
import { useSelector,useDispatch } from 'react-redux'
const Home = () => {
    const data = useSelector(state => state.data.default)
    return (
        <div>
           <Header/> 
           <div className="heading">
           <h5 style={{opacity:"0.6"}}>Most Popular</h5>
           <div className="contentt">
            <div className="line"></div>
            <IconButton><StarBorderIcon className="staricon" /></IconButton>
           
           <div className="line"></div>
           </div>
           </div>
           <div className="main">
           {data.map(item=><Card item={item}/>)}
           </div>
        </div>
    )
}

export default Home
