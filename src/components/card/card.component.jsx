import React from 'react';

import './card.styles.css'

export const Card = props => (
  <div className='card-item'>
    <h1>{props.card.name}</h1>
  </div>
);