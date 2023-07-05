import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {userList.map(user => (
        <div key={user.id} className="card">
          <div className="banner">
            
          </div>

          <h2 className="name">{user.name}</h2>
          <ul>
            <li>UserName: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
             <li>Address: {user.address.street}{user.address.suite}{user.address.city}</li>
              <li>Company: {user.company.name}</li>
           
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserList;
