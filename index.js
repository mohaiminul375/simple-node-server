const express = require('express');
const app = express();
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())



app.get('/',(req,res)=>{
    res.send('User API Is running');
})
const users =[
    {
    id: 1,
    name: 'sabana',
    email: 'sabana@gmail.com'
},
    {
    id: 2,
    name: 'kabila',
    email: 'kabila@gmail.com'
},
    {
    id: 3,  
    name: 'lamia',
    email: 'lamia@gmail.com'
},

]

const uri = "mongodb+srv://dbuser375:CWtogxjMuxEl0p6Y@cluster0.ixszr3u.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Simplenode").collection("users");
  // perform actions on the collection object
  console.log('db connected');
  client.close();
});




app.get('/users',(req,res)=>{
res.send(users);
})

app.post('/users',(req,res)=>{
    console.log('post api called');
    const user = req.body;
   user.id = users.length +1;
   users.push(user)
   console.log(user);
   res.send(user)
})







app.listen(port,()=>{
   console.log('user server is running on port',port)
})