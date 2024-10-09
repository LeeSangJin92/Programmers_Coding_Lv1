const solution = (new_id) => {
    
    // 🔍 1단계 검사
    new_id = new_id.toLowerCase();

    // 🔍 2단계 검사
    new_id = new_id.match(/[a-z]|\d|\-|\_|\./g).join("");

    // 🔍 3단계 검사
    new_id = new_id.replaceAll(/\.\.+/g,".");

    // 🔍 4단계 검사
    new_id = new_id.replaceAll(/^\.|\.$/g,"");
    
    // 🔍 5단계 검사
    new_id = new_id&&new_id||"a";

    // 🔍 6단계 검사
    new_id = new_id.slice(0,15).replace(/\.$/,"");

    // 🔍 7단계 검사
    new_id = new_id.length<=2&&new_id+[...new_id].pop().repeat(3-new_id.length)||new_id;

    // ✏️ 결과 반환
    return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log(solution("z-+.^."))
console.log(solution("=.="))
console.log(solution("123_.def"))