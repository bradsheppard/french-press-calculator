import * as enzyme from 'enzyme';
import * as React from 'react';
import Top from './top';

describe('Top tests', () => {
    it('Renders correctly', () => {
        const top = enzyme.shallow(<Top/>);
        expect(top).not.toBeNull();
    });
});