import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import {searchGoogle} from '../../store/search/searchActions';


class Search extends Component {

    state = {
        location: {},
        serviceable: null
    };

    render() {
        let {serviceable} = this.state;

        return (
            <div className="search">
                <h3>Search Address</h3>
                <SearchInput handelSubmit={searchGoogle} />
                {serviceable !== null ? serviceable ? 'Yes we can' : 'Unfortunately not today!' : 'Search away my boy'}
            </div>
        )
    }
}

export default connect(
    state => ({
        location: state.search,
        serviceable: null
    }),
    {searchGoogle}
)(Search);