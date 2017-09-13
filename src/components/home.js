import React from 'react';
import PageArrow from './pageArrow';

const Home = () => {
  return (<div>
    <h2>Home</h2>
    <PageArrow classNameArrow='right' dest='about'/>
  </div>);
}

export default Home;