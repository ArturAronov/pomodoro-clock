const StartTimer = (work, active, pause, round, minutesInitial, pauseInitial, minutes, seconds, setMinutes, setSeconds, setWork, setPause, setRound) => {
  if(seconds<0){
    //Every time seconds reach 0 mark, the minutes get deducted by 1 and seconds get reset back to 59.
    setMinutes(minutes-1);
    return setSeconds(59);
  };
  //This if/else statement toggles between the working and resting mode and keeps track of how many rounds of working modes has been made.
  if(minutes<=0&&seconds<=0&&work){
    //Once minutes reach 0 and the cycle is in working mode, it will switch the working mode into false (meaning it will become a resting mode) and starts counting down minutes of the rest cycle.
    setWork(false);
    setPause(pause-1);
    setRound(round+1)
    setMinutes(pauseInitial-1)
    return setSeconds(59);
  }else if(minutes<=0&&seconds<=0&&!work){
    //Once minutes reach 0 and the cycle is in resting mode, it will switch the working mote into tru (meaning it will become working mode) and starts counting down minutes of the work cycle.
    setWork(true);
    setSeconds(59);
    return setMinutes(minutesInitial-1);
  };
  const runTimer=function(){
    //This function is where the countdown for the seconds happens.
    setTimeout(()=>setSeconds(seconds-1),1000);
  };

  //Is the statement below, as a finishing touch once all of the conditions are set and states adjusted, it will check the state of active. If it' set to true (meaning the timer is active), it will initiate the runTimer function that contains timeout where seconds are deducted. If the active state is in false position, the timeout in runTimer function gets cleared.
  return active?runTimer():clearTimeout(runTimer());
};

export default StartTimer;
