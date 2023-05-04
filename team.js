class Student {

    constructor(name, teamHistory) {
        this.name = name;
        this.teamHistory = teamHistory;
    }
}


function start() {

    // 이름 배열
    const nameList = [
        new Student('구빛나', [1, 6]),
        new Student('권상지', [8, 9]),
        // new Student('김영수', [6, 3]),
        new Student('김지승', [7, 5]),
        new Student('김태근', [8, 7]),
        new Student('김혜영', [1, 9]),
        new Student('박수민', [9, 1]),
        new Student('송유근', [3, 3]),
        new Student('신지송', [2, 2]),
        new Student('원석빈', [6, 5]),
        new Student('윤영식', [9, 5]),
        new Student('이기덕', [1, 8]),
        new Student('이동우', [6, 3]),
        new Student('이민정', [5, 9]),
        new Student('이상욱', [3, 6]),
        new Student('이재필', [9, 8]),
        new Student('이진수', [7, 1]),
        new Student('이진호', [2, 4]),
        new Student('이채원', [8, 2]),
        new Student('정동관', [4, 7]),
        new Student('조경훈', [4, 6]),
        new Student('조상천', [3, 2]),
        new Student('조성훈', [7, 4]),
        new Student('조예원', [8, 8]),
        new Student('채지원', [2, 3]),
        new Student('최예진', [4, 9]),
        new Student('최재경', [5, 7]),
        new Student('한세진', [9, 4]),
        new Student('홍성준', [5, 1]),
    ];

    let teamNo = 1;

    // 팀원 정보 배열
    const teams = [];

    // 팀원 수 배열
    const teamNumbers = [4,4,4,4,4,4,4];
    
    // 하나의 팀정보
    const teamList = [];
    
    let checkCount = 0;
    
    const checkHistory = (select) => {

        // 이전 히스토리와 겹치는 팀원이 있으면 스킵
        for (const person of teamList) {
            if (person === select) continue;

            for (let i = 0; i < person.teamHistory.length; i++) {
                if (person.teamHistory[i] === select.teamHistory[i]) {
                    checkCount++;
                    return false;
                }
            }
        }
        console.log(`${select.name}체크중: ${checkCount}회`);
        
        return true;
    };

    // 팀원 랜덤 생성 함수
    const makeTeam = numOfPerson => {

        while (teamList.length < numOfPerson) {
            const randomIndex = Math.floor(Math.random() * nameList.length);
            const select = nameList[randomIndex];

            if (checkHistory(select) || checkCount > 100) {
                checkCount = 0;
                teamList.push(select);
                nameList.splice(randomIndex, 1);
            }
        }

        teams.push({
            teamNo: teamNo++,
            teamList: teamList.map(t => t.name)
        });

        teamList.splice(0);

    };

    // 팀원 정보 출력함수
    const printTeamInfo = () => {

        teams.forEach(({
            teamNo,
            teamList
        }) => {
            console.log(`${teamNo}조 : [${teamList}]`);
        });
    };

    teamNumbers.forEach(n => {
        makeTeam(n);
    });

    printTeamInfo();

}





//============[ execute ]=============//
(() => {
    start();
})();