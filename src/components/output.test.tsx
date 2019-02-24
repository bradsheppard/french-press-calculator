import * as enzyme from 'enzyme';
import * as React from 'react';
import Output from './output';

describe('Output tests', () => {

    it('Can render without crashing', () => {
        const output = enzyme.shallow(<Output waterGrams={23} waterOunces={24} coffeeGrams={25} ratio={0.5}/>);
        expect(output.find('Table')).not.toBeNull();
    });

    it('Renders correct values', () => {
        const output = enzyme.shallow(<Output waterGrams={23.555} waterOunces={24.555} coffeeGrams={25.555} ratio={0.5}/>);
        const waterGrams = output.find('#waterGramsCell');
        const waterOunces = output.find('#waterOunces');
        const coffeeGrams = output.find('#coffeeGrams');

        expect(waterGrams.childAt(0).text()).toEqual('23.56');
        expect(waterOunces.childAt(0).text()).toEqual('24.56');
        expect(coffeeGrams.childAt(0).text()).toEqual('25.56');
    });
});