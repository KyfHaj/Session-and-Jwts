import express from 'express'
// const express = require('express')

const app = express()

const hostName = 'localhost'
const port = 2611

app.get('/', function (req,res) {
    res.send('<h1>Ready !</h1>')
})

app.listen(port, hostName, () => {
    console.log(`Kyf running on http://${hostName}:${port}`)
})