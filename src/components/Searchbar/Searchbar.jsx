import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import style from './searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warning('Search field is empty!');
    }
    onSubmit(searchQuery);

    reset();
  };

  const handleChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={style.SearchForm_input}
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
