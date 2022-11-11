import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from './test-utils'
import {TopThree} from './TopThree'

const listAthletes = [
    {
        "id": 1,
        "name": "Mathew",
        "surname": "Fraser",
        "year": "1990",
        "weigth": "88",
        "gender": "male",
        "points": 100
      },
      {
        "id": 2,
        "name": "Romaleos",
        "surname": "hernandez",
        "year": "1968",
        "weigth": "88",
        "gender": "male",
        "points": 70
      },
      {
        "id": 3,
        "name": "Kevin",
        "surname": "Orocondo",
        "year": "1988",
        "weigth": "88",
        "gender": "male",
        "points": 55
      },
      {
        "id": 4,
        "name": "Juan",
        "surname": "Garcia",
        "year": "1982",
        "weigth": "88",
        "gender": "male",
        "points": 74
      },
      {
        "id": 5,
        "name": "Tia-Clair",
        "surname": "Toomey",
        "year": "1993",
        "weigth": "70",
        "gender": "female",
        "points": 101
      }
]


it('TopTheee', () => {
  const sortedList = listAthletes.sort((a, b) => b.points - a.points)
  const fisrtName = sortedList[0].name
  const secondName = sortedList[1].name
  const thirddName = sortedList[2].name
  render(<TopThree listAthletes={listAthletes} />)
  expect(screen.getByText(fisrtName)).toBeInTheDocument()
  expect(screen.getByText(secondName)).toBeInTheDocument()
  expect(screen.getByText(thirddName)).toBeInTheDocument()
})
