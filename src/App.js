import React from 'react'
import { useSelector} from 'react-redux'
import Home from './Home'
import CartPage from './CartPage'
import{Link,BrowserRouter,Route,Switch} from 'react-router-dom'
const App = () => {
  const state = useSelector(state => state)
 // console.log(state.data.default);
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/ShoppingCart" component={Home}/>
    <Route exact path="/ShoppingCart/cart" component={CartPage}/>
    
    </Switch>
    
    </BrowserRouter>
   
  )
}

export default App
