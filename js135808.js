const solution = (k, m, score) => 
    // 사과 등급별 정렬 (최고 -> 최저)
    score.sort((a,b)=>b-a).

    // 최고 등급부터 우선 순위로 상자에 저장
    reduce((result, appleScore)=>{

    if(result[0].length==m) result.unshift([appleScore]);   // 저장되는 사과가 모두 채워지면 상자 추가
    else result[0].push(appleScore);                        // 저장공간이 남아 있다면 해당 박스에 저장
    return result;
    },[[]]).filter(box=>box.length==m).                     // 갯수가 부족한 상자 열외
    
    // 저장된 사과들 가격 측정 후 반환
    reduce((result,box)=> result + Math.min(...box) * box.length ,0);

console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1]))