import React from 'react'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(){
    return (
      <div id="footer-wrapper">
        <section id="footer" className="container">
          <div className="row">
            <div className="5u 12u(mobile)">
              <h3>Business Hours</h3>
              <p>Monday to Thursday - 11:00 AM to 9:00 PM<br/>
                Friday and Saturday - 11:00 AM to 10:00 PM<br/>
                Sunday - 12:00 PM to 7:00 PM</p>
            </div>
            <div className="5u 12u(mobile)">
              <h3>Contact Us</h3>
              <p>34 N Middletown Road, Nanuet, NY 10954<br/>
                (845) 623-2157<br/>
                newaceliquor@outlook.com</p>
            </div>
            <div className="2u 12u(mobile)">
              <ul className="social">
                <li><a className="icon fa-facebook" href="https://www.facebook.com/aceliquorandwine">
                <span className="label">Facebook</span></a></li>
                <li><a className="icon fa-twitter" href="https://twitter.com/AceLiquorWi">
                <span className="label">Twitter</span></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="12u">
              <div id="copyright">
                <ul className="links">
                  <li>&copy; Ace Liquor & Wine. All rights reserved.</li>
                  <li>Powered by HTML5</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>);
  }
}

export default Footer