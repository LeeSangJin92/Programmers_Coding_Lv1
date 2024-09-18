const solution = (friends, gifts) => {

    // ✏️ 선물 지수 계산
    let giftsGive = gifts.map(data => data.split(" ")[0]);
    let giftsTake = gifts.map(data => data.split(" ")[1]);
    const unitCalculate =(arr, targetName) => arr.filter(arrName => arrName == targetName).length;
    
    // 💾 이름별 선물 지수 저장
    let giftsUnit = friends.reduce((result,nameStr) => {
        return {...result, [nameStr]:unitCalculate(giftsGive, nameStr) - unitCalculate(giftsTake, nameStr)}
    },{})
    
    // 💾 이름별 다음달 선물 받을 갯수 객체 생성
    let countData = friends.reduce((result, nameStr) => {return {...result, [nameStr]:0}},{})
    
    // ✏️ nameA 기준으로 이름별 다음달 선물 받을 갯수 계산
    friends.forEach(nameA => {
        friends.forEach(nameB => {

            // 💾 이번달 nameA가 nameB에게 준 선물 갯수
            let giveCount = gifts.filter(data=>data==nameA + " " + nameB).length;

            // 💾 이번달 nameA가 nameB에게 받은 선물 갯수
            let takeCount = gifts.filter(data=>data==nameB + " " + nameA).length;

            // ✏️ 선물을 준 갯수가 많을 경우 다음달 받을 선물 갯수 증가
            if(giveCount>takeCount) ++countData[nameA];

            // ✏️ 만약 둘이 같을 경우 선물 지수로 계산하여 다음달 받을 선물 갯수 증가
            else if(giveCount==takeCount) {
                giftsUnit[nameA]>giftsUnit[nameB]&&++countData[nameA]
            } 
        })
    });

    // ✏️ 다음달 받을 선물 갯수 중 가장 많은 선물 갯수 반환
    return Math.max(...Object.values(countData));
}

solution(["muzi", "ryan", "frodo", "neo"],["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"])