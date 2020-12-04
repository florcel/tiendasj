import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import CartContextProvider from './context/CartContext';

function App() {

  return (
    <CartContextProvider>
    <div>
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Route path='/item/:id'> <ItemDetailContainer /> </Route>
    <Route exact path='/'> <Home /> </Route>
    <Route exact path='/cart/'> < CartContainer /> </Route>
    </Switch>
    <Footer />
    </BrowserRouter>
    </div>
    </CartContextProvider>
  );
}


export default App;

