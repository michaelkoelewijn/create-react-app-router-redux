import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';


export default (props) => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>
      

      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  )
}
