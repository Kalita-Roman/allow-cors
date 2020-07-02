module.exports = function ({
    origin,
    headers,
    methods, 
    credentials,
}) {
    return function (req, res, next) {
        const headersToSet = Object.entries({
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Headers': headers,
            'Access-Control-Allow-Methods': methods,
            'Access-Control-Allow-Credentials': credentials,
        }).reduce((acc, [key, value]) => {
            if(value) {
                acc[key] = value;
            }
            return acc;
        }, {});
        
        res.set(headersToSet);

        if ('OPTIONS' === req.method) {
            res.sendStatus(200);
        } else {
            return next();
        }
    };
}