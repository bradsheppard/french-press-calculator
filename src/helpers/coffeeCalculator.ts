interface ICoffeeInput {
    strength: number;
    waterOunces: number;
}

interface ICoffeeOutput {
    ratio: number;
    waterGrams: number;
    coffeeGrams: number;
}

export default (input: ICoffeeInput): ICoffeeOutput => {
    const strength = input.strength;
    const waterOunces = input.waterOunces;

    const ratio = 17 - strength;
    const waterGrams = waterOunces * 29.57;
    const coffeeGrams = (1 / ratio) * waterGrams;

    return {
        coffeeGrams,
        ratio,
        waterGrams,
    };
}