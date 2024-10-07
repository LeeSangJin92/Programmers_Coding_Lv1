const solution = (price, money, count) => {
    let play = 1;
    let pay = 0;
    
    while(play<=count){
        pay += price * play;
        ++play;
    }

    return money >= pay ? 0 : pay-money;
}

console.log(solution(1, 20, 1))