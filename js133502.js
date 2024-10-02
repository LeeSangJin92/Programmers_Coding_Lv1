const solution = (ingredient) => {
    // 버거 재료 문자열로 배치
    // let burgerList = ingredient.join('');
    // 포장 가능 갯수
    // let count = 0;

    /* ✏️ 방법1) ⚠️replace를 활용 시 내부적으로 복잡한 구조를 처리해서 시간이 다소 걸린다.
    // 1->2->3->1 순서의 문자열 조회 
    while(/1231/.test(burgerList)){

        // 포장 가능 갯수 증가
        ++count;

        // 포장에 사용된 재료 제거
        burgerList = burgerList.replace(/1231/,'');
    } */

    /* ✏️ 방법2)⭐indexOf와 slice는 직접적으로 index를 위치로 구분하여 처리하기에 replace보다 시간이 짧음
    // let index = burgerList.indexOf('1231');
    // while(index>=0){
    //     ++count;
    //     burgerList = burgerList.slice(0,index)+burgerList.slice(index+4);
    //     index = burgerList.indexOf('1231');
    }*/

    // ✏️ 방법3) ⭐indexOf도 전체 문자열에서 '1231'을 조회하는 처리 과정으로 시간이 걸림
    //              직접적으로 전체 문자열에서 단어를 하나씩 뜯어가며 조회 시 더 빠름
    let stack = [];
    let count = 0;
    let num = 0;
    while(num<ingredient.length){
        stack.push(ingredient[num]);
        if(stack.length>=4&&stack.slice(-4).join('')=="1231"){
            stack.splice(-4);
            ++count;
        }
        ++num;
    }
    
    // 갯수 반환
    return count;
}

// console.log(solution([2, 1, 1, 2, 1, 3, 1, 2, 3, , 2, 1]));
console.log(solution( [1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]));