import config, {REST_API} from '../../services/configService';
import * as types from './propertiesActionTypes';

function fetchPropertiesSuccess(properties) {
    return {
        type: types.PROPERTIES_SUCCESS,
        properties
    };
}

// not going to happen in this demo as its hardcoded but
// always good to have a fail state we can test.
function fetchPropertiesFailed(error) {
    return {
        type: types.PROPERTIES_FAILED,
        error
    };
}

const FormatUtils = {

    capFirst: (name) => name.charAt(0).toUpperCase() + name.slice(1),

    buildAddress: ({line1, line2, line3, line4, city, country, postCode}) => {
        const house = !line2 ? [line1] : [`${line1}, ${line2}`];
        const streets = [line3, line4].filter((l) => !!l);
        const other = [`${city}, ${country}`, postCode];

        return [...house, ...streets, ...other];
    },

    // TODO: to be replaced with a proper multi currency formatter but it will do for now.
    formatIncome: (number) => {
        let price = number.toString();
        const pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(price)) {
            price = price.replace(pattern, '$1, $2');
        }
        return `£ ${price}`;
    }
};

function transformDateFormat(properties) {
    return properties.map((property) => {
        const formatted = {
            owner: FormatUtils.capFirst(property.owner),
            incomeGenerated: FormatUtils.formatIncome(property.incomeGenerated, 'GBP'),
            address: FormatUtils.buildAddress(property.address)
        };
        return formatted;
    });
}

export default function fetchProperties() {
    const url = `${config.get(REST_API)}/api/properties`;
    return (dispatch) => fetch(url)
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject(new Error('Bad response from server'));
            }
            return response.json();
        })
        .then(transformDateFormat)
        .then((propertyList) => {
            dispatch(fetchPropertiesSuccess(propertyList));
        })
        .catch((error) => {
            dispatch(fetchPropertiesFailed(error ? error.message : 'Unknown Error'));
        });
}
