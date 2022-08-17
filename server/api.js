const axios = require('axios');

url = `https://jsonplaceholder.typicode.com/users`

const getUsers = async() => {
    try{
        data = await axios.get(url);
        return data.data;
    }
    catch(err){
        console.log(err);
    }
}

exports.getUsers=getUsers;