import * as types from "./actionTypes";
import get, {REST_API} from '../../services/configService';

function fetchPropertiessSuccess(properties) {
    return {
        type: types.PROPERTIES_SUCCESS,
        properties
    };
}

export function fetchProperties() {
    return (dispatch) => {
        return fetch(get(REST_API) + '/api/properties')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((json) => {
                dispatch(fetchPropertiessSuccess(json));
            })
            .catch((error) => {
                console.log('there was a problem', error);
            });
    };
}