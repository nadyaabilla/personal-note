import React from 'react';

const Search = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Cari Catatan"
      className="search-input"
    />
  );
};

export default Search;
