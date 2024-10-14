const solution = (n, arr1, arr2) => arr1.reduce((result, number1, index1)=>{
    // 10진수를 2진수로 변경된 문자열 생성
    let map1 = number1.toString(2);
    let map2 = arr2[index1].toString(2);

    // 빈자리 수 0으로 체움
    map1 = "0".repeat(n-map1.length) + map1;
    map2 = "0".repeat(n-map2.length) + map2;
    
    // 지도 생성 후 전체 지도에 추가
    result.push([...map1].reduce((map, block, index2)=> map + (block==0&&map2[index2]==0&&" "||"#"),""))
    return result;
},[]);


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))