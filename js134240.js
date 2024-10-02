const solution = (food) => {
    // 1인 음식 리스트 생성
    let foodList = [...food
    .filter((_,index)=>index>0)                         // 음식에서 물 제외
    .map(count=>Math.floor(count/2))                    // 음식 갯수를 반으로 분배
    .reduce((result, foodCount, foodName)=>             
        result+(foodName+1+"").repeat(foodCount),"")];  // 나눈 음식의 갯수 만큼 배치 (repeat⭐)

    return foodList.join('')+"0"+foodList.reverse().join('');   // 음식(정방향) + 물 + 음식(역방향) 반환
};


console.log(solution([1, 3, 4, 6]))
console.log(solution([1, 7, 1, 2]))