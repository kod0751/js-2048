let table = document.getElementById('table');
let data = [];

function createBorad() {
    let fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function() {
        let colData = [];
        data.push(colData);
        let tr = document.createElement('tr');
        [1,2,3,4].forEach(function(){
            colData.push(0);
            let td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
}

function draw() {
    data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
            if(rowData > 0 ) {
                table.children[i].children[j].textContent = rowData;
            } else {
                table.children[i].children[j].textContent = '';
            }
        });
    });
}

function randomNumber() {
    let blinkArr = [];
    data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
            if(!rowData) {
                blinkArr.push([i, j]);
            }
        });
    }); 
    let randomBlock = blinkArr[Math.floor(Math.random() * blinkArr.length)];
    data[randomBlock[0]][randomBlock[1]] = 2;
    draw();
}

function upMove() {
    let newData = [[],[],[],[]];
    data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
            if(rowData) {
                if(newData[j][newData[j].length - 1] && newData[j][newData[j].length - 1] === rowData) {
                    newData[j][newData[j].length - 1] *= 2;
                } else {
                    newData[j].push(rowData);
                }
            }
        });
    });
    [1,2,3,4].forEach(function(rowData, i) {
        [1,2,3,4].forEach(function(colData, j) {
            data[j][i] = newData[i][j] || 0;
        });
    });
}

function downMove() {
    let newData = [[],[],[],[]];
    data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
            if(rowData) {
                if(newData[j][0] && newData[j][0] === rowData) {
                    newData[j][0] *= 2;
                } else {
                    newData[j].unshift(rowData);
                }
            }
        });
    });
    [1,2,3,4].forEach(function(rowData, i) {
        [1,2,3,4].forEach(function(colData, j) {
            data[3 - j][i] = newData[i][j] || 0;
        });
    });
}

function leftMove() {
    let newData = [[],[],[],[]];
    data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
            if(rowData) {
                if(newData[i][newData[i].length - 1] && newData[i][newData[i].length - 1] === rowData) {
                    newData[i][newData[i].length - 1] *= 2;
                } else {
                    newData[i].push(rowData);
                }
            }
        });
    });
    console.log(newData);
    [1,2,3,4].forEach(function(colData, i) {
        [1,2,3,4].forEach(function(rowData, j) {
            data[i][j] = newData[i][j] || 0;
        });
    });
}

function rightMove() {
    let newData = [[],[],[],[]];
    data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
            if(rowData) {
                if(newData[i][0] && newData[i][0] === rowData) {
                    newData[i][0] *= 2;
                } else {
                    newData[i].unshift(rowData);
                }
            }
        });
    });
    console.log(newData);
    [1,2,3,4].forEach(function(colData, i) {
        [1,2,3,4].forEach(function(rowData, j) {
            data[i][3 - j] = newData[i][j] || 0;
        });
    });
}

function keyUp() {
    upMove();
    randomNumber();
}

function keyDown() {
    downMove();
    randomNumber();
}

function keyLeft() {
    leftMove();
    randomNumber();
}

function keyRight() {
    rightMove();
    randomNumber();
}
    

function main() {

    //게임 보드 생성
    createBorad();

    //랜덤 생성
    randomNumber();

    //각 방향으로 이동
    function control(e) {
        if(e.keyCode === 37 ) {
            keyLeft();
        } else if (e.keyCode === 38) {
            keyUp();
        } else if (e.keyCode === 39) {
            keyRight();
        } else if (e.keyCode === 40) {
            keyDown();
        }
    }
    document.addEventListener('keyup', control)

    //이동된 숫자들 합쳐주는 함수

    
    //점수 계산

    //게임 종료
    
}

document.addEventListener('DOMContentLoaded', main);