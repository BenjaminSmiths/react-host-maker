import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = () => {

    let property = {
        'owner': 'carlos',
        'address': {
            'line1': 'Flat 5',
            'line4': '7 Westbourne Terrace',
            'postCode': 'W2 3UL',
            'city': 'London',
            'country': 'U.K.'
        },
        'incomeGenerated': 2000.34,
        'image': 'property1.jpg'
    };

    return (
        <div name="PropertyList">
            <PropertyItem property={property}></PropertyItem>
        </div>
    )
};

export default PropertyList;