const URL = 'http://localhost:3000/athletes'
export const getAllAthletes = () => {
    return fetch(URL)
}

export const addAthleteService = (athlete) => {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(athlete)
    })
}

export const delAthleteService = (id) => {
    const URL_DELETE = URL + '/' + id
    return fetch(URL_DELETE , {
        method: 'DELETE'
    })
}