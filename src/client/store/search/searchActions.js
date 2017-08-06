import config, {GOOGLE_KEY, GOOGLE_URI} from '../../services/configService';

import * as types from './searchActionTypes';

function searchSuccess(search) {
    return {
        type: types.SEARCH_GOOGLE_SUCCESS,
        search
    };
}

function searchFailed(error) {
    return {
        type: types.SEARCH_GOOGLE_FAILED,
        error
    };
}

export default (searchInput) => {
    // TODO: should sanitize user input for security {searchInput}
    const url = config.get(GOOGLE_URI).replace('{address}', searchInput).replace('{key}', config.get(GOOGLE_KEY));
    return (dispatch) => fetch(url)
        .then(response => {
            if (response.status >= 400) {
                Promise.reject(new Error('Bad response from server'));
            }
            return response.json();
        })
        .then((json) => {
            if (json.results.length === 0 || json.status !== 'OK') {
                return Promise.reject(new Error(json.status));
            }
            const result = json.results[0]; // TODO: definitely want to show the user more options.
            const lat = result.geometry.location.lat;
            const lng = result.geometry.location.lng;
            const distance = getDistance(serviceArea, {lat, lng});

            return dispatch(searchSuccess({
                formattedAddress: result.formatted_address,
                lat,
                lng,
                serviceable: distance <= (serviceArea.radius / 1000)
            }));
        })
        .catch((error) => {
            dispatch(searchFailed(error ? error.message : 'Unknown Error'));
        });
};

const getDistance = (coords1, coords2) => {
    function toRad(x) {
        return (x * Math.PI) / 180;
    }

    const dLat = toRad(coords2.lat - coords1.lat);
    const dLon = toRad(coords2.lng - coords1.lng);

    const a = ((Math.sin(dLat / 2) *
        Math.sin(dLat / 2)) +
        Math.cos(toRad(coords1.lat))) *
        Math.cos(toRad(coords2.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    return 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const serviceArea = {
    lat: 51.5073835,
    lng: -0.1277801,
    radius: 20000
};
