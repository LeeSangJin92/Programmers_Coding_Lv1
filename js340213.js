const solution = (video_len, pos, op_start, op_end, commands) => {

    // "prev" : 10초 전으로 이동
    // "next" : 10초 후로  이동

    let totalTime = setTimer(video_len);
    let posTime = setTimer(pos);
    let opStart = setTimer(op_start);
    let opEnd = setTimer(op_end);

    commands.forEach(commandStr => {
        commandStr=="next" && nextAction();
        commandStr=="prev" && prevAction();
        checkOpTime();
    });

    let resultMM = Math.floor(posTime/60000);
    let resultSS = Math.floor((posTime - (resultMM * 60000)) / 1000)

    function setTimeLine(time){
        return (""+time).length>1?""+time:"0"+time
    }

    return  setTimeLine(resultMM) + ":" + setTimeLine(resultSS);

    function nextAction(){
        posTime = ((posTime+10000)>=totalTime&&totalTime)||
        ((posTime>=opStart&&posTime<=opEnd)&&opEnd+10000)||
        posTime+10000;
    }
    
    function prevAction(){
        posTime = (((posTime-10000)<=opEnd)&&((posTime-10000)>=opStart))&&opEnd||
        ((posTime-10000)>=0)&&posTime-10000||0;
    }

    function checkOpTime(){
        posTime = (posTime>=opStart&&posTime<=opEnd)&&opEnd||posTime;
    }
}

const setTimer = (timeStr) => timeStr.split(":").map(data=>+data).reduce((result,num,index)=>(index==0&&result+(num*60000))||(index==1&&result+(num*1000)),0);



// console.log(solution("34:33", "00:55", "00:55" ,"02:55",["prev","next","prev"]));
// console.log(solution("34:33", "00:05", "00:55" ,"02:55",["prev","prev","prev","next"]));
// console.log(solution("34:33", "09:50", "10:00", "13:00", ["next", "next", "next", "prev"]));
console.log(solution("30:00", "00:08", "00:00", "00:05", ["prev"]));