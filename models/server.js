const express = require('express');
const dbConnect = require('../database/config');
const { getProduct, postProduct, putProduct, deleteProduct } = require('../controllers/productsController');

class Server {
    constructor() {
        this.app = express()
        this.pathProduct = '/api/productos'
        this.route()
        this.dbConnection();
        this.listen();
    }

    async dbConnection() {
        await dbConnect()

    }

    route() {
        this.app.use(express.json())
        this.app.get(this.pathProduct, getProduct)
        this.app.post(this.pathProduct, postProduct)
        this.app.put(this.pathProduct, putProduct)
        this.app.delete(this.pathProduct+ '/:id',deleteProduct)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}

module.exports = Server