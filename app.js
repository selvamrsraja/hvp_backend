const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./router/routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const db = require("./model");
require('dotenv').config();
db.sequelize.sync()
    .then(() => {
        console.log("DB Synced");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
// // // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
app.use(cors())
app.use(routes);
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }))

// const PORT = process.env.PORT || 12707;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

app.listen(12707, '0.0.0.0');
