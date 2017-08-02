

const configsMap = new Map();

export const REST_API = 'restApi';

configsMap.set('production', {
    restApi: ''
});

configsMap.set('development', {
    restApi: 'http://localhost:4001'
});

configsMap.set('test', {
    restApi: 'http://localhost:4001'
});

const get = (prop) => {
    return configsMap.get(process.env.NODE_ENV)[prop];
};

export default get;