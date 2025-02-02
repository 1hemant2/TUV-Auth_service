const { PrismaClient } = require('@prisma/client');

class PrismaService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async findOne(key, value) {
        return await this.prisma.user.findOne({
            where: { key: value },
        });
    }
    
    async createUser(data) {
        return await this.prisma.user.create({
            data: data,
        });
    }
    
    // Add more methods as needed
}

module.exports = new PrismaService();