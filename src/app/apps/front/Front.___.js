import { render, screen } from '../../../../src/app/apps/front/components/TopThree/test-utils'
import Front from './Front'
import useAtheletes from '../../../features/athletes/athletesHooks'
import {BrowserRouter as Router} from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks'






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


jest.mock('../../../features/athletes/athletesHooks')
const mockUseAtheletes = useAtheletes as jest.MockedFunction


describe('Front test', () => {

  it('has same amount of cards as participants are provided', () => {

    render(
      <Router>
        <Front />
      </Router>, {preloadedState: {
      athletes: listAthletes
    }})
    expect(screen.getAllByTestId('athletes')).toHaveLength(listAthletes.length)
  })
})


