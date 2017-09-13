import React from 'react';
import PageArrow from './pageArrow';

const Projects = () => {
  return (<div>
    <h2>Projects</h2>
    <PageArrow dest='about'/>
    <PageArrow classNameArrow='right' dest='contact'/>
  </div>);
}

export default Projects;