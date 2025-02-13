import React from 'react';

const Search = ({searchState, setSearchState}  ) => {
    
    return (
        <div className="search">
        <div>
          <img src="search.svg" alt="search icon" />
          <input
            type="text"
            placeholder="Search through movies"
            value={searchState || ""}
            onChange={(e) => setSearchState(e.target.value)}
          />
        </div>
      </div>

    );
};

export default Search;