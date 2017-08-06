import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import fetchProperties from '../../store/properties/propertiesActions';
import PropertyItem from './PropertyItem';
import './style.css';

class PropertyList extends Component {
    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {
        return (
            <div name="PropertyList" className="propertyList container-fluid push">
                <div className="container Title-header">
                    <h3>Your current listing&apos;s</h3>
                </div>
                {
                    this.props.properties && this.props.properties.map((property, index) =>
                        <PropertyItem property={property} key={index.toString()} />
                    )
                }
            </div>
        );
    }
}

PropertyList.propTypes = {
    fetchProperties: PropTypes.func.isRequired,
    properties: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(
    state => ({
        properties: state.properties
    }),
    {fetchProperties}
)(PropertyList);
