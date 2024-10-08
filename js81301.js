const solution = (s) => 
    +s.match(/\d|zero|one|two|three|four|five|six|seven|eight|nine/g)
        .map(str=>/\d/.test(str)&&str||
                    str=="zero"&&"0"||
                    str=="one"&&"1"||
                    str=="two"&&"2"||
                    str=="three"&&"3"||
                    str=="four"&&"4"||
                    str=="five"&&"5"||
                    str=="six"&&"6"||
                    str=="seven"&&"7"||
                    str=="eight"&&"8"||
                    str=="nine"&&"9").join("")
                    
console.log(solution("one4seveneight"))