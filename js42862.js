const solution = (n, lost, reserve) => {

    // 학생 리스트
    let studentList = Array(n).fill().map((_,index)=>index+1);
    
    // 도둑 맞을 경우 자신 번호의 여벌이 있는지 체크
    return studentList.map(number=>{
        if(lost.includes(number)){
            if(reserve.includes(number)){
                deleteReserve(number); 
                return number;
            }
            else return null;
        } else return number;

        // 자신 번호로 여벌 없는 학생의 앞뒤 번호 여벌 체크
    }).map((number,index)=>{
        if(number) return number;
        else if(reserve.includes(index)){
            deleteReserve(index)
            return index+1;
        }
        else if(reserve.includes(index+2)){
            deleteReserve(index+2)
            return index+2;
        }
    })

    // 체육복 없는 학생 원소 제거 후 남은 학생 수 반환
    .filter(data=>data).length

    // 여벌 제거
    function deleteReserve(number){
        reserve = reserve.filter(num=>number!=num)
    }
}

console.log(solution(5, [2,4], [1, 3, 5]))
console.log(solution(5, [2,4], [3]))
console.log(solution(3, [3], [1]))
console.log(solution(5, [1,2], [2,3]))