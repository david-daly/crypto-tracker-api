
const path = require('path');

require('dotenv').load({
    path: path.join(__dirname, '../../.env')
    // sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        uri: process.env.MONGO_URI,
    },
    logger: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};