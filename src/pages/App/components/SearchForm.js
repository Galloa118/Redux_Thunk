import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Row, Container } from 'reactstrap';
import renderField from './renderField';

const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = 'Required';
  }
  return errors;
};

const SearchForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}>
      <Row>
        <Col lg={10}>
          <Field
            name="keyword"
            component={renderField}
            type="text"
            label="Keyword:"
            placeholder="Enter a keyword"
          />
        </Col>
        <Col lg={2}>
          <Button type="submit" color='primary' disabled={pristine || submitting}>
            Search
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'searchForm',
  validate,
})(SearchForm);
