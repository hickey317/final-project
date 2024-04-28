import React from 'react';
import './enjoyClimbing.css';

const SearchArea = () => {
  return (
    <div className="search-area">
      <h2>Find the routes</h2> {/* Keep the title on its own line */}
      <div className="search-controls"> {/* Flex container for the controls */}
        <input type="text" placeholder="Postal code" />
        <button>submit</button>
        <label>
          <input type="radio" name="climbingType" value="bouldering" /> Bouldering
        </label>
        <label>
          <input type="radio" name="climbingType" value="toprope" /> Top Rope
        </label>
      </div>
    </div>
  );
}

export default SearchArea;
