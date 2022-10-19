import React from 'react';
import { useState, useEffect } from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
	(result) => {
        setUsers()
	},
	(error) => {
	  // acciones a realizar al recibir un KO
	}
    )}, [])

  const getUsers = () => {

  }


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => {
            return (
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                </tr>
           )
        })}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
};
