const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const routes = require("./foodRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
