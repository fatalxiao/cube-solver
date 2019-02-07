import Actions from './statics/Actions';
import * as RotateDegrees from './statics/RotateDegrees';

class Cube {

    constructor(value) {

        if (!Cube.isValid(value)) {
            throw 'Invalid Cube value.';
        }

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

    swap(index1, index2) {

        if (!index1 || isNaN(index1) || index1 < 0 || index1 > 54
            || !index2 || isNaN(index2) || index2 < 0 || index2 > 54) {
            throw 'Invalid index value.';
        }

        const temp = this.value[index1];
        this.value[index1] = this.value[index2];
        this.value[index2] = temp;

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

        if (!Cube.isValid(this.value)) {
            return false;
        }

        return new RegExp(`${this.value[0]}{9}${this.value[9]}{9}${this.value[18]}{9}${this.value[27]}{9}${this.value[36]}{9}${this.value[45]}{9}`).test(this.value);

    }

    transform(action) {

        if (!action || !Actions.includes(action)) {
            throw 'Invalid action of Cube.';
        }

        const {frontIndexes, sideIndexes, degree} = action;

        switch (degree) {
            case RotateDegrees.HALF: {

                // swap front
                this.swap(frontIndexes[0], frontIndexes[8]);
                this.swap(frontIndexes[1], frontIndexes[7]);
                this.swap(frontIndexes[2], frontIndexes[6]);
                this.swap(frontIndexes[3], frontIndexes[5]);

                // swap side
                this.swap(sideIndexes[0], sideIndexes[6]);
                this.swap(sideIndexes[1], sideIndexes[7]);
                this.swap(sideIndexes[2], sideIndexes[8]);
                this.swap(sideIndexes[3], sideIndexes[9]);
                this.swap(sideIndexes[4], sideIndexes[10]);
                this.swap(sideIndexes[5], sideIndexes[11]);

                return;
            }
            case RotateDegrees.THREE_QUARTERS:
                return;
            default: // RotateDegrees.QUARTER
                return;
        }

    }

};

export default Cube;
