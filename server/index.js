const api = require('./api');
const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const port = 5000;

app.get('/',async(req,res) => {
    res.send("API is working fine");
});

app.get('/users', async (req,res)=>{
    const data = await api.getUsers();
    res.send(data);
    // console.log("users sent");
});

app.listen(port, () => console.log(`server running on port ${port} \nhttp://localhost:5000`));