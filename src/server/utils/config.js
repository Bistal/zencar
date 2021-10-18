
const log = require('bunyan').createLogger({name: 'config'});

// this function will set a single config value
function set(name, value) {
    log.debug({name, value}, "Setting config value")
    config[name] = value;
}

const config = {};


config.set = set;
config.set("apiUrl", process.env.API_URL);
config.set("port", process.env.PORT  || 3001);

exports.config = config;
