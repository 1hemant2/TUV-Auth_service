const clientResponse = require('../config/clientResponse');
const { findOne, createUser } = require('../config/PrimsmaClient');
const bcrypt = require('bcryptjs');

class ProfileController {

    async _checkIfDataIsUnique (data) {
       const user = await findOne(data, data); 
       if(user) {
           return false;
       }
       return true;
    }

    async _checkIfValidUser(data) {

        if(!data.email) {
            throw new Error("Email is required"); 
        }

        if(!data.password) {
            throw new Error("Password is required"); 
        } 

        if(!data.firstName) {
            throw new Error("First Name is required"); 
        }

        if(!data.lastName) {
            throw new Error("Last Name is required"); 
        }

        if(!data.username) {
            throw new Error("username is required"); 
        }
        let user = await this._checkIfDataIsUnique(email);
        if(user) {
            throw new Error("Email already exists");
        }
        user = await this._checkIfDataIsUnique(username); 
        if(user) {
            throw new Error("Username already exists");
        }
        return true;
    }
    async getProfile (req, res) {
        try {
            const user = await findById(req.user.id);
            if (!user) {
                return res.status(404).send({ error: 'User not found' });
            }
            clientResponse.sendSuccessResponse(res, user);
        } catch (error) {
            res.status(500).send({ error: 'Server error' });
        }
    }
    
    async createUser (req, res) {
        try {
            const data = req.body;
            if(await this._checkIfValidUser(data)) {
                const user = await createUser(req.body);
                if(user) {
                  clientResponse.sendSuccessResponse(res, user);
                } else {
                    throw "User not created";
                }
            } else {
                throw "required fields are missing";
            } 

        } catch (error) {
            res.status(500).send({ error: 'Server error' });
        }
    }
    
}

module.exports = new ProfileController();
