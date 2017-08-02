import React, {Component} from 'react';
import PropertyItem from './PropertyItem';
import {fetchProperties} from '../../store/properties/propertiesActions';
import {connect} from 'react-redux';
import './style.css';

class PropertyList extends Component {

    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {
        return (
            <div name="PropertyList" className="propertyList container-fluid">
                <div className="container Title-header">
                    <h3>Your current listing's</h3>
                </div>
                {
                    this.props.properties && this.props.properties.map((p, i) => <PropertyItem property={p} key={i}/>)
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        properties: state.properties
    }),
    {fetchProperties}
)(PropertyList);