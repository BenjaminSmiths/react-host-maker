import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import PropertyList from '../properties/PropertyList';
import './App.css';
import Search from '../search/Search';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to HostMaker</h2>
                </div>
                <PropertyList />
                <Search />
            </div>
        );
    }
}

export default App;
