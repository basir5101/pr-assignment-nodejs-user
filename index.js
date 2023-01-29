const express = require('express');
const cors = require("cors");
const dbConnect = require('../express-mvc-acc-initial/utils/dbConnect');
const userRoutes = require('./routes/users.routes');
require("dotenv").config()




const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


dbConnect()
app.use("/users", userRoutes)


app.get("/", (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})