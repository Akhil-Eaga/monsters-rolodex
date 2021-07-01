import React from 'react';

import "./search-box.styles.css"

// the parameters is using destructuring to extract the placeholder out of the props object
// the placeholder text is made dynamic to reuse the component to search for something else other than monsters
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange} />
)