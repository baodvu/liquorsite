import React from 'react'
import { store } from 'react-redux'
import NavLink from './nav_link.jsx'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="header-wrapper">
        <div id="header">
          <div><img src="/img/ace_logo.png"/></div>
          <nav id="nav">
            <ul>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/wine">Wine</NavLink></li>
              <li><NavLink to="/vodka">Vodka</NavLink></li>
              <li><NavLink to="/champagne">Champagne</NavLink></li>
              <li><NavLink to="/liquor">Tequila/Liquor</NavLink></li>
              <li><NavLink to="/rum">Rum/Gin</NavLink></li>
              <li><NavLink to="/whiskey">Whiskey</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>);
  }
}

export default Header