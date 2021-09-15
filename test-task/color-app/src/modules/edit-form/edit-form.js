import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import TableItem from '../table-item/table-item';


import './edit-form.css'

const EditForm = ({name, type, color}) => {
  return (
    <Form inline className='edit-form hide'>
      <FormGroup>
        <Input  name="name" placeholder={name} />
      </FormGroup>
 
      <FormGroup>
        <Input name="type" placeholder={type} />
      </FormGroup>

      <FormGroup>
        <Input name="color" type="color" placeholder={color} />
      </FormGroup>

      <Button>Подтвердить</Button>
    </Form>
  );
}

export default EditForm;