import PropTypes from 'prop-types';
import React, {Component} from 'react';

class SearchInput extends Component {
    state = {
        address: ''
    };

    handleSearchInput = (event) => {
        this.setState({address: event.target.value});
    };

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.props.handelSubmit(this.state.address);
        this.setState({address: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSearchSubmit}>
                <input type="text" value={this.state.address} onChange={this.handleSearchInput} />
            </form>
        );
    }
}

SearchInput.propTypes = {
    handelSubmit: PropTypes.func.isRequired
};

export default SearchInput;
