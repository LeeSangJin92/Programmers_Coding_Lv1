const solution = (today, terms, privacies) => {
    
    // 문자열 날짜 정수로 변환
    let [yearTo, monthTo, dayTo] = today.match(/\d+/g).map(number=>+number);
    // 약관 객체로 생성
    let termsData = terms.reduce((result, data)=>{
        return {...result, [data.split(" ")[0]]:+data.split(" ")[1]}
    },{});

    // 정규표현식과 구조분할할당으로 약관 종료 날 산출
    let resultData = privacies.map((data, index)=>{
        let termType = data.match(/[A-Z]/g);
        let [year, month, day] = data.match(/\d+/g).map(data=>+data);
    
        // 당일 약관 포함 계산
        day = (day-1==0&&28)||--day;                            // 약관 동의 당일 차감
        month = day==28&&((month-1==0&&12)||--month)||month;    // 1일 당일 배제 시 전월로 옮김
        year = month==12&&day==28&&--year||year;                // 1월 1일 배제 시 전년으로 옮김
        
        // 남은 약관 기간 계산
        month += termsData[termType];                           // 약관 월 합산
                                                                // 초과된 12달 1년으로 치환
        year = month>12? year + Math.floor((month%12!=0&&month||month-1)/12):year;     
        month = month%12==0&&12||month%12                       // 1년으로 치환 후 남은 월 계산

        return ((year<yearTo||                                  // 년도 검사
                (year==yearTo&&month<monthTo)||                 // 동일한 년도에서 월 검사
                (year==yearTo&&month==monthTo&&day<dayTo)))&&index+1;    // 동일한 년도/월에서 일 검사
    });

    // 산출된 배열에서 null 배제 후 반환
    return resultData.filter(data=>data);
}

// , "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.01.01 B"]))
// console.log(solution("2009.12.31", ["A 13"], ["2008.11.03 A"]))
// console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))