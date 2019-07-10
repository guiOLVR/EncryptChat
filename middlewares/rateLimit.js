const rateLimit = require('express-rate-limit');

//Max request for time
const limiter = rateLimit({
    WindowMs: 2 * 60 * 1000,// Minutes*seconds*milieconds
    max: 60// Max requests
});

module.exports = limiter;