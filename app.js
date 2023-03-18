let matrix = [[false, false, false],
[false, false, false],
[false, false, false]]
let counter = 0
let marker = 0

function resetBoard() {
    counter = 0
    marker = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let element = document.querySelector(`[row="${i}"] [col="${j}"]`);
            element.innerHTML = "";
            element.classList.remove('disabled');
            document.getElementsByClassName("message")[0].innerHTML = "";
        }
    }
}

function mark(row, col) {
    marker = marker ^ 1
    let mark = (marker === 1) ? 'X' : 'O'
    matrix[row][col] = mark
    let element = document.querySelector(`[row="${row}"] [col="${col}"]`)
    element.innerHTML = mark
    element.classList.add('disabled');
    counter++

    if (isEnd()) {
        let element = document.getElementsByClassName("message")
        element[0].innerHTML = isEnd()
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let element = document.querySelector(`[row="${i}"] [col="${j}"]`)
                element.classList.add('disabled');
            }
        }
    }
}

function isEnd() {
    
    for (let i = 0; i < 3; i++) {
        let curr = matrix[i][0]
        let j = 1
        if (curr) {
            while (j < 3) {
                if (matrix[i][j] != curr) break
                j++
            }
            if (j == 3) return `Game Over ${curr} wins`
        }
    }

    for (let i = 0; i < 3; i++) {
        let curr = matrix[0][i]
        let j = 1
        if (curr) {
            while (j < 3) {
                if (matrix[j][i] != curr) break
                j++
            }
            if (j == 3) return `Game Over ${curr} wins`
        }
    }


    let curr = matrix[0][0]
    for (let j = 1; j < 4; j++) {
        if (curr) {
            if (j == 3) return `Game Over ${curr} wins`
            if (matrix[0 + j][0 + j] != curr) break
        }
    }

    curr = matrix[0][2]
    for (let j = 1; j < 4; j++) {
        if (curr) {
            if (j == 3) return `Game Over ${curr} wins`
            if (matrix[0 + j][2 - j] != curr) break
        }
    }

    if (counter == 9) return 'Game Draws'

}