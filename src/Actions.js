import * as Directions from './Directions';
import * as ActionTypes from './ActionTypes';

// Up
export const UP_FRONT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const UP_SIDE_INDEXES = [[9, 10, 11], [18, 19, 20], [36, 37, 38], [45, 46, 47]];
export const U1 = {
    name: ActionTypes.U1,
    type: Directions.UP,
    frontIndexes: UP_FRONT_INDEXES,
    sideIndexes: UP_SIDE_INDEXES,
    degree: 90
};
export const U2 = {
    name: ActionTypes.U2,
    type: Directions.UP,
    frontIndexes: UP_FRONT_INDEXES,
    sideIndexes: UP_SIDE_INDEXES,
    degree: 180
};
export const U3 = {
    name: ActionTypes.U3,
    type: Directions.UP,
    frontIndexes: UP_FRONT_INDEXES,
    sideIndexes: UP_SIDE_INDEXES,
    degree: 270
};

// Front
export const F = {
    name: 'F',
    type: Directions.FRONT
};
export const F2 = {
    name: 'F2',
    type: Directions.FRONT
};
export const FR = {
    name: 'F\'',
    type: Directions.FRONT
};

// Right
export const R = {
    name: 'R',
    type: Directions.RIGHT
};
export const R2 = {
    name: 'R2',
    type: Directions.RIGHT
};
export const RR = {
    name: 'R\'',
    type: Directions.RIGHT
};

// Down
export const D = {
    name: 'D',
    type: Directions.DOWN
};
export const D2 = {
    name: 'D2',
    type: Directions.DOWN
};
export const DR = {
    name: 'D\'',
    type: Directions.DOWN
};

// Left
export const L = {
    name: 'L',
    type: Directions.LEFT
};
export const L2 = {
    name: 'L2',
    type: Directions.LEFT
};
export const LR = {
    name: 'L\'',
    type: Directions.LEFT
};

// Back
export const B = {
    name: 'B',
    type: Directions.BACK
};
export const B2 = {
    name: 'B2',
    type: Directions.BACK
};
export const BR = {
    name: 'B\'',
    type: Directions.BACK
};
