module.exports = function () {
    return function (req, res, next) {
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
        });
        if ('OPTIONS' === req.method) {
            res.sendStatus(200);
        } else {
            return next();
        }
    };
}