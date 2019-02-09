'use strict';

import Actions from './statics/Actions';
import * as RotateDegrees from './statics/RotateDegrees';

class Cube {

    constructor(value) {

        if (!Cube.isValid(value)) {
            throw 'Invalid Cube value.';
        }

        this.value = value;

    }

    /**
     * return cube value
     * @returns {string}
     */
    valueOf() {
        return this.value;
    }

    /**
     * valid cube value
     * @param value
     * @returns {boolean}
     */
    static isValid(value) {

        if (!value || value.length !== 54) {
            return false;
        }

        const colors = {
            U: 0,
            R: 0,
            F: 0,
            D: 0,
            L: 0,
            B: 0
        };
        for (let char of value) {
            colors[char]++;
        }
        if (colors.U !== 9 || colors.R !== 9 || colors.F !== 9
            || colors.D !== 9 || colors.L !== 9 || colors.B !== 9) {
            return false;
        }

        return true;

    }

    /**
     * compare this value to the target value
     * @param target {string / Cube}
     * @returns {boolean}
     */
    isEqualTo(target) {

        if (target && target instanceof Cube) {
            return this.value === target.valueOf();
        }

        return this.value === target;

    }

    /**
     * check whether this cube is solved
     * @param target{string / Cube}
     * @returns {boolean}
     */
    isSolved(target) {

        if (!Cube.isValid(this.value) || (target && !Cube.isValid(target))) {
            return false;
        }

        if (!target) {
            target = this.getDefaultTarget();
        }

        return this.isEqualTo(target);

    }

    /**
     * calculate the default solved cube value
     * @returns {string}
     */
    getDefaultTarget() {

        if (!Cube.isValid(this.value)) {
            throw 'Invalid cube value.';
        }

        return [
            ...new Array(9).fill(this.value[4]),
            ...new Array(9).fill(this.value[13]),
            ...new Array(9).fill(this.value[22]),
            ...new Array(9).fill(this.value[31]),
            ...new Array(9).fill(this.value[40]),
            ...new Array(9).fill(this.value[49])
        ].join('');

    }

    /**
     * transform the cube by rotating quarter circle
     * @param frontIndexes {array of number}
     * @param sideIndexes {array of number}
     * @returns {Cube}
     */
    transformQuarter(frontIndexes, sideIndexes) {

        if (!frontIndexes || frontIndexes.length < 9) {
            throw 'Invalid front indexes value.';
        }
        if (!sideIndexes || sideIndexes.length < 12) {
            throw 'Invalid side indexes value.';
        }

        let value = this.value.split('');

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

        this.value = value.join('');
        return this;

    }

    /**
     * transform the cube by rotating half circle
     * @param frontIndexes {array of number}
     * @param sideIndexes {array of number}
     * @returns {Cube}
     */
    transformHalf(frontIndexes, sideIndexes) {

        if (!frontIndexes || frontIndexes.length < 9) {
            throw 'Invalid front indexes value.';
        }
        if (!sideIndexes || sideIndexes.length < 12) {
            throw 'Invalid side indexes value.';
        }

        let value = this.value.split('');

        // front
        value[frontIndexes[0]] = this.value[frontIndexes[8]];
        value[frontIndexes[1]] = this.value[frontIndexes[7]];
        value[frontIndexes[2]] = this.value[frontIndexes[6]];
        value[frontIndexes[3]] = this.value[frontIndexes[5]];
        value[frontIndexes[5]] = this.value[frontIndexes[3]];
        value[frontIndexes[6]] = this.value[frontIndexes[2]];
        value[frontIndexes[7]] = this.value[frontIndexes[1]];
        value[frontIndexes[8]] = this.value[frontIndexes[0]];

        // side
        value[sideIndexes[0]] = this.value[sideIndexes[6]];
        value[sideIndexes[1]] = this.value[sideIndexes[7]];
        value[sideIndexes[2]] = this.value[sideIndexes[8]];
        value[sideIndexes[3]] = this.value[sideIndexes[9]];
        value[sideIndexes[4]] = this.value[sideIndexes[10]];
        value[sideIndexes[5]] = this.value[sideIndexes[11]];
        value[sideIndexes[6]] = this.value[sideIndexes[0]];
        value[sideIndexes[7]] = this.value[sideIndexes[1]];
        value[sideIndexes[8]] = this.value[sideIndexes[2]];
        value[sideIndexes[9]] = this.value[sideIndexes[3]];
        value[sideIndexes[10]] = this.value[sideIndexes[4]];
        value[sideIndexes[11]] = this.value[sideIndexes[5]];

        this.value = value.join('');
        return this;

    }

    /**
     * transform the cube by rotating three quarters circle
     * @param frontIndexes {array of number}
     * @param sideIndexes {array of number}
     * @returns {Cube}
     */
    transformThreeQuarters(frontIndexes, sideIndexes) {

        if (!frontIndexes || frontIndexes.length < 9) {
            throw 'Invalid front indexes value.';
        }
        if (!sideIndexes || sideIndexes.length < 12) {
            throw 'Invalid side indexes value.';
        }

        let value = this.value.split('');

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

        this.value = value.join('');
        return this;

    }

    /**
     * transform the cube by action
     * @param action {Action}
     * @returns {Cube}
     */
    transform(action) {

        if (!action || !Actions.includes(action)) {
            throw 'Invalid action of Cube.';
        }

        const {frontIndexes, sideIndexes, degree} = action;

        switch (degree) {
            case RotateDegrees.HALF: {
                this.transformHalf(frontIndexes, sideIndexes);
                return this;
            }
            case RotateDegrees.THREE_QUARTERS: {
                this.transformThreeQuarters(frontIndexes, sideIndexes);
                return this;
            }
            default: { // default RotateDegrees.QUARTER
                this.transformQuarter(frontIndexes, sideIndexes);
                return this;
            }
        }

    }

};

export default Cube;
