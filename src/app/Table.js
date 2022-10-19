import React from 'react';
import { useState, useEffect, useRef } from 'react';

let USERS_URL = []
const MAX = 11

for (let i=1; i<MAX; i++) {
  USERS_URL.push(i)
}

const INITIAL_PAGE = 0
const NUMS_PAGE = 10
const TOTAL = USERS_URL.length

export default function Table () {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const botones =  {
    fisrt: useRef(),
    prev: useRef(),
    next: useRef(),
    last: useRef()
  }

  useEffect(() => {
    setUsers(USERS_URL.slice(1 + page * NUMS_PAGE, (page * NUMS_PAGE) + NUMS_PAGE  ))
    disableButtons()
	}, [page])

  const handleClick = (type) => {
    if (type === 'F') {
      setPage(INITIAL_PAGE)
      botones.fisrt.current.disabled='true'
      botones.prev.current.disabled='true'

    } else if (type === 'P') {
      if (page > INITIAL_PAGE) {
        setPage(page -1)
      }
    } else if (type === 'N') {
      if (page < parseInt(TOTAL / NUMS_PAGE)) {
        setPage(page + 1)
      }
    } else if (type === 'L') {
      setPage(parseInt(TOTAL / NUMS_PAGE))
    }
  }

  const disableButtons = () => {
    botones.fisrt.current.disabled = false
    botones.prev.current.disabled = false
    botones.next.current.disabled = false
    botones.last.current.disabled = false
    if (page <= INITIAL_PAGE) {
      botones.fisrt.current.disabled = 'true'
      botones.prev.current.disabled = 'true'
    } else if (page >= parseInt(TOTAL / NUMS_PAGE)) {
      botones.next.current.disabled = 'true'
      botones.last.current.disabled = 'true'
    }
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
                <td>{user}</td>
                <td>-</td>
                <td>-</td>
              </tr>
           )
        })}
        </tbody>
      </table>
      <section className="pagination">
        <button onClick={() => handleClick('F')} ref={botones.fisrt} className="first-page-btn">first</button>
        <button onClick={() => handleClick('P')} ref={botones.prev} className="previous-page-btn">previous</button>
        <button onClick={() => handleClick('N')} ref={botones.next} className="next-page-btn">next</button>
        <button onClick={() => handleClick('L')} ref={botones.last} className="last-page-btn">last</button>
      </section>
    </div>
  );
};
