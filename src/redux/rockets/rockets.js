const GET_ROCKETS = "redux/actions/get_rockets"


const initialState = []

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

            return action.payload
        default:
            return state
    }
}

export default rocketsReducer;