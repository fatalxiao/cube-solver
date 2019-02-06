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
export const FRONT_FRONT_INDEXES = [9, 10, 11, 12, 13, 14, 15, 16, 17];
export const FRONT_SIDE_INDEXES = [[6, 7, 8], [18, 21, 24], [27, 28, 29], [38, 41, 44]];
export const F1 = {
    name: ActionTypes.F1,
    type: Directions.FRONT,
    frontIndexes: FRONT_FRONT_INDEXES,
    sideIndexes: FRONT_SIDE_INDEXES,
    degree: 90
};
export const F2 = {
    name: ActionTypes.F2,
    type: Directions.FRONT,
    frontIndexes: FRONT_FRONT_INDEXES,
    sideIndexes: FRONT_SIDE_INDEXES,
    degree: 180
};
export const F3 = {
    name: ActionTypes.F3,
    type: Directions.FRONT,
    frontIndexes: FRONT_FRONT_INDEXES,
    sideIndexes: FRONT_SIDE_INDEXES,
    degree: 270
};

// Right
export const RIGHT_FRONT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const RIGHT_SIDE_INDEXES = [[9, 10, 11], [18, 19, 20], [36, 37, 38], [45, 46, 47]];
export const R1 = {
    name: ActionTypes.R1,
    type: Directions.RIGHT,
    frontIndexes: RIGHT_FRONT_INDEXES,
    sideIndexes: RIGHT_SIDE_INDEXES,
    degree: 90
};
export const R2 = {
    name: ActionTypes.R2,
    type: Directions.RIGHT,
    frontIndexes: RIGHT_FRONT_INDEXES,
    sideIndexes: RIGHT_SIDE_INDEXES,
    degree: 180
};
export const R3 = {
    name: ActionTypes.R3,
    type: Directions.RIGHT,
    frontIndexes: RIGHT_FRONT_INDEXES,
    sideIndexes: RIGHT_SIDE_INDEXES,
    degree: 270
};

// Down
export const DOWN_FRONT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const DOWN_SIDE_INDEXES = [[9, 10, 11], [18, 19, 20], [36, 37, 38], [45, 46, 47]];
export const D1 = {
    name: ActionTypes.D1,
    type: Directions.DOWN,
    frontIndexes: DOWN_FRONT_INDEXES,
    sideIndexes: DOWN_SIDE_INDEXES,
    degree: 90
};
export const D2 = {
    name: ActionTypes.D2,
    type: Directions.DOWN,
    frontIndexes: DOWN_FRONT_INDEXES,
    sideIndexes: DOWN_SIDE_INDEXES,
    degree: 180
};
export const D3 = {
    name: ActionTypes.D3,
    type: Directions.DOWN,
    frontIndexes: DOWN_FRONT_INDEXES,
    sideIndexes: DOWN_SIDE_INDEXES,
    degree: 270
};

// Left
export const LEFT_FRONT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const LEFT_SIDE_INDEXES = [[9, 10, 11], [18, 19, 20], [36, 37, 38], [45, 46, 47]];
export const L1 = {
    name: ActionTypes.L1,
    type: Directions.LEFT,
    frontIndexes: LEFT_FRONT_INDEXES,
    sideIndexes: LEFT_SIDE_INDEXES,
    degree: 90
};
export const L2 = {
    name: ActionTypes.L2,
    type: Directions.LEFT,
    frontIndexes: LEFT_FRONT_INDEXES,
    sideIndexes: LEFT_SIDE_INDEXES,
    degree: 180
};
export const L3 = {
    name: ActionTypes.L3,
    type: Directions.LEFT,
    frontIndexes: LEFT_FRONT_INDEXES,
    sideIndexes: LEFT_SIDE_INDEXES,
    degree: 270
};

// Back
export const BACK_FRONT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const BACK_SIDE_INDEXES = [[9, 10, 11], [18, 19, 20], [36, 37, 38], [45, 46, 47]];
export const B1 = {
    name: ActionTypes.B1,
    type: Directions.BACK,
    frontIndexes: BACK_FRONT_INDEXES,
    sideIndexes: BACK_SIDE_INDEXES,
    degree: 90
};
export const B2 = {
    name: ActionTypes.B2,
    type: Directions.BACK,
    frontIndexes: BACK_FRONT_INDEXES,
    sideIndexes: BACK_SIDE_INDEXES,
    degree: 180
};
export const B3 = {
    name: ActionTypes.B3,
    type: Directions.BACK,
    frontIndexes: BACK_FRONT_INDEXES,
    sideIndexes: BACK_SIDE_INDEXES,
    degree: 270
};
