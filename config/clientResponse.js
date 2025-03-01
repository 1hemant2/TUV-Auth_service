class clientResponseService {
    async sendSuccessResponse(res, data) {
        return res.status(200).send(data);
    }

    async sendBadRequestResponse(res, error) {
        return res.status(400).send({ error: error });
    }

    async sendUnauthorizedResponse(res, error) {
        return res.status(401).send({ error: error });
    }

    async sendNotFoundResponse(res, error) {
        return res.status(404).send({ error: error });
    } 

    async sendServerErrorResponse(res, error) {
        return res.status(500).send({ error: error });
    }

    async sendErrorResponse (res, code, message) {
        return res.status(code || 500).send({ error: message });
    }

}

module.exports = new clientResponseService();