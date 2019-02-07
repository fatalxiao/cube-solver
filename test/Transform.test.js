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

    it('Transform-U3', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.U3);
        expect(cube.valueOf()).to.be.equal('RFFLURRDUFUDRRDUFRUBLLFBLLBFDLLDULBUBFBFLBBUDRRDRBDFUD');
    });

    it('Transform-R1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.R1);
        expect(cube.valueOf()).to.be.equal('RLDDUBURBURRFRRRDDFULLFULLUFDFLDRLBBUBLFLBBUDFFBFBDRUD');
    });

    it('Transform-R2', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.R2);
        expect(cube.valueOf()).to.be.equal('RLLDUUURURFUDRRDRRFUFLFRLLBFDRLDFLBFUBLFLBBUDBFBBBDDUD');
    });

    it('Transform-R3', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.R3);
        expect(cube.valueOf()).to.be.equal('RLFDURURBDDRRRFRRUFURLFFLLFFDDLDBLBBUBLFLBBUDUFBUBDLUD');
    });

    it('Transform-F1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.F1);
        expect(cube.valueOf()).to.be.equal('RLRDUFDBLURDRRDFFRLLFLFUBBDURRLDULBUUBFFLDBULBFBRBDFUD');
    });

    it('Transform-F2', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.F2);
        expect(cube.valueOf()).to.be.equal('RLRDUFLDFDRDBRDLFRBLLBFLDUFFRULDULBUUBUFLRBURBFBRBDFUD');
    });

    it('Transform-F3', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.F3);
        expect(cube.valueOf()).to.be.equal('RLRDUFRRULRDDRDFFRDBBUFLFLLLBDLDULBUUBFFLRBUUBFBRBDFUD');
    });

    it('Transform-D1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.D1);
        expect(cube.valueOf()).to.be.equal('RLRDUFURFRRDRRDLLBFUDLFBBUDLLFBDDUULUBLFLBFUDBFBRBDUFR');
    });

    it('Transform-D2', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.D2);
        expect(cube.valueOf()).to.be.equal('RLRDUFURFRRDRRDBUDFUDLFBFUDUBLUDLLDFUBLFLBUFRBFBRBDLLB');
    });

    it('Transform-D3', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.D3);
        expect(cube.valueOf()).to.be.equal('RLRDUFURFRRDRRDFUDFUDLFBUFRLUUDDBFLLUBLFLBLLBBFBRBDBUD');
    });

    it('Transform-L1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.L1);
        expect(cube.valueOf()).to.be.equal('DLRDUFBRFRRDRRDUFRRUDDFBULBFDLLDULBUBFUULBDBLBFLRBLFUF');
    });

    it('Transform-L2', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.L2);
        expect(cube.valueOf()).to.be.equal('FLRLUFLRFRRDRRDUFRDUDDFBBLBRDLDDUUBUDUBBLFLBUBFLRBLFUF');
    });

    it('Transform-L3', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.L3);
        expect(cube.valueOf()).to.be.equal('FLRLUFLRFRRDRRDUFRFUDLFBLLBDDLDDUBBULBDBLUUFBBFURBDFUR');
    });

    it('Transform-B1', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.B1);
        expect(cube.valueOf()).to.be.equal('DDRDUFURFRRURRBUFLFUDLFBLLBFDLLDUUFBRBLLLBRUDFRBUBFDDB');
    });

    it('Transform-B2', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.B2);
        expect(cube.valueOf()).to.be.equal('UBLDUFURFRRBRRFUFUFUDLFBLLBFDLLDURLRRBLDLBDUDDUFDBRBFB');
    });

    it('Transform-B3', () => {
        const cube = new Cube('RLRDUFURFRRDRRDUFRFUDLFBLLBFDLLDULBUUBLFLBBUDBFBRBDFUD');
        cube.transform(Actions.B3);
        expect(cube.valueOf()).to.be.equal('BFUDUFURFRRRRRLUFRFUDLFBLLBFDLLDURDDLBLBLBUUDBDDFBUBRF');
    });

});
