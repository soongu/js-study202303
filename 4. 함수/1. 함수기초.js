
/*
console.log('김철수님 안녕하세요! 방가방가!');
console.log('오늘도 즐거운 하루되세요~~~');


// 100줄 코딩

console.log('박영희님 안녕하세요! 방가방가!');
console.log('오늘도 즐거운 하루되세요~~~');

// 3000줄 코딩

console.log('김두한님 안녕하세요! 방가방가!');
console.log('오늘도 즐거운 하루되세요~~~');

*/


// 함수 정의 - 만든다
function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요! 어쩔티비!`);
    console.log('오늘도 즐거운 하루되세요~~~ㅋㅋ루삥뽕');
}

// 함수 호출 - 사용한다
happyGreeting('뽀로로');

// 1000줄 코딩

happyGreeting('삐리리');

// ~~~~

happyGreeting('김두한');


function makeLine() {
    console.log('==========================');
}

for (var i = 0; i < 5; i++) {
    makeLine();
}


// 원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2

function calcAreaCircle(r) {
    // console.log('야!!');
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}

var r1 = calcAreaCircle(5);
console.log(r1);

///~~~~
console.log(calcAreaCircle(15));

//~~~~
var r3 = calcAreaCircle(20);