'use strict';

import chai from 'chai';
import Cube from '../src/Cube';
import * as Actions from '../src/statics/Actions';

const expect = chai.expect;

describe('Transform', () => {

    it('Transform-U1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.U1);
        expect(cube.valueOf()).to.be.equal('UDRRULFFRBFBRRDUFRRRDLFBLLBFDLLDULBUFUDFLBBUDUBLRBDFUD');
    });

    it('Transform-U2', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.U2);
        expect(cube.valueOf()).to.be.equal('FRUFUDRLRUBLRRDUFRBFBLFBLLBFDLLDULBURRDFLBBUDFUDRBDFUD');
    });

});
