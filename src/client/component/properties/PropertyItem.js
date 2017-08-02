import React from 'react';
import PropTypes from 'prop-types';

const PropertyItem = ({property}) =>
            <div className="container propertyItem">
                <div className="panel">
                    <div className="row headings">
                        <div className="col-xs-3">
                            Owner
                        </div>
                        <div className="col-xs-5">Address</div>
                        <div className="col-xs-3">Income Generated</div>
                    </div>
                    <div className="row details">
                        <div className="owner col-xs-3">{property.owner}</div>
                        <div className="address col-xs-5">
                            {
                                property.address.map((val, key) => {
                                    return (
                                        <div key={key}>{val}</div>
                                    );
                                })
                            }
                        </div>
                        <div className="income col-xs-4">{property.incomeGenerated}</div>
                    </div>
                </div>
            </div>;


PropertyItem.propTypes = {
    property: PropTypes.object.isRequired
};

export default PropertyItem;