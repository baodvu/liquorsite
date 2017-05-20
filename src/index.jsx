import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './header.jsx'
import Home from './content/home.jsx'
import Wine from './content/wine.jsx'
import Vodka from './content/vodka.jsx'
import Champagne from './content/champagne.jsx'
import Liquor from './content/liquor.jsx'
import Rum from './content/rum.jsx'
import Whiskey from './content/whiskey.jsx'
import Contact from './content/contact.jsx'
import Footer from './footer.jsx'

let reducer = (state = {}, action) => {}

let store = createStore(reducer)

const App = () => (
  <div>
    <div id="page-wrapper">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/wine' component={Wine}/>
        <Route path='/vodka' component={Vodka}/>
        <Route path='/champagne' component={Champagne}/>
        <Route path='/liquor' component={Liquor}/>
        <Route path='/rum' component={Rum}/>
        <Route path='/whiskey' component={Whiskey}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer />
    </div>
  </div>
)

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('content'))