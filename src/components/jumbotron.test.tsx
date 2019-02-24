import * as enzyme from 'enzyme';
import * as React from 'react';
import Jumbotron from './jumbotron';

describe('Jumbotron tests', () => {
    it('Renders correctly', () => {
        const jumbotron = enzyme.shallow(<Jumbotron/>);
        expect(jumbotron).not.toBeNull();
    });
});