'use strict';

import Cube from './Cube';
import Actions from '../statics/Actions';

class CubeSolver {

    constructor() {

        this.originValue = null;
        this.maxDeep = 24;
        this.actions = [];

    }

    /**
     * this.maxDeep getter
     * @returns {number}
     */
    getMaxDeep() {
        return this.maxDeep;
    }

    /**
     * this.maxDeep setter
     * @returns {CubeSolver}
     */
    setMaxDeep(maxDeep) {
        this.maxDeep = maxDeep;
        return this;
    }

    /**
     * init CubeSolver and value
     * @param value
     * @returns {CubeSolver}
     */
    init(value) {
        this.originValue = value;
        return this;
    }

    /**
     * whether the Cube solved
     * @param target {Cube/string}
     * @returns {boolean}
     */
    isSolved(target = Cube.DEFAULT_TAREGT) {

        if (!this.actions) {
            return false;
        }

        const cube = new Cube(this.originValue);
        this.actions.forEach(action => cube.transform(action));
        return cube.isSolved(target);

    }

    /**
     * format Action index array to string
     * @returns {string}
     */
    handleResult() {
        return this.actions.map(index => Actions[index].name).join(' ');
    }

    /**
     * brute force the cube
     * run 18**n time in every deep
     * @param target {Cube/string}
     * @returns {string}
     */
    bruteForced(target = Cube.DEFAULT_TAREGT) {

        while (this.actions.length <= this.maxDeep) {

            // console.log(this.actions.join(', '));

            const len = this.actions.length;

            if (this.isSolved(target)) {
                return this.handleResult();
            }

            if (this.actions.every(item => item === 17)) {
                this.actions.length > 0 && console.log(`${this.actions.length} depth finished`);
                this.actions = [...new Array(this.actions.length).fill(0), 0];
                continue;
            }

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

    /**
     * improved brute force the cube
     * run 18 * 15**(n - 1) time in every deep
     * @param target {Cube/string}
     * @returns {string}
     */
    improvedBruteForced(target = Cube.DEFAULT_TAREGT) {

        while (this.actions.length <= this.maxDeep) {

            // console.log(this.actions.join(', '));

            const len = this.actions.length;

            let flag;
            if (len > 1) {
                for (let i = 0; i < len - 2; i++) {
                    if (Actions[this.actions[i]].type === Actions[this.actions[i + 1]].type) {
                        flag = true;
                        break;
                    }
                }
            }

            if (!flag) {
                if (this.isSolved(target)) {
                    return this.handleResult();
                }
            }

            if (this.actions.every(item => item === 17)) {
                this.actions.length > 0 && console.log(`${this.actions.length} depth finished`);
                this.actions = [...new Array(this.actions.length).fill(0), 0];
                continue;
            }

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

    /**
     * solve the cube
     * @param target {Cube/string}
     * @returns {string}
     */
    solve(target = Cube.DEFAULT_TAREGT) {
        this.actions = [];
        return this.improvedBruteForced(target);
    }

};

export default CubeSolver;
