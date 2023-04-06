const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const app = express();
const axios = require('axios')
app.use(express.json());
const posts = []

app.use(cors())
app.get('/posts', (req, res) => {
    res.send(posts);
})
app.post('/posts', async(req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts.push(  { id, title });
   await axios.post('http://localhost:4005/events',{
        type:'PostCreated',
        data:{
            id, title
        }
    })
    res.send('Got a POST request');
})

app.post('/events',(req,res)=>{

    console.log('Recieved Event', req.body.type)
    res.send({})

})

app.listen(4000, () => console.log('Example app listening on port 4000!'))