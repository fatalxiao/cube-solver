'use strict';

import chai from 'chai';
import Cube from '../src/Cube';
import * as Actions from '../src/statics/Actions';

const expect = chai.expect;

describe('Transform', () => {

    it('Transform-1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        expect(cube.transform(Actions.U1)).to.be.equal('UDRRULFFRBFBRRDUFRRRDLFBLLBFDLLDULBUFUDFLBBUDUBLRBDFUD');
    });

});
