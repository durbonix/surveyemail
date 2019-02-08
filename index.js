const express = require('express');
//import express from 'express';
const app = express();

app.get('/', (req, res)=> {
    res.send({hi: 'there'});
})

const PORT = process.get.PORT || 5000;
app.listen(PORT);