'use strict';

import Cube from './Cube';
import Actions from '../statics/Actions';

class CubeSolver {

    constructor() {

        this.originValue = null;
        this.maxDeep = 24;
        this.actions = [];

    }

    getMaxDeep() {
        return this.maxDeep;
    }

    setMaxDeep(maxDeep) {
        this.maxDeep = maxDeep;
        return this;
    }

    init(value) {
        this.originValue = value;
        return this;
    }

    isSolved(target = Cube.DEFAULT_TAREGT) {

        if (!this.actions) {
            return false;
        }

        const cube = new Cube(this.originValue);
        this.actions.forEach(action => cube.transform(action));
        return cube.isSolved(target);

    }

    handleResult() {
        return this.actions.map(index => Actions[index].name).join(' ');
    }

    solve(target = Cube.DEFAULT_TAREGT) {

        // return this.doSolve(target, []);

        this.actions = [];

        while (this.actions.length <= this.maxDeep) {

            // console.log(this.actions.join(', '));

            if (this.isSolved(target)) {
                return this.handleResult();
            }

            if (this.actions.every(item => item === 17)) {
                this.actions.length > 0 && console.log(`${this.actions.length} depth finished`);
                this.actions = [...new Array(this.actions.length).fill(0), 0];
                continue;
            }

            const len = this.actions.length;
            this.actions[len - 1]++;
            if (this.actions[len - 1] > 17) {
                for (let i = len - 1; i >= 0; i--) {
                    if (this.actions[i] > 17) {
                        this.actions[i] = 0;
                        i > 0 && this.actions[i - 1]++;
                    }
                }
            }

        }

        return null;

    }

};

export default CubeSolver;
