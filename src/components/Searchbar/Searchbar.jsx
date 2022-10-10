import PropTypes from 'prop-types';
import { Formik, Form, Field } from "formik"
import { SearchBar } from "./Searchbar.styled"
import Notiflix from "notiflix"

export const Searchbar = ({onSubmit}) => {
  const handleSubmit = (value, actions) => {
    if (value.query.trim() === '') {
      Notiflix.Notify.warning('Please type something');
      return
    }
    onSubmit(value);
    actions.resetForm()
  }
    return (
      <SearchBar >
        <Formik
              initialValues={{query:''}}
                onSubmit={handleSubmit}>
    
              <Form  className="SearchForm">
              <button className="SearchForm-button" type="submit">
                <span className="SearchForm-button-label">Search</span>
              </button>
            <Field
              className='SearchForm-input '
              name='query'
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            </Form>
            </Formik>
</SearchBar>
    )
} 

Searchbar.propType={
  onSubmit: PropTypes.func.isRequired
}