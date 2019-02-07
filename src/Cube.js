class Cube {

    constructor(value) {
        this.value = value;
    }

    static isValid(value) {

        if (!value || value.length !== 54) {
            return false;
        }

        const colors = {
            R: 0,
            O: 0,
            Y: 0,
            G: 0,
            B: 0,
            W: 0
        };
        for (let char of value) {
            colors[char]++;
        }
        if (colors.R !== 9 || colors.O !== 9 || colors.Y !== 9 || colors.G !== 9 || colors.B !== 9 || colors.W !== 9) {
            return false;
        }

        return true;

    }

    valueOf() {
        return this.value;
    }

    isEqual(target) {

        if (target && target instanceof Cube) {
            return this.value === target.valueOf();
        }

        return this.value === target;

    }

    isSolved() {



    }

    transform(degree, frontIndexes, sideIndexes) {

        if (!degree) {
            throw 'Invalid degree.';
        }

        if (!frontIndexes) {
            throw 'Invalid frontIndexes.';
        }

        if (!sideIndexes) {
            throw 'Invalid sideIndexes.';
        }

    }

};

export default Cube;
