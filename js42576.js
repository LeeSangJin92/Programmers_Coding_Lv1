const solution = (participant, completion) => {

    let mapData = new Map();

    completion.forEach(name => {
        mapData.set(name,(mapData.get(name)||0)+1);
    });

    let result = "";
    participant.forEach(name=>{
        if(!mapData.has(name)||mapData.get(name)==0){
            result = name;
            return null;
        }
        else mapData.set(name, mapData.get(name)-1);
    });
    return result;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))



1
2// ⭐ 동작되는 엄청 간결한 코드 
// var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))