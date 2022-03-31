import React, { Component, Fragment } from "react";
import "./Item.css";

export default class Item extends Component {
  render() {
    const {
      item: { id, firstName, secondName, phoneNumber },
      index,
      onDeleteItem,
    } = this.props;
    return (
      <Fragment>
        <th scope="row">{index + 1}</th>
        <td>{firstName}</td>
        <td>{secondName}</td>
        <td>{phoneNumber}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove-btn"
            onClick={() => onDeleteItem(id)}
          ></button>
        </td>
      </Fragment>
    );
  }
}
