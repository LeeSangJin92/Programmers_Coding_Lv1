const solution = (park, routes) => {

    // Map
    let mapData = Array(park.length).fill().map((_,index)=>[...park[index]]);
    let maxMapX = mapData[0].length-1
    let maxMapY = mapData.length-1
    let result = mapData.reduce((start, arr, index)=> arr.indexOf("S")>=0&&[index, arr.indexOf("S")]||start,[0,0]);

    // routes
    return routes.reduce((result,order)=>{
        return mover(order.match(/\w/)[0], +order.match(/\d/)[0],result)},result)

    // move
    function mover(order,number,[y,x]) {
        let [afterY, afterX] = (order=="S"&&[y+number,x])||
                                (order=="N"&&[y-number,x])||
                                (order=="E"&&[y,x+number])||
                                (order=="W"&&[y,x-number]);

        // checkLimit
    return (!(order=="E"&&mapData[y].slice(x,x+number+1).includes("X"))&&
            !(order=="W"&&mapData[y].slice(x-number,x+1).includes("X"))&&
            !(order=="S"&&mapData.map(arr=>arr[x]).slice(y,y+number+1).includes("X"))&&
            !(order=="N"&&mapData.map(arr=>arr[x]).slice(y-number,y+1).includes("X"))&&

        // checkOverflow
            (afterX>=0&&afterX<=maxMapX)&&
            (afterY>=0&&afterY<=maxMapY))&&[afterY, afterX]||[y,x];
    }
}

console.log(solution(["XXXX","XSXX","XXXX"], ["E 2","S 2","W 1"]));
// console.log(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]));
// console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]));
