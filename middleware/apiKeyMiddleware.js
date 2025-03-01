const { sendErrorResponse } = require("../config/clientResponse");

const tableMiddleware = (req, res, next) => {
    try {
        if(req.headers.table_api_key == process.env.TABLE_API_KEY && process.env.CREATE_TABLE === 'true') {
            next();
        } else {
            return sendErrorResponse(res, 403, 'Forbidden');
        }
    } catch (error) {
        return sendErrorResponse(res, 403, 'Forbidden');
    }
};

module.exports  = {
    tableMiddleware
}