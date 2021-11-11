import { fireEvent, render, within } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import MissionList from '../components/MissionList';
import Profile from '../components/Profile';
import testStore from '../redux/testStore';
import getMockMissions from '../__mocks__/getMockMissions';

const clickButtons = (buttons, indexes = []) => {
  indexes.forEach((index) => {
    fireEvent.click(buttons[index]);
  });
};

let tree;
describe('testing UX for missions related components', () => {
  const url = 'https://api.spacexdata.com/v3/missions';
  fetchMock.get(url, getMockMissions());

  beforeEach(() => {
    fetchMock.reset();
    tree = render(
      <Provider store={testStore}>
        <MissionList />
        <Profile />
      </Provider>,
    );
  });

  test('testing MissionList UX', async () => {
    expect(await tree.findAllByTestId('mission')).toHaveLength(10);
    const buttons = await tree.findAllByText('Join Mission');
    clickButtons(buttons, [0]);
    expect(await tree.findByText('Leave Mission')).toBeTruthy();
    expect(await tree.findByText('Active Member')).toBeTruthy();
    clickButtons(buttons, [0]);
    expect(tree.queryByText('Leave Mission')).toBeFalsy();
    expect(tree.queryByText('Active Member')).toBeFalsy();
  });

  test('testing Profile UX', async () => {
    const buttons = await tree.findAllByText('Join Mission');
    clickButtons(buttons, [1, 3, 5, 7, 9]);
    expect(await tree.findAllByTestId('profile-mission')).toHaveLength(5);
    clickButtons(buttons, [7, 9]);
    expect(await tree.findAllByTestId('profile-mission')).toHaveLength(3);
    clickButtons(buttons, [3, 5]);
    const profileMission = await tree.findByTestId('profile-mission');
    expect(await within(profileMission).findByText('Telstar')).toBeTruthy();
  });

  test('testing snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
