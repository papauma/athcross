import { useSelector } from "react-redux"

import './AhtletesList.css'

const AhtletesList = () => {
    const athletesState = useSelector(state => state.athletes)

    return (
        <div className="AhtletesList">
            <h1>AhtletesList</h1>
            <ul className="AhtletesList__list">
                {athletesState.map(athlete => {return(<li>{athlete.employee_name}</li>)})}
            </ul>
            <div>Total: {athletesState.length}</div>
        </div>
  )
}

export default AhtletesList