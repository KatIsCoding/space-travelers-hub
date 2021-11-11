import { render, screen } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../../components/Rockets';
import { getRocketsFunction, GET_ROCKETS } from '../../redux/rockets/rockets';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test redux actions and action creators', () => {
  test('Should create an action to get rockets after requesting them from the API', () => {
    fetchMock.reset();
    fetchMock.restore();
    const rockets = [{ id: 1, name: 'Falcon 1' }];
    fetchMock.get('https://api.spacexdata.com/v3/rockets', rockets);

    const expectedAction = {
      type: GET_ROCKETS,
      payload: rockets,
    };
    const initialState = {
      rockets: [],
    };

    const store = mockStore(initialState);

    return store.dispatch(getRocketsFunction()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedAction);
    });
  });
});

describe('Test UI Rendering with MockStore', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    fetchMock.get('https://api.spacexdata.com/v3/rockets', [
      { id: 1, rocket_name: 'Falcon 1', flickr_images: ['asd'], description: 'asd' },
    ]);
  });

  test('Check if a rocket is properly rendered', () => {
    const secondTree = render(
      <Provider
        store={mockStore({
          rocketsReducer: {
            rockets: [{ id: 1, rocket_name: 'TestFalconWithMockStore', flickr_images: ['asd'] }],
          },
        })}
      >
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('TestFalconWithMockStore')).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByText('Reserved').style.display).toBe('none');
    expect(secondTree).toMatchSnapshot();
  });
});
