import React from 'react'

export const SearchField = ({placeholder, handleChange}) => (
  <input 
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange} 
  />
);