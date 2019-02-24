import { roundToTwo } from './math';

describe('Math tests', () => {

    it('Rounds up correctly', () => {
        const rational = 9.2356;
        const rounded = roundToTwo(rational);

        expect(rounded).toEqual(9.24);
    });

    it('Rounds down correctly', () => {
        const rational = 9.233;
        const rounded = roundToTwo(rational);

        expect(rounded).toEqual(9.23);
    });
});