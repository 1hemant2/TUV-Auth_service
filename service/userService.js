const { Utill } = require("../config/utill");
const { dbClient } = require("../Database");
const { operationQuery } = require("../query/operations");
const { sendBadRequestResponse, sendServerErrorResponse } = require("../config/clientResponse");
const bcrypt = require('bcryptjs');


class UserService {
    constructor() {
        this.item = {query : '', values : ''};
    }
    _checkUserValid(data) {
        if (!data.email) {
            Utill.throwError('Email is required', 400);
        }
        if (!data.password) {
            Utill.throwError('Password is required', 400);
        }
        if (!data.name) {
            Utill.throwError('Name is required', 400);
        }
        if (!data.username) {
            Utill.throwError('Username is required', 400);
        }
        if (!data.firstName) {
            Utill.throwError('First Name is required', 400);
        }
        if (!data.lastName) {
            Utill.throwError('Last Name is required', 400);
        }
        return true;
    }

    async createUser(data) {
        try {
            if(this._checkUserValid(data)) {
                data.password = bcrypt.hashSync(data.password, 10);
                this.item.query = operationQuery.userOperation.create_user;
                this.item.values = [data.name, data.username, data.email, data.password, data.firstName, data.lastName];
                const user =  await dbClient(this.item);
                if(!user) {
                    Utill.throwError('User not created', 500);
                }
                return user;
            }
        } catch (error) {
            Utill.throwError(error.message || 'user not created', error.statusCode || 500);
        }
    }
}

module.exports = new UserService();