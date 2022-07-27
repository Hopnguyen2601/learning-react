import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

Pagination.propTypes = {

};

function Pagination(props) {
  return (
    <div className='containerFooter'>
      <div className='containerFooter__page'>
        {'<'}
      </div>
      <div className='containerFooter__page'>
        1
      </div>
      <div className='containerFooter__page'>
        2
      </div>
      <div className='containerFooter__page'>
        3
      </div>
      <div className='containerFooter__page'>
        {'>'}
      </div>
    </div>
  );
}

export default Pagination;