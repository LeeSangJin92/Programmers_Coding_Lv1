const solution = (survey, choices) => {

     let resultScore = survey.reduce((result, type, score)=>{
        if(choices[score]-4<0) result[[...type][0]] += Math.abs(choices[score]-4);
        else if(choices[score]-4>0) result[[...type][1]] += Math.abs(choices[score]-4);
        return result;
    },{"R" : 0, "T" : 0, "C" : 0, "F" : 0, "J" : 0, "M" : 0, "A" : 0, "N" : 0});

    return [resultScore["R"] >= resultScore["T"] ? "R" : "T",
            resultScore["C"] >= resultScore["F"] ? "C" : "F",
            resultScore["J"] >= resultScore["M"] ? "J" : "M",
            resultScore["A"] >= resultScore["N"] ? "A" : "N"].join("")

}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]))