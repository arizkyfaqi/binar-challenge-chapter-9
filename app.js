const express = require("express");
const app = express();

const db = require('./app/db')
const detailpemain = require('./app/routes/detailpemain')

app.use(express.json());
app.use('/detailpemain', detailpemain)



const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});