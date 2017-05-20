import React, { Component } from 'react'

class Wine extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <a className="image featured"><img src="img/wine.jpg" alt=""/></a>
                <div className="row">
                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Wines That Even Top Sommeliers Will Love</h2>
                      </header>
                      <p>
                        We have a stellar collection of wines from all over the world!
                        Each bottle is carefully chosen so that you get a wide range
                        to choose from at prices that won’t break the bank.
                      </p>
                      <p>
                        At Ace Liquor & Wine, we have sweet wines, dry wines, spiced wines,
                        and more. If you’re in the market for a wine, our helpful staff
                        will help you choose the right one!
                      </p>
                    </section>
                  </div>

                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Our Wine Options</h2>
                      </header>
                      <ul>
                        <li>Red wines</li>
                        <li>White wines</li>
                        <li>Specialty wines</li>
                      </ul>
                      <p>
                        For more options, drop by our store at Nanuet. You can also check out our specials!
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Wine