const solution = (absolutes, signs) => absolutes.reduce((result, number, index)=> signs[index]&&result+number||result-number,0);

console.log(solution([4,7,12], [true,false,true]))