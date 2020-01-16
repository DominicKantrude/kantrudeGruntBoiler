const boardCleanup = () => {
    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            if( document.getElementById(`${i}--${j}`).classList.contains("redBox"))
            document.getElementById(`${i}--${j}`).classList.toggle("redBox")
        }
    }
}
export default boardCleanup
