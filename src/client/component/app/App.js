import React from 'react';
import PropertyList from '../properties/PropertyList';
import Search from '../search/Search';
import NavBar from './NavBar';
import './App.css';

const App = () =>
    <div className="App">
        <NavBar />
        <PropertyList />
        <Search />
    </div>;

export default App;
