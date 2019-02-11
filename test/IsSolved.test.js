'use strict';

import chai from 'chai';
import Cube from '../src/classes/Cube';

const expect = chai.expect;

describe('IsSolved', () => {

    it('IsSolved-1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        expect(cube.isSolved()).to.be.equal(false);
    });

    it('IsSolved-2', () => {
        const cube = new Cube('UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB');
        expect(cube.isSolved()).to.be.equal(true);
    });

});
