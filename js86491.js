const solution = (sizes) => {

    // reduce를 활용한 방법
    // let result = sizes.reduce(([xResult, yResult], size)=>{
    //     xResult = Math.max(...size, xResult)
    //     yResult = Math.max(Math.min(...size), yResult);
    //     return [xResult, yResult];
    // }, [0,0])

    // sort 활용한 방법
    // let result = sizes.map(size=>size.sort((a,b)=>b-a))
    //             .reduce(([xResult, yResult], [xSize,ySize])=>
    //                 [Math.max(xResult, xSize), Math.max(yResult, ySize)],[0,0]);
    

    // 처리 속도 빠르게 하는 방법
    let result = sizes.reduce(([xR, yR],[xS, yS])=>
        {
            let x = xS >= yS && xS || yS;
            let y = xS <= yS && xS || yS;
            return [
                xR >= x && xR || x,
                yR >= y && yR || y]
        },[0,0])

    return result[0] * result[1]
}   

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))