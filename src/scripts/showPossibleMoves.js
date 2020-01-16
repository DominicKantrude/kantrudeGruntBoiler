import { createPieceSpotArray, getPiece } from "./boardpieceSpots"

const showPossibleMultiMoves = (currentPiece, currentPosition) => {

    currentPiece.moveArray.forEach(move => {
        let i = currentPosition[0]

        for (let j = currentPosition[1]; j < 8 && j > -1; j) {


            i += move[0]
            j += move[1]

            if (i < 0 || i > 7) {
                break;
            }

            // if(getPiece(i, j) != "" ){
            //     console.log(getPiece(i, j).color)
            //     console.log(currentPiece.color)

            //     if(getPiece(i, j).color != undefined){
            //         if(getPiece(i, j).color == currentPiece.color ){
            //             break;
            //         }
            //     }

            //  }

            //|| getPiece(i, j).color != currentPiece.color
console.log(`${i} ${j}`)
            if (getPiece(i, j) != "") {
                break;
            }


            document.getElementById(`${i}--${j}`).classList.toggle("redBox")
            document.getElementById(`${i}--${j}`).innerHTML = `
            <p >${i} , ${j}</p>
            `
        }
    });
}

const showPossibleSingleMoves = (singleMoveArray, currentPosition) => {
    singleMoveArray.forEach(move => {
        let j = currentPosition[0] + move[0]
        let i = currentPosition[1] + move[1]

        //if move is within bounds of board
        //if(getPiece(row, column))
        if (i < 8 && i > -1 && j < 8 && j > -1) {

            document.getElementById(`${j}--${i}`).classList.toggle("redBox")
        }
    })
}

const isEnemyPiece = () => {

}

export { showPossibleMultiMoves, showPossibleSingleMoves }