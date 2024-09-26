const solution = (wallpaper) => {
    
    const mapData = Array(wallpaper.length).fill().map((_,indexY)=>[...wallpaper[indexY]].map((data,indexX)=>data=="#"&&[indexY,indexX]||data)).flat().filter(data=>data!='.');
    
    const fileX = mapData.map(data=>data[0]);
    const fileY = mapData.map(data=>data[1]);

    let lux = Math.min(...fileX);
    let luy = Math.min(...fileY);
    let rdx = Math.max(...fileX)+1;
    let rdy = Math.max(...fileY)+1;

    return [lux,luy,rdx,rdy]

}

console.log(solution([".#...", "..#..", "...#."]));
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]));