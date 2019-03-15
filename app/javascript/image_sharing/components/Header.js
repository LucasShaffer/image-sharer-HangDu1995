import PropTypes from 'prop-types';
import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1 className='text-center'>{props.title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
