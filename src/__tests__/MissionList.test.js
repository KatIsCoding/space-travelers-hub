import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import MissionList from '../components/MissionList';
import missionsReducer from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';

const createTestStore = () => {
  const store = createStore(
    combineReducers({
      missionsReducer,
      rocketsReducer,
    }),
    applyMiddleware(thunk),
  );
  return store;
};

const renderMissionList = (store) =>
  render(
    <Provider store={store}>
      <MissionList />
    </Provider>,
  );

let store;
let tree;
describe('testing MissionList component', () => {
  beforeEach(() => {
    store = createTestStore();
    tree = renderMissionList(store);
  });

  test('testing UI', async () => {
    const missions = await tree.findAllByTestId('mission');
    expect(missions).toHaveLength(10);
    expect(tree).toMatchSnapshot();
    const buttons = await tree.findAllByText('Join Mission');
    fireEvent.click(buttons[0]);
    expect(await tree.findByText('Leave Mission')).toBeTruthy();
    expect(await tree.findByText('Active Member')).toBeTruthy();
    fireEvent.click(buttons[0]);
    expect(tree.queryByText('Leave Mission')).toBeFalsy();
    expect(tree.queryByText('Active Member')).toBeFalsy();
  });
});
