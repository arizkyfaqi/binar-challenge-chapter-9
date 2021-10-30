const { application } = require('express')
const express = require('express')
const router = express.Router()
const db = require(`../db`)

router.get('/', (req, res) => {
    console.log("Hit Success")
    console.log(req)
    db.any("SELECT detail_pemain.namapemain, detail_pemain.rank FROM public.detail_pemain;")
        .then(rows => {
            console.log(rows)
            res.json(rows)
        })
        .catch(error => {
            console.log(error)
        })
});


module.exports = router;