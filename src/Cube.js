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
            U: 0,
            F: 0,
            R: 0,
            D: 0,
            L: 0,
            B: 0
        };
        for (let char of value) {
            colors[char]++;
        }
        if (colors.U !== 9 || colors.F !== 9 || colors.R !== 9
            || colors.D !== 9 || colors.L !== 9 || colors.B !== 9) {
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

                // front
                this.swap(frontIndexes[0], frontIndexes[8]);
                this.swap(frontIndexes[1], frontIndexes[7]);
                this.swap(frontIndexes[2], frontIndexes[6]);
                this.swap(frontIndexes[3], frontIndexes[5]);

                // side
                this.swap(sideIndexes[0], sideIndexes[6]);
                this.swap(sideIndexes[1], sideIndexes[7]);
                this.swap(sideIndexes[2], sideIndexes[8]);
                this.swap(sideIndexes[3], sideIndexes[9]);
                this.swap(sideIndexes[4], sideIndexes[10]);
                this.swap(sideIndexes[5], sideIndexes[11]);

                return;

            }
            case RotateDegrees.THREE_QUARTERS: {

                let value = this.value;

                // front
                value[frontIndexes[0]] = this.value[frontIndexes[2]];
                value[frontIndexes[1]] = this.value[frontIndexes[5]];
                value[frontIndexes[2]] = this.value[frontIndexes[8]];
                value[frontIndexes[3]] = this.value[frontIndexes[1]];
                value[frontIndexes[5]] = this.value[frontIndexes[7]];
                value[frontIndexes[6]] = this.value[frontIndexes[0]];
                value[frontIndexes[7]] = this.value[frontIndexes[3]];
                value[frontIndexes[8]] = this.value[frontIndexes[6]];

                // side
                value[sideIndexes[0]] = this.value[sideIndexes[3]];
                value[sideIndexes[1]] = this.value[sideIndexes[4]];
                value[sideIndexes[2]] = this.value[sideIndexes[5]];
                value[sideIndexes[3]] = this.value[sideIndexes[6]];
                value[sideIndexes[4]] = this.value[sideIndexes[7]];
                value[sideIndexes[5]] = this.value[sideIndexes[8]];
                value[sideIndexes[6]] = this.value[sideIndexes[9]];
                value[sideIndexes[7]] = this.value[sideIndexes[10]];
                value[sideIndexes[8]] = this.value[sideIndexes[11]];
                value[sideIndexes[9]] = this.value[sideIndexes[0]];
                value[sideIndexes[10]] = this.value[sideIndexes[1]];
                value[sideIndexes[11]] = this.value[sideIndexes[2]];

                this.value = value;

                return;

            }
            default: { // RotateDegrees.QUARTER

                let value = this.value;

                // front
                value[frontIndexes[0]] = this.value[frontIndexes[6]];
                value[frontIndexes[1]] = this.value[frontIndexes[3]];
                value[frontIndexes[2]] = this.value[frontIndexes[0]];
                value[frontIndexes[3]] = this.value[frontIndexes[7]];
                value[frontIndexes[5]] = this.value[frontIndexes[1]];
                value[frontIndexes[6]] = this.value[frontIndexes[8]];
                value[frontIndexes[7]] = this.value[frontIndexes[5]];
                value[frontIndexes[8]] = this.value[frontIndexes[2]];

                // side
                value[sideIndexes[0]] = this.value[sideIndexes[9]];
                value[sideIndexes[1]] = this.value[sideIndexes[10]];
                value[sideIndexes[2]] = this.value[sideIndexes[11]];
                value[sideIndexes[3]] = this.value[sideIndexes[0]];
                value[sideIndexes[4]] = this.value[sideIndexes[1]];
                value[sideIndexes[5]] = this.value[sideIndexes[2]];
                value[sideIndexes[6]] = this.value[sideIndexes[3]];
                value[sideIndexes[7]] = this.value[sideIndexes[4]];
                value[sideIndexes[8]] = this.value[sideIndexes[5]];
                value[sideIndexes[9]] = this.value[sideIndexes[6]];
                value[sideIndexes[10]] = this.value[sideIndexes[7]];
                value[sideIndexes[11]] = this.value[sideIndexes[8]];

                this.value = value;

                return;

            }
        }

    }

};

export default Cube;
