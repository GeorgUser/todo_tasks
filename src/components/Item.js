import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { item, removeItem } = this.props;
    const { packed, id, value } = item;
    return (
      <li className="item-box">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={packed}
            onChange={() => {}}
            id={id}
          />
          <label className="form-check-label" htmlFor={id}>
            {" "}
            {value}
          </label>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={removeItem(id)}>
          Remove
        </button>
      </li>
    );
  }
}

export default Item;
