class WhitePawn {
    constructor() {
        this.name = "whitePawn",
            this.image = "&#9817",
            this.hasMadeOneMove = false
        this.color = "white",
        this.singleMove = [[-1,0], [0,0]]
    }
}

class WhiteRook {
    constructor() {
        this.name = "whiteRook",
        this.image = "&#9814",
        this.color = "white"
        this.moveArray = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    }
}

class BlackPawn {
    constructor() {
        this.name = "blackPawn",
            this.image = "&#9823",
            this.hasMadeOneMove = false
        this.color = "black"
       this.singleMove = [[1,0], [0,0]]
    }
}

class BlackRook {
    constructor() {
        this.name = "blackRook",
            this.image = "&#9820",
        this.color = "white"
        this.moveArray = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    }
}

class WhiteKnight {
    constructor() {
        this.name = "whiteKnight",
            this.image = "&#9816",
        this.color = "white",
        this.singleMove = [[2,1], [2,-1], [-2,1], [-2,-1],[1,2],[1, -2],[-1,2],[-1, -2]]
    }
}
class BlackKnight {
    constructor() {
        this.name = "blackKnight",
            this.image = "&#9822",
        this.color = "black",
        this.singleMove = [[2,1], [2,-1], [-2,1], [-2,-1],[1,2],[1, -2],[-1,2],[-1, -2]]
    }
}
class WhiteBishop {
    constructor() {
        this.name = "whiteBishop",
            this.image = "&#9815",
            this.hasMadeOneMove = false
        this.color = "white"
        this.moveArray = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
    }
}
class BlackBishop {
    constructor() {
        this.name = "blackBishop",
        this.image = "&#9821",
        this.color = "black"
        this.moveArray = [[1, 1], [1, -1], [-1, -1], [-1, 1]];

    }
}
class WhiteQueen {
    constructor() {
        this.name = "whiteQueen",
            this.image = "&#9813",
        this.color = "white"
        this.moveArray = [[0, 1], [0, -1], [-1, 0], [1, 0],[1, 1], [1, -1], [-1, -1], [-1, 1]];
    }
}
class BlackQueen {
    constructor() {
        this.name = "blackQueen",
            this.image = "&#9819",
        this.color = "black"
        this.moveArray = [[0, 1], [0, -1], [-1, 0], [1, 0],[1, 1], [1, -1], [-1, -1], [-1, 1]];
    }
}
class WhiteKing {
    constructor() {
        this.name = "whiteKing",
            this.image = "&#9812",
        this.color = "white",
        this.singleMove = [[1,1], [-1,-1],[1,-1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]]
    }
}
class BlackKing {
    constructor() {
        this.name = "blackKing",
            this.image = "&#9818",
        this.color = "black",
        this.singleMove = [[1,1], [-1,-1],[1,-1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]]
    }
}


export { WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing }
