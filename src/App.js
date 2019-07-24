import React, {Component} from "react";
import { generate as id } from "shortid";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import {defaultState} from "./data";

class App extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.setState({items: defaultState})
    }

    allUnpacked = e =>
        this.setState(({items}) => ({
            items: items.map(item => ({...item, packed: false}))
        }));

    removeItem = id => e =>
        this.setState(({items}) => ({
        items: items.filter(item => item.id !== id)
    }));

    togleItem = id => e =>
        this.setState(({items}) => ({
            items: items.map(item =>
                item.id !== id ? item : {...item, packed: !item.packed}
            )
        }));

    addTask = value => this.setState(({items}) => ( {items: [{value, id: id(), packed: false} , ...items]}));

    render() {
        const {items} = this.state;
        const unpackedItems = items.filter(({packed}) => !packed);
        const packedItems = items.filter(({packed}) => packed);
        return (
            <div className="container py-3">
                <NewItem addTask={this.addTask}/>
                <div className="row">
                    <div className="col-md-5">
                        <ListItems
                            title="Unpacked Items"
                            items={unpackedItems}
                            removeItem={this.removeItem}
                            togleItem={this.togleItem}
                        />
                    </div>
                    <div className="offset-md-2 col-md-5">
                        <ListItems
                            title="Packed Items"
                            items={packedItems}
                            removeItem={this.removeItem}
                            togleItem={this.togleItem}
                        />
                        <button className="btn btn-danger btn-lg btn-block" onClick={this.allUnpacked}>
                            Mark All As Unpacked
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
