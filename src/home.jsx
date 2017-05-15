import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render(){
        return (
          <div>
            <Link to="/wine">
              <h1>Wine</h1>
            </Link>
          </div>);
    }
}

export default Home