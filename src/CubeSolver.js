'use strict';

import Cube from './Cube';

class CubeSolver {

    constructor() {

        this.originCube = null;
        this.deep = 24;

    }

    getDeep() {
        return this.deep;
    }

    setDeep(deep) {
        this.deep = deep;
        return this;
    }

    init(value) {
        this.originCube = new Cube(value);
        return this;
    }

    solve(target) {

        const targetCube = new Cube(target);



    }

};

export default CubeSolver;
