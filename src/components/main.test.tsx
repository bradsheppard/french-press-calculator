import * as enzyme from 'enzyme';
import * as React from 'react';
import coffeeCalculator from "../helpers/coffeeCalculator";
import { roundToTwo } from "../helpers/math";
import Main from './main';

describe('Main tests', () => {

    it('Renders correctly', () => {
        const main = enzyme.shallow(<Main/>);
        expect(main).not.toBeNull();
    });

    it('Updates water amount correctly', () => {
        const main = enzyme.mount(<Main/>).find('Main');

        const waterOuncesText = main.find('#waterOuncesText').hostNodes();
        waterOuncesText.simulate('change', {target: {value: '123'}});

        const waterOuncesState = main.state('waterOunces');
        expect(waterOuncesState).toEqual(123);
    });

    it('Calculates correctly', () => {
        const main = enzyme.mount(<Main/>).childAt(0);

        main.setState({
            strength: 7,
            waterOunces: 30
        });

        const waterOunces = main.find('#waterOunces').hostNodes();
        expect(waterOunces.text()).toEqual('30 ounces');

        const calculatedOutput = coffeeCalculator({
            strength: 7,
            waterOunces: 30
        });

        const outputTable = main.find('Output');
        const coffeeGrams = outputTable.find('#coffeeGrams').hostNodes();

        expect(coffeeGrams.text()).toEqual(roundToTwo(calculatedOutput.coffeeGrams) + ' grams');
    });
});