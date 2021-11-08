import getMissionsFromAPI from '../../services/missionsAPI';

const SET_MISSIONS = 'space-travelers-hub/missions/setMissions';

const initialState = {
  missions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return { ...state, missions: action.payload };
    default:
      return state;
  }
};

export const setMissions = (payload) => ({
  type: SET_MISSIONS,
  payload,
});

export const setMissionsAsync = () => (dispatch) => {
  getMissionsFromAPI().then((data) => dispatch(setMissions(data)));
};
