import { fireEvent, render, within } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import MissionList from '../components/MissionList';
import Profile from '../components/Profile';
import testStore from '../redux/testStore';
import getMockMissions from '../__mocks__/getMockMissions';

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
    fireEvent.click(buttons[0]);
    expect(await tree.findByText('Leave Mission')).toBeTruthy();
    expect(await tree.findByText('Active Member')).toBeTruthy();
    fireEvent.click(buttons[0]);
    expect(tree.queryByText('Leave Mission')).toBeFalsy();
    expect(tree.queryByText('Active Member')).toBeFalsy();
  });

  test('testing Profile UX', async () => {
    const buttons = await tree.findAllByText('Join Mission');
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[7]);
    fireEvent.click(buttons[9]);
    expect(await tree.findAllByTestId('profile-mission')).toHaveLength(5);
    fireEvent.click(buttons[9]);
    fireEvent.click(buttons[7]);
    expect(await tree.findAllByTestId('profile-mission')).toHaveLength(3);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[3]);
    const profileMission = await tree.findByTestId('profile-mission');
    expect(await within(profileMission).findByText('Telstar')).toBeTruthy();
  });

  test('testing snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
