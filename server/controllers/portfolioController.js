const Image = require('../models/imageModel');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });