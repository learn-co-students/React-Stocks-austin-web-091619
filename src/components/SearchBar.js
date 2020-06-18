import React from 'react';

const SearchBar = (props) => {



  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="name" checked={props.sort==="name"? true : false} onChange={props.handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" checked={props.sort==="price"? true : false} onChange={props.handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
