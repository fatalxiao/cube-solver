import Cube from './Cube';

class CubeSolver {

    constructor() {
        this.originCube = null;
    }

    init(value) {
        this.originCube = new Cube(value);
    }

    solve(target) {

        const targetCube = new Cube(target);

    }

};

export default CubeSolver;
