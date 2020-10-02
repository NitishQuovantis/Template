import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/extensions
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import {NativeModules} from 'react-native';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

global.fetch = require('jest-fetch-mock');

Enzyme.configure({adapter: new Adapter()});

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {},
};

NativeModules.PlatformConstants = {
  forceTouchAvailable: false,
};

NativeModules.UIManager = {
  RCTView: () => ({
    directEventTypes: {},
  }),
};
