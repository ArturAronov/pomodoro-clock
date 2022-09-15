const InitiateReset = (minutesInitial, setActive, setSeconds, setMinutes, setPause, setWork, setRound) => {
  //This function resets all of the parameters. Currently it's set to timeout on 1 seconds (to) and then reset all of the states to their original value. Not the most eloquent, and it's totally killing my vibe, but it's the best I could come up with. Alternative that I know of is even more uglier: return window.location.reload(true)
  setActive(false);
  return setTimeout(()=>{
    setSeconds(0);
    setMinutes(minutesInitial);
    setPause(5);
    setWork(true);
    setRound(0);
  }, 1000);
};

export default InitiateReset;
