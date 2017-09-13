import React from 'react';
import { NavLink } from 'react-router-dom';
import TiChevronLeft from 'react-icons/lib/ti/chevron-left';
import TiChevronRight from 'react-icons/lib/ti/chevron-right';

const PageArrow = (props) => {
  let style = `page-arrow ${props.classNameArrow}`;
  return (
    <NavLink
      className={style}
      to={`/${props.dest}`}>
      {props.classNameArrow === '' ?
        <TiChevronLeft className="page-arrow--icon"/>
        :
        <TiChevronRight className="page-arrow--icon"/>
      }
    </NavLink>
  );
};

PageArrow.defaultProps = {
  dest: '',
  classNameArrow: ''
};

export default PageArrow;