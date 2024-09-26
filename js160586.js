const solution = (keymap, targets) => {
    let wordList = [...new Set(keymap.map(str=>[...str]).flat())];
    
    return wordList;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]))