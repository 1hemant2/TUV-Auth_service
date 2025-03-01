const { sendSuccessResponse, sendErrorResponse } = require('../config/clientResponse');
const tableService = require('../service/tableService');

class TableController {

  async createTable(req, res) {
    try {
      const table = await tableService.createTable();
      sendSuccessResponse(res, table);
    } catch (error) {
      sendErrorResponse(res, error.statusCode, error.message);
    }
  }
}

module.exports = new TableController();