




class Artist {
    constructor(name, songList) {
        this.name = name;
        this.songList = songList;
    }
}

const tvxq = new Artist("동방신기", ["hug", "rising sun"]);
console.log(tvxq.name); // 동방신기


const abc = {
    name: '티아라',
    songList: ['롤리폴리', 'yayaya'],
    age: 3
};

for (const key in abc) {
    
}


[
    {
        name: '티아라',
        songList: ['롤리폴리', 'yayaya'],
        age: 3
    },
    {
        name: '동방신기',
        songList: ['hug', 'mirotic']
    },
]