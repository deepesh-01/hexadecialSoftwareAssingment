import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Container, Navbar, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const url = `http://localhost:5000/users`;

function App() {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
    const data = await axios.get(url);
    setUsers([data.data]);
    console.log(data.data);
    }
    getUsers();
  },[]);

  // console.log(users);


  return (
    <div>
      <Navbar bg="light">
        <Container>
          <h1>Users</h1>
        </Container>
      </Navbar>
      <br/>
      <Container>
      {(users.length!==0) ?
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
        
          <tbody>
        {users[0].map((u)=>
          <tr>  
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
          </tr>
        )}
        </tbody>
        </Table>

      :

      <h1>users absent</h1>
      
      }
      
      </Container>
  
  </div>
  );
}

export default App;
