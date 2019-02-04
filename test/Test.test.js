'use strict';

import chai from 'chai';
import CubeSolver from '../src';

const expect = chai.expect;

describe('Test', () => {

    it('Basic', () =>
        expect(CubeSolver.solve('DRLUUBFBRBLURRLRUBLRDDFDLFUFUFFDBRDUBRUFLLFDDBFLUBLRBD'))
        .to.be.equal('D2 R\' D\' F2 B D R2 D2 R\' F2 D\' F2 U\' B2 L2 U2 D R2 U')
    );

});
