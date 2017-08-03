import React from 'react';
import PropTypes from 'prop-types';

const PropertyItem = ({property}) =>
            <div className="container propertyItem">
                <div className="panel">
                    <div className="row headings">
                        <div className="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2  col-sm-3 col-xs-3">
                            Owner
                        </div>
                        <div className="col-lg-5 col-md-5  col-sm-5  col-xs-5">Address</div>
                        <div className="col-lg-4 col-md-4 col-sm-3  col-xs-3">Income Generated</div>
                    </div>
                    <div className="row details">
                        <div className="owner col-lg-offset-1 col-md-offset-1 col-lg-2  col-md-2 col-sm-3  col-xs-3">{property.owner}</div>
                        <div className="address col-lg-5  col-md-5 col-sm-5  col-xs-5">
                            {
                                property.address.map((val, key) => {
                                    return (
                                        <div key={key}>{val}</div>
                                    );
                                })
                            }
                        </div>
                        <div className="income col-lg-4  col-md-4 col-sm-3  col-xs-3">{property.incomeGenerated}</div>
                    </div>
                </div>
            </div>;


PropertyItem.propTypes = {
    property: PropTypes.object.isRequired
};

export default PropertyItem;