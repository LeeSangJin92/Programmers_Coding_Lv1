const solution = (cards1, cards2, goal) => goal.reduce((result, word)=>
    (word==cards1[0]&&cards1.shift()&&result)||
    (word==cards2[0]&&cards2.shift()&&result)||
    "No" ,"Yes");

console.log(solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]))
console.log(solution(["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]))