const renderPieces = (pieceSpotArray) => {
    for (let j = 0; j < 8; j++) {

        for (let i = 0; i < 8; i++) {
            if (pieceSpotArray[j][i] != "") {
                document.getElementById(`${j}--${i}`).innerHTML = `
                <p class="bigText">${pieceSpotArray[j][i].image}</p>
                `
            }
            else{
                document.getElementById(`${j}--${i}`).innerHTML = `<p>${j} ${i}</p>`
            }
        }
    }
}

export default renderPieces
