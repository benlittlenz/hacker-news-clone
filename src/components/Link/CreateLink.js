import React from "react";
import useFormValidation from '../Auth/useFormValidation';
import validateCreateLink from '../Auth/validateCreateLink';

const INITAL_STATE = {
  description: '',
  url: ''
}

const CreateLink = props => {
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITAL_STATE, 
    validateCreateLink, 
    handleCreateLink
  )

  function handleCreateLink() {
    console.log('link created')
  }
  return (
    <form 
      className="flex flex-column mt3"
    >
      <input 
        onChange={handleChange}
        value={values.description}
        name="description"
        placeholder="description for your link"
        autoComplete="off"
        type="text"
        className={errors.description && 'error-input'}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}
      <input 
        onChange={handleChange}
        value={values.url}
        name="url"
        placeholder="url for your link"
        autoComplete="off"
        type="text"
        className={errors.url && 'error-input'}
      />
      {errors.url && <p className="error-text">{errors.url}</p>}
      <button
        onClick={handleSubmit}
        className="button"
        type="button"
      >
      Submit
      </button>
    </form>
  );
}

export default CreateLink;