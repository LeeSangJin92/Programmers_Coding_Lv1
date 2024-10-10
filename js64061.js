const solution = (board, moves) => {
    
    let newBoard = board.reduce((result, arr)=>{
        arr.forEach((number, index) => {
            result[index].unshift(number);
            });
        return result
    },Array(board.length).fill().map(_=>[]))
        .map(arr=>arr.filter(number=>number>0));

    let count = 0;

    moves.reduce((result, line)=>{
        let doll = newBoard[line-1].pop();
        let check = new RegExp(","+doll+","+doll+"$");
        result += doll&&(","+doll)||result;
        if(doll&&check.test(result)){
            count += 2;
            result = result.slice(0,result.length-((","+doll+","+doll).length));
        }
        return result;
    },"")

    return count;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))