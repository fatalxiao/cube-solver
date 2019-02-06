import * as Directions from './Directions';

// Up
export const U = {
    name: 'U',
    type: Directions.UP
};
export const U2 = {
    name: 'U2',
    type: Directions.UP
};
export const UR = {
    name: 'U\'',
    type: Directions.UP
};
export const UR2 = {
    name: 'U\'2',
    type: Directions.UP
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
export const FR2 = {
    name: 'F\'2',
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
export const RR2 = {
    name: 'R\'2',
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
export const DR2 = {
    name: 'D\'2',
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
export const LR2 = {
    name: 'L\'2',
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
export const BR2 = {
    name: 'B\'2',
    type: Directions.BACK
};

// common order
export default [
    [U, U2, UR, UR2],
    [F, F2, FR, FR2],
    [R, R2, RR, RR2],
    [D, D2, DR, DR2],
    [L, L2, LR, LR2],
    [B, B2, BR, BR2]
];
