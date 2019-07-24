import React, {Component} from "react";
import Item from "./Item";
import Filter from "./Filter";

class ListItems extends Component {
    state = {
        filter: ''
    };

    updateFilter = searchTerm => {
        this.setState(({filter: searchTerm}))
    };

    render() {
        const {title, items, removeItem, togleItem} = this.props;
        const {filter} = this.state;
        const filterItems = items.filter(item => item.value.toLowerCase().includes(filter.toLowerCase()));
        return (
            <section>
                <h3 className="mb-3">{title}</h3>
                <Filter filter={filter} onChange={this.updateFilter}/>
                <ul className="mb-3 p-0">
                    {filterItems.map(item =>
                        <Item key={item.id}
                              item={item}
                              removeItem={removeItem}
                              togleItem={togleItem}
                        />)}
                </ul>
            </section>
        );
    }
}

export default ListItems;
