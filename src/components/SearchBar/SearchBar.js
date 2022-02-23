import PropTypes from 'prop-types';
import s from './SearchBar.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Searchbar({ onSubmitForm }) {
  const [query, setQuery] = useState('');

  const handleFilmChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.info('Please, give me text for search!');
      return;
    }
    onSubmitForm(query);
    setQuery('');
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchForm__input}
        type="text"
        value={query}
        onChange={handleFilmChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit" className={s.SearchForm__button}>
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
