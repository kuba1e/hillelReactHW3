import React, { Component } from "react";
import Item from "../Item/";

export default class ItemTable extends Component {
  render() {
    const { itemsArray, onDeleteItem } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Second Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Delete contact</th>
          </tr>
        </thead>
        <tbody>
          {itemsArray.map((item, index) => {
            return (
              <tr key={item.id}>
                <Item item={item} index={index} onDeleteItem={onDeleteItem} />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
