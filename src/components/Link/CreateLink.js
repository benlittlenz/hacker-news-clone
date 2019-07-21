import React, { useContext } from "react";
import useFormValidation from '../Auth/useFormValidation';
import validateCreateLink from '../Auth/validateCreateLink';

import FirebaseContext from '../../firebase/context';

const INITAL_STATE = {
  description: '',
  url: ''
}

const CreateLink = props => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITAL_STATE, 
    validateCreateLink, 
    handleCreateLink
  )

  function handleCreateLink() {
    if(!user) {
      props.history.push('/login');
    } else {
      const {url, description } = values;
      const newLink = {
        url,
        description,
        postedBy: {
          id: user.uid,
          name: user.displayName
        },
        votes: [],
        comments: [],
        created: Date.now()
      }
      firebase.db.collection('links').add(newLink);
      props.history.push('/')
    }
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
        type="url"
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