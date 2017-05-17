import React from 'react'

class Wine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: 'wine'
    };
  }

  render(){
    return (
      <div className="main-wrapper">
        <div className="container">
          <article className="box post">
            <a className="image featured"><img src="img/wine_banner.jpg" alt=""/></a>
            <section>
              <header>
                <h3>Wines That Even Top Sommeliers Will Love</h3>
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
            <section>
              <header>
                <h3>Our Wine Options</h3>
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
          </article>
        </div>
      </div>);
  }
}

export default Wine