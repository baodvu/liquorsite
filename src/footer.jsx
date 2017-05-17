import React from 'react'

class Footer extends React.Component {
  render(){
    return (
      <div id="footer-wrapper">
        <section id="footer" className="container">
          <div className="row">
            <div className="10u 12u(mobile)">
              <p>Ace Liquor & Wine | Liquor Store | Nanuet, NY</p>
              <p>845-623-2157</p>
            </div>
            <div className="2u 12u(mobile)">
              <ul className="social">
                <li><a className="icon fa-facebook" href="#">
                <span className="label">Facebook</span></a></li>
                <li><a className="icon fa-twitter" href="#">
                <span className="label">Twitter</span></a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>);
  }
}

export default Footer