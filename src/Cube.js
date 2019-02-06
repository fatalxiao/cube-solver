class Cube {

    constructor(value) {
        this.value = value;
    }

    isEqual() {

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
