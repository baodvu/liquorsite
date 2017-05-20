import React, { Component } from 'react'

class Whiskey extends Component {
  render(){
    return (
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="12u">
              <section>
                <a className="image featured"><img src="img/whiskey.jpg" alt=""/></a>
                <div className="row">
                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Appease the Refined Whiskey Drinker in You</h2>
                      </header>
                      <p>
                        At Ace Liquor & Wine in Nanuet, we have a selection of whiskeys that would
                        make any whiskey connoisseur happy. Our range includes the best bourbons
                        from America and the best Scotch from Scotland!
                      </p>
                      <p>
                        Our popular choices include Jameson, Wild Turkey, Jack Daniel's,
                        Jim Beam, Bushmills and Glenlivet to name a few.
                      </p>
                    </section>
                  </div>

                  <div className="6u 12u(mobile)">
                    <section className="box">
                      <header>
                        <h2>Fast moving popular whiskeys</h2>
                      </header>
                      <ul>
                        <li>Balvenie</li>
                        <li>Knob Creek</li>
                        <li>Crown Royal</li>
                        <li>Macallan</li>
                        <li>Maker's Mark</li>
                        <li>Old Crow</li>
                        <li>Ten High</li>
                        <li>Stetson</li>
                        <li>Evan Williams</li>
                      </ul>
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

export default Whiskey