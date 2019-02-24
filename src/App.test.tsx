import * as enzyme from 'enzyme';
import * as React from 'react';
import App from '../src/App';

describe('App Tests', () => {
  it('Renders without crashing', () => {
    const app = enzyme.shallow(<App/>);
    expect(app.find('.root')).not.toBeNull()
  });
});