import {WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing} from "./pieces"
import renderPieces from "./renderPieces"
const pieceSpotArray = [];
const createPieceSpotArray = () => {

    //create multi dimensional array to hold pieces
    for (let j = 0; j < 8; j++) {
        let innerArray = [];
        for (let i = 0; i < 8; i++) {
            innerArray.push("");
        }
        pieceSpotArray.push(innerArray);
    }

                pieceSpotArray[0][0] = new BlackRook();
                pieceSpotArray[0][7] = new BlackRook();

                pieceSpotArray[7][7] = new WhiteRook();
                pieceSpotArray[7][0] = new WhiteRook();

                pieceSpotArray[7][7] = new WhiteRook();
                pieceSpotArray[7][0] = new WhiteRook();

                // for(let i = 0; i <=7 ; i++){
                //     pieceSpotArray[6][i] = new WhitePawn();
                // }

                // for(let i = 0; i <=7 ; i++){
                //     pieceSpotArray[1][i] = new BlackPawn();
                // }

                pieceSpotArray[7][1] = new WhiteKnight();
                pieceSpotArray[7][6] = new WhiteKnight();

                pieceSpotArray[0][1] = new BlackKnight();
                pieceSpotArray[0][6] = new BlackKnight();

                pieceSpotArray[7][2] = new WhiteBishop();
                pieceSpotArray[7][5] = new WhiteBishop();

                pieceSpotArray[0][2] = new BlackBishop();
                pieceSpotArray[0][5] = new BlackBishop();

                pieceSpotArray[7][3] = new WhiteQueen();
                pieceSpotArray[0][3] = new BlackQueen();

                pieceSpotArray[7][4] = new WhiteKing();
                pieceSpotArray[0][4] = new BlackKing();


    renderPieces(pieceSpotArray)
}

const getPiece = (row, column) =>{

    if(pieceSpotArray[row][column] != ""){
        return pieceSpotArray[row][column]
    }
   return "";
}

const movePiece = (currentPosition, oldPieceInfo) =>{
    pieceSpotArray[currentPosition[0]][currentPosition[1]] = oldPieceInfo[0];

    pieceSpotArray[oldPieceInfo[1]][oldPieceInfo[2]] = "";

    renderPieces(pieceSpotArray)
}
export {createPieceSpotArray, getPiece, movePiece}





