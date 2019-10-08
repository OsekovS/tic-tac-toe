class TicTacToe {
    constructor() {
        this.markStorage = [
            [null,null,null],
            [null,null,null],
            [null,null,null],
        ];
        this.winner=null;
        this.currentSymbol = 'x';
    }



    getCurrentPlayerSymbol() {
        return this.currentSymbol
    }

    nextTurn(row,col){
        if(this.markStorage[row][col] !== null) return false;
        this.markStorage[row][col] = this.currentSymbol;
        this.winnerComb()
        this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';
    }

    isFinished(){
        return this.winner !== null || this.isDraw();
    }

    getWinner() {
        return this.winner
    }

    noMoreTurns() {
        return this.markStorage.every(row => row.indexOf(null) === -1)
    }

    isDraw() {
        return this.noMoreTurns() && null === this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.markStorage[rowIndex][colIndex];
    }
    winnerComb(){
        let diagonalCounter1=0;
        let diagonalCounter2=0;
        if(this.markStorage.some(row => row.join('') === 
        this.currentSymbol+this.currentSymbol+this.currentSymbol)){ 
            this.winner = this.currentSymbol
            return 0 
        }
        for(let i=0;i<this.markStorage.length;i++){
            if(this.markStorage.every(row => row[i] === this.currentSymbol)){
                this.winner = this.currentSymbol
                return 0 
            }
            if(this.markStorage[i][i]===this.currentSymbol)
            diagonalCounter1++;
            if(this.markStorage[i][this.markStorage.length
                 - i -1]===this.currentSymbol)
            diagonalCounter2++;
        }
        if(diagonalCounter1 === this.markStorage.length ||
            diagonalCounter2 === this.markStorage.length)
            this.winner = this.currentSymbol
    }
}

 module.exports = TicTacToe;
