let table = document.getElementById('table');
let data = [];

function createBorad() {
    let fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function() {
        let rowData = [];
        data.push(rowData);
        let tr = document.createElement('tr');
        [1,2,3,4].forEach(function(){
            rowData.push(0);
            let td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
}

function draw() {
    data.forEach(function(rowData, i) {
        rowData.forEach(function(colData, j) {
            if(colData > 0 ) {
                table.children[i].children[j].textContent = colData;
            } else {
                table.children[i].children[j].textContent = '';
            }
        });
    });
}
    

function main() {

    //게임 보드 생성
    createBorad();
    draw();

    //각 방향으로 이동

    //이동된 숫자들 합쳐주는 함수

    //점수 계산

    //게임 종료
    
}

document.addEventListener('DOMContentLoaded', main);