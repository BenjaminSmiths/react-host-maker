import React from 'react';
import PropertyList from '../properties/PropertyList';
import Search from '../search/Search';
import './App.css';
import NavBar from './NavBar';

const App = () =>
    <div className="App">
        <NavBar />
        <PropertyList />
        <Search />
    </div>;

export default App;
