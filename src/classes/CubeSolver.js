'use strict';

import Cube from './Cube';
import Actions from '../statics/Actions';
import Directions from '../statics/Directions';

class CubeSolver {

    constructor() {

        this.originValue = null;
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
        this.originValue = value;
        return this;
    }

    isSolved(target, actions) {

        if (!actions || !target) {
            return false;
        }

        const cube = new Cube(this.originValue);
        actions.forEach(action => action && cube.transform(action));
        return cube.isSolved(target);

    }

    doSolve(target, actions) {

        // if (actions.length === 0) {
        //     actions.push(Actions[0]);
        // } else if (actions.length >= this.maxDeep) {
        //
        //     actions.length = this.maxDeep;
        //
        //     const lastAction = actions[actions.length - 1];
        //     let index = Actions.indexOf(lastAction) + 1;
        //
        //     if (index >= Actions.length) {
        //
        //     }
        //
        // } else {
        //
        //     const lastAction = actions[actions.length - 1],
        //         directionIndex = Directions.indexOf(lastAction.type);
        //
        //     if (directionIndex + 1 < Directions.length) {
        //
        //     }
        //
        // }
        //
        // if (this.isSolved(target, actions)) {
        //     return actions;
        // }
        // return doSolve(target, actions);

    }

    solve(target) {
        return this.doSolve(target, []);
    }

};

export default CubeSolver;
