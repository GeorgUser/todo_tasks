import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class ListItems extends Component {
  state = {};

  updateFilter = searchTerm => {};

  render() {
    const { title, items, flag } = this.props;
    return (
      <section>
        <h3 className="mb-3">{title}</h3>
        <Filter filter={""} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">
            {items.map(item => <Item key={item.id} item={item} />)}
        </ul>
      </section>
    );
  }
}

export default ListItems;
