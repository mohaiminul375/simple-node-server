// const express = require('express');
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const app =express();
// const cors = require('cors');
// const port =process.env.PORT || 5000



// app.use(cors())
// app.use(express.json());//use for middleware
// app.get('/',( req,res)=>{
//     res.send('Simple server is running')
// })


// const users =[
//     {id: 1,
//         name: 'Sabana',
//         email: 'sabana@gmail.com'
//     },
//     {id: 2,
//         name: 'Sabila',
//         email: 'sabila@gmail.com'
//     },
//     {id: 3,
//         name: 'Shabnur',
//         email: 'sabnur@gmail.com'
//     },
//     ];
// app.get('/users', (req,res )=>{
//     res.send(users)
// })
// // app.post('/users', (req,res)=>{
// //     console.log('Post API called')
// //     const user = req.body
// //     user.id = users.length + 1;
// //     users.push(user);
// //     console.log(user)
// //     res.send(user)
// // })

// app.listen(port,()=>{
//     console.log('simple server is running on', port)
// })

// // app.get('/users',(req,res)=>{
// //     if(req.query.name);
// //     const search = req.query.name;
// //     const filtered =users.filter(usr=> usr.name.toLocaleLowerCase.indexOf())
// // })

// //pass CWtogxjMuxEl0p6Y
// //user dbuser375


// const uri = "mongodb+srv://dbuser375:CWtogxjMuxEl0p6Y@cluster0.ixszr3u.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function run(){
// try{
// const  userCollection = client.db('SimpleNode').collection('user');
// // const user ={
// //     name: 'Mahiya mahi',
// //     email:'mahi@gmail.com'
// // }
// app.get('/users', async(req,res)=>{
//      const cursor = userCollection.find({});
//      const users =await cursor.toArray();
//      res.send(users)
// })
// // const result = await userCollection.insertOne(user);
// // console.log(result)
// app.post('/users', async(req,res)=>{
//     console.log('Post API called')
//     const user = req.body
//     // user.id = users.length + 1;
//     // users.push(user);
//     // console.log(user)
//     const result =  await userCollection.insertOne(user);
//     console.log(result)
//     user._id = result.insertedId;
//     res.send(user)
// })
// }
// finally{
//     // await client.close();
// }
// }

// run().catch(err=>console.log(err));
