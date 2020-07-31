import React, { Component } from 'react'
import classes from './ContactData.module.css';
import Button from '../Button';
import Input from '../Input';
import Spinner from '../Spinner'
import axios from 'axios';

class ContactData extends Component {
  state = {
    messageform: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      message: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Message",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    loading: false,
    formIsValid: false,
  };

  messageHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.messageform) {
      formData[formElementIdentifier] = this.state.messageform[
        formElementIdentifier
      ].value;
    }
    // alert("Go ahead");
    const message = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      messageData: formData,
    };
    axios
      .post("/messages.json", message)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  checkValidity(value, rules) {
    let isValid = true;

    // if validation: {} doesnt work on delivery method;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  } 

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedMessageForm = {
      ...this.state.messageform,
    };
    const updatedFormElement = {
      ...updatedMessageForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedMessageForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedMessageForm) {
      formIsValid = updatedMessageForm[inputIdentifier].valid && formIsValid;
    }
    console.log(formIsValid);
    this.setState({messageform: updatedMessageForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.messageform) {
      formElementsArray.push({
        id: key,
        config: this.state.messageform[key],
      });
    }
    let form = (
      <form onSubmit={this.messageHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            className={classes.Input}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          SEND MESSAGE
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Contact Me</h4>
        {form}
      </div>
    );
  }
}

export default ContactData
