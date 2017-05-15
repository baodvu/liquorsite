import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './header.jsx'
import Home from './home.jsx'
import Wine from './wine.jsx'
import Footer from './footer.jsx'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/wine' component={Wine}/>
    </Switch>
    <Footer />
  </div>
)

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('container'))