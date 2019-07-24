import React, {Component} from 'react';

class Filter extends Component {
    update = e => this.props.onChange(e.target.value);

    render() {
        const {filter} = this.props;
        return (
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={filter}
                    onChange={this.update}
                />
            </div>
        );
    }
}

export default Filter;
