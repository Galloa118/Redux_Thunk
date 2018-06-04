import React from 'react';
import { FormGroup, Label, Input, Row, Col} from 'reactstrap';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <FormGroup>
    <Row>
      <Col lg={2} className="keyword_label">
        <Label>{label}</Label>
      </Col>
      <Col lg={10}>
        <Input {...input} placeholder={'Enter username...'} type={type} className='user-input' />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </Col>
    </Row>
  </FormGroup>
);

export default renderField;
