import { fireEvent, render } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import Profile from '../../components/Profile';
import Rockets from '../../components/Rockets';
import missionsReducer from '../../redux/missions/missions';
import rocketsReducer from '../../redux/rockets/rockets';

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

const renderMissionList = (store, component) =>
  render(<Provider store={store}>{component}</Provider>);

let store;
let tree;
describe('Rockets Reservations', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    fetchMock.get('https://api.spacexdata.com/v3/rockets', [
      { id: 1, rocket_name: 'Falcon 1', flickr_images: ['asd'], description: 'asd' },
    ]);
    store = createTestStore();
  });

  test('Check for user reservating a rocket in both rockets and profile pages', async () => {
    tree = renderMissionList(store, <Rockets />);

    expect(await tree.findByRole('button')).toBeTruthy();
    expect(tree).toMatchSnapshot();
    fireEvent.click(await tree.findByRole('button'));
    expect(tree.getByText('Reserved').style.display).toBe('inline-block');
    fireEvent.click(await tree.findByRole('button'));
    expect(tree.getByText('Reserved').style.display).toBe('none');
    fireEvent.click(await tree.findByRole('button'));

    const profile = renderMissionList(store, <Profile />);
    const rocketInProfile = await profile.findByTestId('rocket-in-profile');
    expect(rocketInProfile).toBeTruthy();
  });
});
