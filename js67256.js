const solution = (numbers, hand) => {
    
    let [left, right] = [[0,3],[2,3]]
    let dial = [[1,4,7,"*"],[2,5,8,0],[3,6,9,"#"]];

    return numbers.reduce((result, number)=>{
    
    // 왼쪽 라인
    if(dial[0].includes(number)){
        left=[0,dial[0].indexOf(number)]
        result += "L"

    }
    
    // 오른쪽 라인
    else if(dial[2].includes(number)){
        right=[2,dial[2].indexOf(number)]
        result += "R"
    }

    // 가운데 라인
    else{
        // 번호 좌표
        let numberLocation = [1, dial[1].indexOf(number)];

        // 거리 측정
        let leftRange = Math.abs(left[0]-numberLocation[0]) + Math.abs(left[1]-numberLocation[1]);
        let rightRange = Math.abs(right[0]-numberLocation[0]) + Math.abs(right[1]-numberLocation[1]);
    
        // 주 손잡이랑 거리 기준으로 컨트롤
        if(hand=="left"){
            if(leftRange<=rightRange){
                left = [...numberLocation];
                result += "L";
            } else{
                right = [...numberLocation];
                result += "R";
            }
        } else if(hand=="right"){
            if(rightRange<=leftRange){
                right = [...numberLocation];
                result += "R";
            } else {
                left = [...numberLocation];
                result += "L";
            }
        }
    }
    return result;
},"")}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))