class Cube {

    constructor(value) {
        this.value = value;
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
