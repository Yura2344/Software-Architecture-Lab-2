require('dotenv').config();
const convict = require("convict");
const convict_format_with_validator = require("convict-format-with-validator");

convict.addFormat(convict_format_with_validator.url);

const config = convict({
    api_url: {
        format: "url",
        default: "http://localhost:3000",
        env: "API_URL_ADDRESS"
    },
    proxy_port: {
        format: 'port',
        default: 3001,
        env: "PROXY_PORT"
    }
});

module.exports = config;