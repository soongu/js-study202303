const nameList = ['구빛나', '권상지', '김영수',
    '김지승', '김태근', '김혜영', '박수민',
    '송유근', '신지송', '원석빈', '윤영식',
    '이기덕', '이동우', '이민정', '이상욱',
     '이재필', '이진수', '이진호',
    '이채원', '정동관', '조경훈', '조상천',
    '조성훈', '조예원', '채지원', '최예진',
    '최재경', '한세진', '홍성준'
]

let teamNo = 1;
const teams = [];
// 총팀원
const numOfTotal = nameList.length;

// 팀원 수 배열
const teamNumbers = [];
const max = 4, min = 3;
let accum = 0;
while (accum < numOfTotal) {

    // const numOfTotal / min
}


function makeTeam(numOfPerson) {

    const teamList = [];
    
    for (let i = 0; i < numOfPerson; i++) {
        const randomIndex = Math.floor(Math.random() * nameList.length);
        const select = nameList[randomIndex];
        teamList.push(select);
        nameList.splice(randomIndex, 1);
    }

    // console.log(teamList);
    // console.log(nameList.length);


    teams.push({
        teamNo: teamNo++,
        teamList: teamList
    });

};