const gridDisplay = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');
const width = 4;
let squares = [];

function createBorad() {

    for (let i=0; i < width*width; i++) {
        square = document.createElement('div')
        square.innerHTML = 0
        gridDisplay.appendChild(square)
        squares.push(square)
    }
};

function main() {
    //게임 보드 생성
    createBorad();

    //각 방향으로 이동

    //이동된 숫자들 합쳐주는 함수

    //점수 계산

    //게임 종료

    
}

document.addEventListener('DOMContentLoaded', main);