// const solution = (players, callings) => {
//     callings.forEach(nameStr => {
//         let callPlayerRank = players.indexOf(nameStr);
//         let frontPlayer = players[callPlayerRank-1];
//         players[callPlayerRank-1] = nameStr;
//         players[callPlayerRank] = frontPlayer;
//     });

//     return players;
// }

// 타임 아웃 이슈 뜸
// const solution = (players, callings) => 
//     callings.reduce((result, nameStr) => {
//         let rank = players.lastIndexOf(nameStr);
//         [players[rank-1], players[rank]] = [players[rank], players[rank-1]]
//         return result;
//     },players);


// const solution = (players, callings) => {
//     let ranks = players.reduce((result, playerName, index) => {return {...result, [playerName]:index}},{});
//     callings.forEach(callName => {
//         ++ranks[Object.keys(ranks).find(key=>ranks[key] === ranks[callName]-1)];
//         --ranks[callName];
//     });

//     return players.sort((a,b)=>ranks[a]-ranks[b]);
// }


const solution = (players, callings) => {
    let ranks = {};
    let positions = {};
    
    players.forEach((nameStr,index)=>{
        ranks[nameStr] = index;
        positions[index] = nameStr;
    })
    
    callings.forEach(nameStr => {
        let prevRank = ranks[nameStr];
        let frontRank = prevRank-1
        let frontPlayer = positions[frontRank];

        --ranks[nameStr];
        ++ranks[frontPlayer];

        positions[frontRank] = nameStr;
        positions[prevRank] = frontPlayer;

    });
    return Object.values(positions)
}
console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine",  "mine"]))