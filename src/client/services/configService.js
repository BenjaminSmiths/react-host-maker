

const configsMap = new Map();

export const REST_API = 'restApi';
export const GOOGLE_KEY = 'googleApiKey';
export const GOOGLE_URI = 'googleSearchUri';

configsMap.set('production', {
    restApi: '',
    googleApiKey: 'AIzaSyBwwe2kasZ_F7A-AsOijroGd3LS9096SpE',
    googleSearchUri: 'https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}'
});

configsMap.set('development', {
    restApi: 'http://localhost:4001',
    googleApiKey: 'AIzaSyBwwe2kasZ_F7A-AsOijroGd3LS9096SpE',
    googleSearchUri: 'https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}'
});

configsMap.set('test', {
    restApi: 'http://localhost:4001',
    googleApiKey: 'AIzaSyBwwe2kasZ_F7A-AsOijroGd3LS9096SpE',
    googleSearchUri: 'https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}'
});

const config = {
    get: (prop) => {
        return configsMap.get(process.env.NODE_ENV)[prop];
    }
};

export default config;