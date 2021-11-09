import getMissionsFromAPI from '../../services/missionsAPI';

const SET_MISSIONS = 'space-travelers-hub/missions/setMissions';
const JOIN_MISSION = 'space-travelers-hub/missions/joinMission';
const LEAVE_MISSION = 'space-travelers-hub/missions/leaveMission';

const initialState = {
  missions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return { ...state, missions: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) =>
          mission.mission_id === action.id ? { ...mission, reserved: true } : mission,
        ),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) =>
          mission.mission_id === action.id ? { ...mission, reserved: false } : mission,
        ),
      };
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

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});
