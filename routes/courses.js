const express = require('express');
const coursesRoute = express.Router();
coursesRoute.use(express.json()); 
const fs = require('fs/promises')

coursesRoute.get('/', async (req,res) =>{

    const content = await fs.readFile(`./db/courses.json`);
    return res.status(200).json(JSON.parse(content));

});

module.exports = coursesRoute;