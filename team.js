function start() {

    // 이름 배열
    const nameList = [{
            name: '구빛나',
            teamHistory: [1]
        },
        {
            name: '권상지',
            teamHistory: [8]
        },
        {
            name: '김영수',
            teamHistory: [6]
        },
        {
            name: '김지승',
            teamHistory: [7]
        },
        {
            name: '김태근',
            teamHistory: [8]
        },
        {
            name: '김혜영',
            teamHistory: [1]
        },
        {
            name: '박수민',
            teamHistory: [9]
        },
        {
            name: '송유근',
            teamHistory: [3]
        },
        {
            name: '신지송',
            teamHistory: [2]
        },
        {
            name: '원석빈',
            teamHistory: [6]
        },
        {
            name: '윤영식',
            teamHistory: [9]
        },
        {
            name: '이기덕',
            teamHistory: [1]
        },
        {
            name: '이동우',
            teamHistory: [6]
        },
        {
            name: '이민정',
            teamHistory: [5]
        },
        {
            name: '이상욱',
            teamHistory: [3]
        },
        {
            name: '이재필',
            teamHistory: [9]
        },
        {
            name: '이진수',
            teamHistory: [7]
        },
        {
            name: '이진호',
            teamHistory: [2]
        },
        {
            name: '이채원',
            teamHistory: [8]
        },
        {
            name: '정동관',
            teamHistory: [4]
        },
        {
            name: '조경훈',
            teamHistory: [4]
        },
        {
            name: '조상천',
            teamHistory: [3]
        },
        {
            name: '조성훈',
            teamHistory: [7]
        },
        {
            name: '조예원',
            teamHistory: [8]
        },
        {
            name: '채지원',
            teamHistory: [2]
        },
        {
            name: '최예진',
            teamHistory: [4]
        },
        {
            name: '최재경',
            teamHistory: [5]
        },
        {
            name: '한세진',
            teamHistory: [9]
        },
        {
            name: '홍성준',
            teamHistory: [5]
        },
    ];

    let teamNo = 1;

    // 팀원 정보 배열
    const teams = [];

    // 팀원 수 배열
    const teamNumbers = [3, 3, 3, 3, 3, 3, 3, 4, 4];
    
    // 하나의 팀원정보
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
        checkCount = 0;
        return true;
    };

    // 팀원 랜덤 생성 함수
    const makeTeam = numOfPerson => {

        

        while (teamList.length < numOfPerson) {
            const randomIndex = Math.floor(Math.random() * nameList.length);
            const select = nameList[randomIndex];

            if (checkHistory(select) || checkCount > 200) {

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