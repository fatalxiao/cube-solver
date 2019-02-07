'use strict';

import chai from 'chai';
import Cube from '../src/Cube';

const expect = chai.expect;

describe('IsValid', () => {

    it('IsValid-1', () => {
        expect(Cube.isValid('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD')).to.be.equal(true);
    });

});
