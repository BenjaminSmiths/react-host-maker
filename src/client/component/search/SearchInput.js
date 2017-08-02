import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {

    state = {
        address: ''
    };

    handleSearchInput(event) {
        this.setState({address: event.target.value});
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.handelSubmit(this.state.address);
        this.setState({address: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSearchSubmit.bind(this)}>
                <input type="text"
                       value={this.state.address}
                       onChange={this.handleSearchInput.bind(this)}
                />
            </form>
        );
    }
}

SearchInput.propTypes = {
    handelSubmit: PropTypes.func.isRequired
};

export default SearchInput;