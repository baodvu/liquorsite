import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: 'wine'
    };
  }

  render(){
    return (
      <div id="header-wrapper">
        <div id="header">
          <h1><a href="/">Ace Liquor & Wine</a></h1>
          <nav id="nav">
            <ul>
              <li className={(this.state.activePath === "home") ? "current" : ""}><a href="/">Home</a></li>
              <li className={(this.state.activePath === "wine") ? "current" : ""}><a href="wine">Wine</a></li>
              <li><a href="liquor">Liquor</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>);
  }
}

export default Header