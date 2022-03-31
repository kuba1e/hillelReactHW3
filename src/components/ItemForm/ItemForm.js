import React, { Component } from "react";
import "./ItemForm.css";

export default class ItemForm extends Component {
  state = {
    firstName: "",
    secondName: "",
    phoneNumber: "",
  };

  onInputChange = ({ target }) => {
    const inputName = target.name;
    const inputValue = target.value;
    this.setState({
      [inputName]: inputValue,
    });
  };

  onFormReset = () => {
    this.setState({
      firstName: "",
      secondName: "",
      phoneNumber: "",
    });
  };

  render() {
    const { firstName, secondName, phoneNumber } = this.state;
    const { onFormSubmit, onActiveForm } = this.props;
    return (
      <form
        className="form row g-3"
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit(firstName, secondName, phoneNumber);
          this.onFormReset();
          onActiveForm();
        }}
        onReset={() => {
          this.onFormReset();
        }}
      >
        <div className="input-group mb-3">
          <span className="input-group-text">First Name</span>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={this.onInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Second Name</span>
          <input
            type="text"
            className="form-control"
            name="secondName"
            value={secondName}
            onChange={this.onInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Phone Number</span>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.onInputChange}
          />
        </div>
        <div className="btns">
          <button className="btn btn-success" type="submit">
            Save
          </button>
          <button
            className="btn btn-danger"
            type="reset"
            onClick={onActiveForm}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
