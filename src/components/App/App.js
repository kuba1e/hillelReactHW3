import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ItemTable from "../ItemsTable";
import ItemForm from "../ItemForm";

export default class App extends Component {
  startId = 1;

  state = {
    itemsArray: [],
    formActive: false,
  };

  componentDidMount() {
    this.setState({
      itemsArray: this.getItemsFromLocalStorage(),
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.itemsArray !== this.state.itemsArray) {
      this.updateItemsOnLocalStorage(this.state.itemsArray);
    }
  }

  getItemsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("items")) || [];
  };

  updateItemsOnLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  createId = (arr) => {
    if (!arr.length) {
      return this.startId;
    }
    return arr.at(-1).id + 1;
  };

  createItem = (firstName, secondName, phoneNumber) => {
    const newItem = {
      id: this.createId(this.state.itemsArray),
      firstName,
      secondName,
      phoneNumber,
    };
    this.setState(({ itemsArray }) => {
      return {
        itemsArray: [...itemsArray, newItem],
      };
    });
  };

  onActiveForm = () => {
    this.setState(({ formActive }) => ({
      formActive: !formActive,
    }));
  };

  onDeleteItem = (id) => {
    this.setState(({ itemsArray }) => ({
      itemsArray: itemsArray.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { itemsArray, formActive } = this.state;
    const form = formActive ? (
      <ItemForm
        onFormSubmit={this.createItem}
        onActiveForm={this.onActiveForm}
      />
    ) : null;

    const addBtn = !formActive ? (
      <button
        type="button"
        className="btn btn-success add-btn"
        onClick={this.onActiveForm}
      >
        Add contact
      </button>
    ) : null;

    return (
      <div className="container-sm	row justify-content-center align-items-center">
        <ItemTable itemsArray={itemsArray} onDeleteItem={this.onDeleteItem} />
        {addBtn}
        {form}
      </div>
    );
  }
}
