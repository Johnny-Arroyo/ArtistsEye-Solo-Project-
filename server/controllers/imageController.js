const multer = require('multer');
const mongoose = require('mongoose');
const Image = require('../models/Image');

const storage = multer.memoryStorage();
const upload = multer({ storage });

//Controller function for image CRUD operations

const imageController = {}

imageController.createImage = {
  
}