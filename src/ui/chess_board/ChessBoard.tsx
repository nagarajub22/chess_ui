import React, { RefObject } from "react";
import { ChessSquare } from "../../models/ChessSquare";
import { SQUARE_COLOR } from "../../models/SquareColor";

export const BOARD_SIZE = 600;
export const BOARD_COLUMNS = 8;
export const BOARD_ROWS = 8;
export const SQUARE_SIZE = Math.ceil(BOARD_SIZE / BOARD_COLUMNS);

export class ChessBoard extends React.Component {
	squares: ChessSquare[] = [];

	private canvasRef: RefObject<HTMLCanvasElement>;
	private ctx: CanvasRenderingContext2D | null;

	get board() {
		return this.canvasRef.current;
	}

	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.canvasRef = React.createRef();
		this.ctx = null;
	}

	componentDidMount() {
		if (this.checkSupport()) {
			this.ctx = this.board && this.board.getContext("2d");
			this.setSquares();
			this.drawBoard();
			this.registerListeners();
		}
	}

	render() {
		return <canvas ref={this.canvasRef} width="600" height="600"></canvas>;
	}

	// Private Methods
	private checkSupport() {
		return this.board?.getContext;
	}

	private setSquares() {
		let curY = 0,
			curX = 0;

		for (let i = 0; i < BOARD_ROWS; i++) {
			for (let j = 0; j < BOARD_COLUMNS; j++) {
				curX = j * SQUARE_SIZE;

				this.squares.push({
					id: (i + 1),
					x: curX,
					y: curY,
					color:
						(j + i) % 2 === 0
							? SQUARE_COLOR.WHITE
							: SQUARE_COLOR.BLACK,
				});
			}

			curY = curY + SQUARE_SIZE;
		}
	}

	private drawBoard() {
		if (this.ctx) {
			this.ctx.fillStyle = "#d2d2d2";
			this.ctx.fillRect(0, 0, 600, 600);
			this.drawSquares();
		}
	}

	private drawSquares() {
		if (this.ctx && this.squares.length > 0) {
			for (let i = 0; i < this.squares.length; i++) {
				this.ctx.fillStyle = this.squares[i].color;
				this.ctx.fillRect(
					this.squares[i].x,
					this.squares[i].y,
					600,
					600
				);
			}
		}
	}

	private registerListeners() {
		if (this.canvasRef) {
		}
	}
}
