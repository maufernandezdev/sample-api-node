const express = require('express');
const coursesRoute = express.Router();
coursesRoute.use(express.json());
const courses = require('../db/courses').courses;

coursesRoute.get('/', async (req,res) =>{

    return res.status(200).json(courses);

});

module.exports = coursesRoute;