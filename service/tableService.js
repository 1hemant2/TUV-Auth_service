const { Utill } = require("../config/utill");
const { dbClient } = require("../Database");
const { sendBadRequestResponse, sendServerErrorResponse, sendSuccessResponse } = require("../config/clientResponse");
const { createTableQuery } = require("../query/table");


class TableService {
    constructor() {
        this.item = {query : undefined, values : undefined};
    }

    async createTable(data) {
        try {
            for(let q in createTableQuery) {
                this.item.query = createTableQuery[q];
                await dbClient(this.item);
            }
            return "Table created successfully";
        } catch (error) {
            Utill.throwError(error.message || 'table not created', error.statusCode || 500);
        }
    }
}

module.exports = new TableService();