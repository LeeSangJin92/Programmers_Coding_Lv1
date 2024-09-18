const solution = ([t,x,y], health, attacks) => {

    // 💾 마지막턴 저장
    let maxTurn = attacks[attacks.length-1][0];

    // 💾 턴마다 캐릭터 상태 객체 생성
    let state = {turn:1, hp:health, success:0}

    // 🛠️ 피격 프로세스
    const attackProcess = () => {
        state.hp = state.hp - attacks[0][1];
            attacks.shift();
            state.success = 0;
    }

    // 🛠️ 치료 프로세스
    const healProcess = () => {
        state.hp = state.hp + x >= health ? health : state.hp + x;
        if(state.success + 1 == t){
            state.hp = state.hp + y >= health ? health : state.hp + y;
            state.success = 0;
        } else ++state.success;
    }

    // 🛠️ 캐릭터 상태 및 턴 체크
    while(state.turn<=maxTurn&&state.hp>0){

        // 🛠️ 해당 턴과 피격 타이밍이 같을 경우 피격 프로세스 진행
        if(attacks[0][0]==state.turn){
            attackProcess();
        }

        // 🛠️ 피격 타이밍이 아닐 경우 힐링 프로세스 진행
        else {    
            healProcess();
        }

        // 🛠️ 프로세스 종료 후 현재 턴 증가
        ++state.turn;
    }

    // 🛠️ 모든 턴이 끝나거나 캐릭터가 죽었을 경우 종료
    // 🛠️ 캐릭터가 살아 있다면 체력 반환 / 아닐 경우 -1 반환
    return state.hp>0?state.hp:-1;
}

console.log(solution([5, 1, 5],30, 	[[2, 10], [9, 15], [10, 5], [11, 5]]))
console.log(solution([3, 2, 7],20, 	[[1, 15], [5, 16], [8, 6]]))