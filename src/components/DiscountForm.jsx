import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Alert from './Alert';
import Loading from './Loading';
import DiscountApi from '../api';

const Form = styled.form`
  text-align: left;
`;

const Container = styled.div`
  text-align: center;
`;

class DiscountForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serial: '',
      isSaving: false,
      message: '',
      info: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({isSaving: true, info: false, message: ''});
    DiscountApi.getDiscount(this.state.serial).then((response) => {
      if (response.non_field_errors) {
        this.setState({isSaving: false, message: response.non_field_errors[0]});
      } else {
        this.setState({isSaving: false, info: true, message: `Discount: ${response.discount}`});
      }
    })
  }

  render() {
    const {isSaving, info, message} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
          {message && (
            <Container>
              <Alert info={info}>{message}</Alert>
            </Container>
          )}
          {isSaving && <Loading />}
        <Container>
          <Input 
            placeholder="Serial number" 
            value={this.state.serial} 
            onChange={(e) => {
              this.setState({serial: e.target.value});
            }} 
            required/>
          <Button type="submit" primary>Submit</Button>
        </Container>
      </Form>
    )
  }
}

export default DiscountForm;