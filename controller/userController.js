const clientResponse = require('../config/clientResponse');
const userService = require('../service/userService');

class userController {
    async createUser (req, res) {
        try {
            const data = req.body;
            const user = await userService.createUser(data);
            return clientResponse.sendSuccessResponse(res, user);
        } catch (error) {
            console.error('error from createUser =>',error);
            clientResponse.sendErrorResponse(res,error.statusCode, error.message);
        }
    }
    
}

module.exports = new userController();
