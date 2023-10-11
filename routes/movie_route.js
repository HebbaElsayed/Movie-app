const express = require('express');
const movieController=require('./../controller/movie_controller.js');

const movieRouter=express.Router();
movieRouter.route('/').get(movieController.getAllMovies).post(movieController.addMovie);
movieRouter.route('/:id').get(movieController.getCertaineMovie).delete(movieController.deleteMovie).put(movieController.updateMovie);
module.exports=movieRouter;

  