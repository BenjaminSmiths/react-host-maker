import React, {Component} from 'react';
import PropertyItem from './PropertyItem';
import {fetchProperties} from '../../store/properties/actions';
import {connect} from 'react-redux';

class PropertyList extends Component {

    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {
        return (
            <div name="PropertyList">
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