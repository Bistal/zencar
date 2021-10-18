const request = require('request-promise-native');
const log = require('bunyan').createLogger({name: 'requestAPI'});

exports.requestAPI = async function requestAPI(requestConfig) {
    return request(requestConfig);
}