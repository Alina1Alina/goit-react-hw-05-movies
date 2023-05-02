import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchBox = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDafault();
    if (inputValue) {
      onSubmit(inputValue);
    }
  };
  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value.toLowerCase().trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" onChange={handleChange}></input>
      <button type="submit" disabled={inputValue ? false : true}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
