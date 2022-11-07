import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import UserList from './components/UserList';
import UserItem from './components/UserItem';

const API = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get(`${API}`)
    .then((response) => {
      const users = response.data;
      setUsers(users)

    })
  },[]);

  const filterUsers = () => {
    if(users) {
      let copyUsers = [...users];
      if(inputValue) {
        let filterUsers = copyUsers.filter((user) => {
          return user.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        return filterUsers
      }
    }
  }

  const filteredUsers = filterUsers();

  if(!users) {
    return <h2>Loading</h2>
  }

  return (
    <>
      <div>
        <Search onChange={(e)=> setInputValue(e.target.value)}/>
      </div>

      <Routes>
        <Route path='users' element={<UserList users={filteredUsers ? filteredUsers : users}/>} />
        <Route path='users/:id' element={<UserItem />} />
      </Routes>
    </>
  );
}

export default App;
