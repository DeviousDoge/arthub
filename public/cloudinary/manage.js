require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// List all assets
cloudinary.api.resources()
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});

// List all images with a given prefix
cloudinary.api.resources({ type: 'upload',  prefix: 'sample' })
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});