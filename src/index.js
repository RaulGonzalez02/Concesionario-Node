const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require("./routes/routesAPI")
const sequelize = require("./database/db")
require("./database/associations")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/apiconcesionario', routes)

app.listen(PORT, () => {
    console.log(`SERVIDOR ESCUCHANDO EN http://localhost:${PORT}📢`);
    sequelize
        .sync({ force: false })
        .then(() => console.log("tablas sincronizadas"));
});