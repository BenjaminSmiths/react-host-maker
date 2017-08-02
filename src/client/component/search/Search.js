import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchInput from './SearchInput';
import {searchGoogle} from '../../store/search/searchActions';
import './style.css';

class Search extends Component {

    addProperty() {
        window.alert('You\'ll have to hire me before you can add it to your list');
    }

    notificationPanel(search) {
        if (search && search.formattedAddress) {
            if (search.formattedAddress && search.serviceable) {
                return <div>
                    <div className="searchedAddress found">
                        <p>{search.formattedAddress}</p>
                        <p>Yes we can service your property</p>
                    </div>
                    <form>
                        <input type="button" value="Add Now" onClick={this.addProperty.bind(this)}/>
                    </form>
                </div>
            } else {
                return <div className="searchedAddress notFound">
                    <p>{search.formattedAddress}</p>
                    <p>Unfortunately, we can not service that property at the moment</p>
                </div>
            }
        } else if (search && search.error) {
            return <div className="searchedAddress notFound">
                <p>We could not find that address</p>
            </div>
        } else {
            return <div className="searchedAddress start">
                <p>Try an address or postcode</p>
            </div>
        }
    }

    render() {
        const {searchGoogle, search} = this.props;

        return (
            <div className="row search">
                <div className="col-lg-offset-1 col-lg-5 search-panel">
                <h3>Search Address</h3>
                <SearchInput handelSubmit={searchGoogle}/>
                {
                    this.notificationPanel(search)
                }
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        search: state.search
    }),
    {searchGoogle}
)(Search);