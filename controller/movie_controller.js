const data = JSON.parse(fs.readFileSync('./data/movies.json','utf8')); 
const fs = require('fs'); 

exports.getAllMovies=(req, res)=>{   
    res.status(200).json({
        status : 'success',
        requesttime:req.requestTime,
        result: data.length, 
        data: {
            data
        }
    })
}
exports.addMovie=(req, res)=>{   
    console.log(req.body);

    // const new_id = 0;//data[data.length - 1].id + 1;
    const new_movie = Object.assign(req.body);  //({ id : new_id }, req.body);

    data.push(new_movie);
    fs.writeFile('./data/movies.json', JSON.stringify(data, (err)=>{
        res.status(200).json({
            'message' : 'item added..'
        });
    }));
};
exports.getCertaineMovie=(req,res)=>{
    const id=req.params.id * 1;
    /*if(id >= data_object.length)
    {
        return res.status(404).json({
            status:'fail',
            message:'invaild id'
        });
    }*/
    const movie=data_object.find((e)=>e.id===id);
    if(!movie)
    {
        return res.status(404).json({
            status:'fail',
            message:'invaild id'
        });
        
    }
    res.status(200).json({
        status:'success',
        movie:movie
    })
};
exports.updateMovie=(req, res) => {
    const data = new data({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      userId: req.body.userId
    });
    data.updateOne({id: req.params.id}, data).then(
      () => {
        res.status(201).json({
          message: 'data updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
exports.deleteMovie=(req,res)=>{
    if(req.params.id * 1 >=data_object.length){
        return res.status(404).json({
            status:'fail',
            message:'invaild id' 
        });
    }
    data_object.map((e)=>{
        if(e.id===req.params.id*1){
            delete data_object[req.params.id*1]
            res.status(204).json({
                status:'success',
                data:data_object
            });
        }
    })
  }