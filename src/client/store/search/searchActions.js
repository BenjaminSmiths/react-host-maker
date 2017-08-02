import config, {GOOGLE_URI, GOOGLE_KEY} from '../../services/configService';

import * as types from "./searchActionTypes";

function searchSuccess(location) {
    return {
        type: types.SEARCH_GOOGLE_SUCCESS,
        location
    };
}

function searchFailed(error) {
    return {
        type: types.SEARCH_GOOGLE_FAILED,
        error: error
    };
}

export const searchGoogle = (address) => {
    const url = config.get(GOOGLE_URI).replace('${address}', address).replace('${key}', config.get(GOOGLE_KEY));
    // console.log(url);
    return (dispatch) => {
        return fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    Promise.reject(new Error("Bad response from server"));
                }
                return response.json();
            })
            .then((json) => {
                if (json.results.length === 0 || json.status !== 'OK') {
                    return Promise.reject(new Error(json.status));
                }
                let result = json.results[0]; // TODO: definitely want to show the user more options.
                dispatch(searchSuccess({
                    formattedAddress: result.formatted_address,
                    lat: result.geometry.location.lat,
                    lng: result.geometry.location.lng
                }));
            })
            .catch((error) => {
                // console.error('Could not find search results', error);
                dispatch(searchFailed(error ? error.message : 'Unknown Error'));
            });
    };
};