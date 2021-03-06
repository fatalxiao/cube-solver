'use strict';

import * as ActionTypes from './ActionTypes';
import * as Directions from './Directions';
import * as RotateDegrees from './RotateDegrees';

/**
 * @author fatalxiao
 * All Cube actions and their indexes
 */

// Up
export const UP_FRONT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const UP_SIDE_INDEXES = [47, 46, 45, 11, 10, 9, 20, 19, 18, 38, 37, 36];
export const U1 = { // U
    name: ActionTypes.U1,
    type: Directions.UP,
    frontIndexes: UP_FRONT_INDEXES,
    sideIndexes: UP_SIDE_INDEXES,
    degree: RotateDegrees.QUARTER
};
export const U2 = { // U2
    name: ActionTypes.U2,
    type: Directions.UP,
    frontIndexes: UP_FRONT_INDEXES,
    sideIndexes: UP_SIDE_INDEXES,
    degree: RotateDegrees.HALF
};
export const U3 = { // U'
    name: ActionTypes.U3,
    type: Directions.UP,
    frontIndexes: UP_FRONT_INDEXES,
    sideIndexes: UP_SIDE_INDEXES,
    degree: RotateDegrees.THREE_QUARTERS
};

// Right
export const RIGHT_FRONT_INDEXES = [9, 10, 11, 12, 13, 14, 15, 16, 17];
export const RIGHT_SIDE_INDEXES = [8, 5, 2, 45, 48, 51, 35, 32, 29, 26, 23, 20];
export const R1 = { // R
    name: ActionTypes.R1,
    type: Directions.RIGHT,
    frontIndexes: RIGHT_FRONT_INDEXES,
    sideIndexes: RIGHT_SIDE_INDEXES,
    degree: RotateDegrees.QUARTER
};
export const R2 = { // R2
    name: ActionTypes.R2,
    type: Directions.RIGHT,
    frontIndexes: RIGHT_FRONT_INDEXES,
    sideIndexes: RIGHT_SIDE_INDEXES,
    degree: RotateDegrees.HALF
};
export const R3 = { // R'
    name: ActionTypes.R3,
    type: Directions.RIGHT,
    frontIndexes: RIGHT_FRONT_INDEXES,
    sideIndexes: RIGHT_SIDE_INDEXES,
    degree: RotateDegrees.THREE_QUARTERS
};

// Front
export const FRONT_FRONT_INDEXES = [18, 19, 20, 21, 22, 23, 24, 25, 26];
export const FRONT_SIDE_INDEXES = [6, 7, 8, 9, 12, 15, 29, 28, 27, 44, 41, 38];
export const F1 = { // F
    name: ActionTypes.F1,
    type: Directions.FRONT,
    frontIndexes: FRONT_FRONT_INDEXES,
    sideIndexes: FRONT_SIDE_INDEXES,
    degree: RotateDegrees.QUARTER
};
export const F2 = { // F2
    name: ActionTypes.F2,
    type: Directions.FRONT,
    frontIndexes: FRONT_FRONT_INDEXES,
    sideIndexes: FRONT_SIDE_INDEXES,
    degree: RotateDegrees.HALF
};
export const F3 = { // F'
    name: ActionTypes.F3,
    type: Directions.FRONT,
    frontIndexes: FRONT_FRONT_INDEXES,
    sideIndexes: FRONT_SIDE_INDEXES,
    degree: RotateDegrees.THREE_QUARTERS
};

// Down
export const DOWN_FRONT_INDEXES = [27, 28, 29, 30, 31, 32, 33, 34, 35];
export const DOWN_SIDE_INDEXES = [24, 25, 26, 15, 16, 17, 51, 52, 53, 42, 43, 44];
export const D1 = { // D
    name: ActionTypes.D1,
    type: Directions.DOWN,
    frontIndexes: DOWN_FRONT_INDEXES,
    sideIndexes: DOWN_SIDE_INDEXES,
    degree: RotateDegrees.QUARTER
};
export const D2 = { // D2
    name: ActionTypes.D2,
    type: Directions.DOWN,
    frontIndexes: DOWN_FRONT_INDEXES,
    sideIndexes: DOWN_SIDE_INDEXES,
    degree: RotateDegrees.HALF
};
export const D3 = { // D'
    name: ActionTypes.D3,
    type: Directions.DOWN,
    frontIndexes: DOWN_FRONT_INDEXES,
    sideIndexes: DOWN_SIDE_INDEXES,
    degree: RotateDegrees.THREE_QUARTERS
};

// Left
export const LEFT_FRONT_INDEXES = [36, 37, 38, 39, 40, 41, 42, 43, 44];
export const LEFT_SIDE_INDEXES = [0, 3, 6, 18, 21, 24, 27, 30, 33, 53, 50, 47];
export const L1 = { // L
    name: ActionTypes.L1,
    type: Directions.LEFT,
    frontIndexes: LEFT_FRONT_INDEXES,
    sideIndexes: LEFT_SIDE_INDEXES,
    degree: RotateDegrees.QUARTER
};
export const L2 = { // L2
    name: ActionTypes.L2,
    type: Directions.LEFT,
    frontIndexes: LEFT_FRONT_INDEXES,
    sideIndexes: LEFT_SIDE_INDEXES,
    degree: RotateDegrees.HALF
};
export const L3 = { // L'
    name: ActionTypes.L3,
    type: Directions.LEFT,
    frontIndexes: LEFT_FRONT_INDEXES,
    sideIndexes: LEFT_SIDE_INDEXES,
    degree: RotateDegrees.THREE_QUARTERS
};

// Back
export const BACK_FRONT_INDEXES = [45, 46, 47, 48, 49, 50, 51, 52, 53];
export const BACK_SIDE_INDEXES = [2, 1, 0, 36, 39, 42, 33, 34, 35, 17, 14, 11];
export const B1 = { // B
    name: ActionTypes.B1,
    type: Directions.BACK,
    frontIndexes: BACK_FRONT_INDEXES,
    sideIndexes: BACK_SIDE_INDEXES,
    degree: RotateDegrees.QUARTER
};
export const B2 = { // B2
    name: ActionTypes.B2,
    type: Directions.BACK,
    frontIndexes: BACK_FRONT_INDEXES,
    sideIndexes: BACK_SIDE_INDEXES,
    degree: RotateDegrees.HALF
};
export const B3 = { // B'
    name: ActionTypes.B3,
    type: Directions.BACK,
    frontIndexes: BACK_FRONT_INDEXES,
    sideIndexes: BACK_SIDE_INDEXES,
    degree: RotateDegrees.THREE_QUARTERS
};

// all actions
export default [U1, U2, U3, R1, R2, R3, F1, F2, F3, D1, D2, D3, L1, L2, L3, B1, B2, B3];
