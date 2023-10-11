const { fail } = require('assert');
const express = require('express');
const app = express();
const fs = require('fs'); 
const morgan=require('morgan');
const movieRouter=require ('./routes/movie_route.js');

app.use(express.json());
//custom middleware
app.use((req,res,next)=>{
    req.requestTime=Date().toISOString();
    next();
});

app.use(morgan('dev'));

app.use('/api/v1/movies',movieRouter);

//app.route('/api/v1/movies').get(getAllMovies).post(addMovie);
  //app.put('/api/v1/movies/:id',updateMovie );
  //app.route('/api/v1/movies/:id').get(getCertaineMovie).delete(deleteMovie).put(updateMovie);
  

module.exports=app;
  