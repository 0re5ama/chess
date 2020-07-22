document.addEventListener('DOMContentLoaded', () => {
    let board = document.querySelector('.board');
    let files = 'abcdefgh'.split('');
    let ranks = '12345678'.split('');
    let colors = ['white', 'black'];
    let pieceColor = {
        'b': 'black',
        'w': 'white'
    };

    let pieceName = {
        'r': 'rook',
        'n': 'knight',
        'b': 'bishop',
        'q': 'queen',
        'k': 'king',
        'p': 'pawn'
    };

    let pieces = new Map([
        ['a1', 'wr'],
        ['b1', 'wn'],
        ['c1', 'wb'],
        ['d1', 'wq'],
        ['e1', 'wk'],
        ['f1', 'wb'],
        ['g1', 'wn'],
        ['h1', 'wr'],

        ['a2', 'wp'],
        ['b2', 'wp'],
        ['c2', 'wp'],
        ['d2', 'wp'],
        ['e2', 'wp'],
        ['f2', 'wp'],
        ['g2', 'wp'],
        ['h2', 'wp'],

        ['a8', 'br'],
        ['b8', 'bn'],
        ['c8', 'bb'],
        ['d8', 'bq'],
        ['e8', 'bk'],
        ['f8', 'bb'],
        ['g8', 'bn'],
        ['h8', 'br'],

        ['a7', 'bp'],
        ['b7', 'bp'],
        ['c7', 'bp'],
        ['d7', 'bp'],
        ['e7', 'bp'],
        ['f7', 'bp'],
        ['g7', 'bp'],
        ['h7', 'bp'],
    ]);
    ranks.reverse().forEach((r, i) => {
        files.reverse().forEach((f, j) => {
            let color = (i + j) % 2;
            let elSquare = document.createElement('div');
            elSquare.classList.add('square');
            elSquare.classList.add(colors[color]);
            elSquare.id = f + r;
            if (pieces.has(elSquare.id)) {
                let piece = pieces.get(elSquare.id);
                let elPiece = document.createElement('i');
                elPiece.classList.add('fas');
                elPiece.classList.add('piece');
                elPiece.classList.add('fa-chess-' + pieceName[piece[1]]);
                elPiece.classList.add(pieceColor[piece[0]]);
                elSquare.appendChild(elPiece);
            }
            board.appendChild(elSquare);
        });
    });
});
