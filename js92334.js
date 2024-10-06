const solution = (id_list, report, k) => {

    // 신고 내용이 정리된 객체 생성
    let reportData = report.reduce((result, str)=>{

        // 신고자와 불량유저 구조분해할당
        let [reporter, reported] = str.split(" ");

        // 신고자의 신고 배열에서 불량유저가 없을 경우만 등록 (중복 신고 검토)
        !result[reporter].includes(reported)&&result[reporter].push(reported);
        return result;

      // 유저 배열을 기준으로 비어있는 신고 배열을 가진 객체를 초기값으로 설정 
    },Object.fromEntries(id_list.map(id=>[id,[]])))

    // 신고 횟수 객체 생성
    let banCount = Object.fromEntries(id_list.map(id=>[id,0]));

    // 접수된 신고 내용에서 불량유저의 신고 횟수 카운팅
    Object.values(reportData).flat().forEach(id=>++banCount[id]);

    // 접수된 신고 내용이 k 보다 이상이면 정지된 유저 배열에 추가
    let bannedList = Object.keys(banCount).reduce((result, id)=>{
        banCount[id]>=k&&result.push(id);
        return result;
    },[]);

    // 신고자 내용 중 정지된 유저 카운팅해서 배열로 반환
    return id_list.map(id=> reportData[id].reduce((result, reported)=>bannedList.includes(reported)&&++result||result,0))

}


console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))