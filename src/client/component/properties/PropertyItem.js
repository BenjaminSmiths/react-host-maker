import React, {Component} from 'react';
import PropTypes from 'prop-types';

const FormatUtils = {

    capFirst: (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    },

    buildAddress: ({line1, line2, line3, line4, city, country, postCode}) => {
        let house = !line2 ? [line1] : [`${line1}, ${line2}`];
        let streets = [line3, line4].filter((l) => !!l);
        let other = [`${city}, ${country}`, postCode];

        return [...house, ...streets, ...other]
            .map((val, key) => {
                return (
                    <div key={key}>{val}</div>
                );
            });
    },

    // to be replaced with a proper multi currency format
    // but it will do for now.
    formatIncome: (x, country) => {
        x = x.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) {
            x = x.replace(pattern, "$1, $2");
        }
        return x;
    }
};

class PropertyItem extends Component {

    render() {
        let {property} = this.props;

        return (
            <div>
                <div className="owner">{FormatUtils.capFirst(property.owner)}</div>
                <div className="address">
                    {
                        FormatUtils.buildAddress(property.address)
                    }
                </div>
                <div className="income">&pound;{FormatUtils.formatIncome(property.incomeGenerated)}</div>
            </div>
        )
    }
}

PropertyItem.propTypes = {
    property: PropTypes.object.isRequired
};

export default PropertyItem;