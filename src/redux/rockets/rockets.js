const GET_ROCKETS = "redux/actions/get_rockets"
const TOGGLE_RESERVATION = "redux/actions/toggle_reservation"

const initialState = {
    rockets: [],
}

export const toggleReservationAction = (reservationID) => ({
    type: TOGGLE_RESERVATION,
    payload: reservationID
})

const getRocketsAction = (rockets) => ({
    type: GET_ROCKETS,
    payload: rockets,
  })

export const getRocketsFunction = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v3/rockets").then(response => response.json()).then(data => {
    dispatch(getRocketsAction(data))
  })
}


const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROCKETS:
            return {...state, rockets: action.payload}
        case TOGGLE_RESERVATION:
            return {...state, rockets: state.rockets.map(rocket => rocket.id !== action.payload 
              ? rocket : { ...rocket, isReserved: !rocket.isReserved })}
        default:
            return state
    }
}

export default rocketsReducer;