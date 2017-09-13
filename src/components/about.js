import React from 'react';
import PageArrow from './pageArrow';

const About = () => {
  return (<div>
    <h2>About</h2>
    <PageArrow/>
    <PageArrow classNameArrow='right' dest='projects'/>
  </div>);
};

export default About;