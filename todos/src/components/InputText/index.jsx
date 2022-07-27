import React from 'react';
import PropTypes from 'prop-types';

CreateForm.propTypes = {

};

function CreateForm(props) {
  const {
    inputClass, label,
    placeholder,name,
    value, onChange
  } = props;


  return (
    <div className={`inputText ${inputClass}`}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CreateForm;