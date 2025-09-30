import React, { useState } from 'react';
import styles from './SearchInput.module.css';

import SearchIcon from './SearchIcon/SearchIcon'

const SearchInput = ({ placeholder = 'digite aqui o que procura', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (onSearch) {
        onSearch(searchTerm);
      }
    }
  };

  return (
    <form className={styles.searchContainer} role="search" onSubmit={(e) => e.preventDefault()}>
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
        aria-label="Campo de busca" 
      />
    </form>
  );
};

export default SearchInput;