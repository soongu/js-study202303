
function add(n1, n2) {
    
    return n1 + n2; // 탈출문

    console.log('메롱');
}

// 반환값: 함수 호출 이후에 함수밖으로 전달되는 값
var r1 = add(5, 7);

add(r1, r1 * 2); // add(12, 24)

// 안쪽으로 쭉가서 실행 같은레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3,4), add(6,2)));
console.log(`r2 : ${r2}`);


// 리턴이 없는 함수 (void 함수)

function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

// 리턴이 없는 함수는 변수에 담지말고, 다른함수에 인수로 전달 X
multi(10, 3);
// console.log(`r3 : ${r3}`);

multi(add(4,3), add(5,5));

var r4 = add(multi(3,2), 40);
console.log(`r4: ${r4}`);