const app=require('./app.js');


const port = 3000;  // 3000 5000 8000 8080

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

try {
    console.log(req.body.username);
    const { username } = req.body;
    const fin = await module.findOne({ username });
    console.log(fin);
    if (fin === null) {
      const {username,password}=req.body
      await module.create({
        username,
        password
      })
    } else {
      // Username is already taken
      // Add your logic here
    }
  } catch (error) {
    console.error('Error:', error);
  }

   