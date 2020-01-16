import createBoard from "./createBoard"
import { createPieceSpotArray, getPiece, movePiece } from "./boardpieceSpots"
import { showPossibleMultiMoves, showPossibleSingleMoves } from "./showPossibleMoves"
import boardCleanup from "./boardCleanup"
createBoard()
createPieceSpotArray()
let oldPieceInfo = [];
document.querySelector("#board").addEventListener("click", function () {
    let row = 0;
let column = 0;



    if(event.target.id.split("--")[0]== ""||event.target.id.split("--")[1]== undefined){
         row = parseInt(event.target.parentNode.id.split("--")[0])
    }else{
        row = parseInt(event.target.id.split("--")[0])
    }

    if(event.target.id.split("--")[1]== ""||event.target.id.split("--")[1]== undefined){
       column = parseInt(event.target.parentNode.id.split("--")[1])
   }else{
   column = parseInt(event.target.id.split("--")[1])
   }



   let currentpiece = getPiece(row, column)


    let currentPosition = [row, column]

        if (document.getElementById(`${row}--${column}`).classList.contains("redBox")) {
            movePiece(currentPosition, oldPieceInfo);
            currentpiece = "";
            boardCleanup()
        }

        if(oldPieceInfo[0] != ""){
            boardCleanup()
        }

    if (currentpiece != "") {
        if (currentpiece.hasOwnProperty("singleMove")) {
            showPossibleSingleMoves(currentpiece.singleMove, currentPosition)
        } else {
            showPossibleMultiMoves(currentpiece, currentPosition)
        }
    }

   oldPieceInfo = [currentpiece, row, column]
})

