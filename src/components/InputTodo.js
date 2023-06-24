import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addTodoProps }) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const [showError, setShowError] = useState(false);

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="to-do-input">
      <form className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button
          type="submit"
          className="input-submit"
          label="submit"
          onClick={handleSubmit}
        >
          <FaPlusCircle />
        </button>
      </form>
      {showError && (
        <p
          className="error"
          style={{ visibility: inputText.title.trim() ? 'hidden' : 'visible' }}
        >
          Please write an item
        </p>
      )}
    </div>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
