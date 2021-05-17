import { SQUARE_COLOR } from './SquareColor';

export interface ChessSquare {
    id: number;
    x: number;
    y: number;
    color: SQUARE_COLOR
}