const solution = (month, date) => {
    let day = new Date(`2016-${month}-${date}`).getDay();
    return day==0&&"SUN"||
           day==1&&"MON"||
           day==2&&"TUE"||
           day==3&&"WED"||
           day==4&&"THU"||
           day==5&&"FRI"||
           day==6&&"SAT"
}

console.log(solution(5, 24))