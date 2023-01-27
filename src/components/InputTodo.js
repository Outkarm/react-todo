import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const err = document.querySelector('.error');
  const handleSubmit = (e) => {
    const { addTodoProps } = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
      err.style.visibility = 'hidden';
    } else {
      err.style.visibility = 'visible';
    }
  };

  return (
    <div className="to-do-input">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button type="button" className="input-submit" label="submit"><FaPlusCircle /></button>
      </form>
      <p className="error">Please write an item</p>
    </div>
  );
};
InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
