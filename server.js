
const http = require("http");
const app = require("./src/app");
const { mongoConnect } = require("./src/services/mongo");

const server = http.createServer(app)


async function startServer() {

    await mongoConnect()
    server.listen(3000, () => {
        console.log('listening on 3000');
    })

}

startServer()