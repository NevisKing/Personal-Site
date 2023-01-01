<script lang="js">
const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;

</script>

<body>
    <div class="board" id="board">
           <div class="cell" data-cell>{a}</div>
           <div class="cell" data-cell>{b}</div>
           <div class="cell" data-cell>{c}</div>
           <div class="cell" data-cell>{d}</div>
           <div class="cell" data-cell>{e}</div>
           <div class="cell" data-cell>{f}</div>
           <div class="cell" data-cell>{g}</div>
           <div class="cell" data-cell>{h}</div>
           <div class="cell" data-cell>{i}</div>
       </div>
       <div class="winning-message" id="winningMessage">
           <div id="winningMessageText"></div>
           <button id="restartButton">Restart</button>
       </div>
   </body>


<style>
    :root {
	--cell-size: 100px;

	--color: #81c3fd; /* for hover */
	--color-set: #0275d8; /* when set */
	--l: 10px; /* X line-width */
}
body {
	margin: 0;
}

.board {
	width: 100vw;
	height: 100vh;
	display: grid;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
	grid-template-columns: repeat(3, auto)
}
.cell {
	width: var(--cell-size);
	height: var(--cell-size);
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;
}
/* remove border for edges */
.cell:nth-child(1), .cell:nth-child(2), .cell:nth-child(3) {
	border-top: none;
}

.cell:nth-child(1), .cell:nth-child(4), .cell:nth-child(7) {
	border-left: none;
}

.cell:nth-child(3), .cell:nth-child(6), .cell:nth-child(9) {
	border-right: none;
}

.cell:nth-child(7), .cell:nth-child(8), .cell:nth-child(9) {
	border-bottom: none;
}
.cell.x, .cell.circle {
	cursor: not-allowed;
}
</style>