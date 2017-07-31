import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropertyItem extends Component {

    render() {
        let {property} = this.props;

        return (
            <div>
                <div className="owner">{property.owner}</div>
                <div className="address">{Object.keys(property.address).map((key, index) => {
                    return (
                        <div key={index}>{property.address[key]}</div>
                    )
                })}</div>
                <div className="income">{property.incomeGenerated}</div>
            </div>
        )
    }
}

PropertyItem.propTypes = {
    property: PropTypes.object.isRequired
};

export default PropertyItem;