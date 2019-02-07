'use strict';

import Cube from './Cube';

class CubeSolver {

    constructor() {

        this.originCube = null;
        this.maxDeep = 24;

    }

    getMaxDeep() {
        return this.maxDeep;
    }

    setMaxDeep(maxDeep) {
        this.maxDeep = maxDeep;
        return this;
    }

    init(value) {
        this.originCube = new Cube(value);
        return this;
    }

    doSolve() {

    }

    solve(target) {

    }

};

export default CubeSolver;
