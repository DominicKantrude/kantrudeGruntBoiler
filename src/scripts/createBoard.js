const createBoard = () => {
    let boardHtml = ""
    let colorToggle = "white"
    boardHtml += `<section id="board">`
    for (let j = 0; j < 8; j++) {
        boardHtml += `<section class="boardRow">`;

        for (let i = 0; i < 8; i++) {
            boardHtml += `<section id="${j}--${i}" class="boardBox ${colorToggle}"></section>`
            if(i < 7){
            if(colorToggle==="white"){
                colorToggle = "black"
            }else{
                colorToggle = "white"
            }
        }
        }
        boardHtml += `</section>`;
    }
   boardHtml += `</section>`

    document.querySelector("#board").innerHTML = boardHtml;
}
export default createBoard