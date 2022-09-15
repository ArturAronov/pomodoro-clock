import { useState, useEffect } from 'react';
import StartTimer from './utils/StartTimer'
import UpdateMinutes from './utils/UpdateMinutes'
import DecrementTime from './utils/DecrementTime'
import InitiateReset from './utils/InitiateReset'
import UpdatePause from './utils/UpdatePause'

const App = () => {
 const [active, setActive]=useState(false);

  const [seconds, setSeconds]=useState(0);
  const [minutes, setMinutes]=useState(25);
  const [pause, setPause]=useState(5);
  const [minutesInitial, setMinutesInitial]=useState(25);
  const [pauseInitial, setPauseInitial]=useState(5);

  const [work, setWork]=useState(true);
  const [round, setRound]=useState(0);


  useEffect(()=>{
    if(active){
      StartTimer(work, active, pause, round, minutesInitial, pauseInitial, minutes, seconds, setMinutes, setSeconds, setWork, setPause, setRound)
    }
  }, [active, work, pause, round, minutesInitial, minutes, seconds, pauseInitial]);

  return(
    <div id='container'>
      <div id='minutes' className='digits'>
        {minutes<10 ? '0'+minutes : minutes}
      </div>

      <div id='states'>
        {work?'work':'rest'}
      </div>

      <div id='seconds' className='digits'>
        {seconds<10?'0'+seconds:seconds}
      </div>

      <div id='round'>
        round: {round}
      </div>

      <div id='controlsPanel'>
        <div className='controlsContainer'>
          <div className='controlsHeader'>
            WORK
          </div>
          <div className='controls'>
            <div
              className={active?'controlsInactive':'controlsActive'}
              onClick={()=>{
                setMinutes(minutes+1)
                setMinutesInitial(minutesInitial+1)
              }}
            >
              +
            </div>

            <div className={active?'inputFieldInactive':'inputFieldActive'}>
              <input placeholder={minutesInitial} type='text' disabled={active} onChange={(e)=>UpdateMinutes(setActive, setSeconds, setMinutes, setMinutesInitial, e)}/>
            </div>
            <div
              className={active?'controlsInactive':'controlsActive'}
              onClick={()=>{
                !active && DecrementTime(minutes, setMinutes)
                minutesInitial > 0 && setMinutesInitial(minutesInitial-1)
              }}>
              -
            </div>
          </div>
        </div>
        <div id={active ? 'startResetContainerActive' : 'startResetContainer'}>
          <div
            id={active?'startStopActive':'startStop'}
            onClick={()=>{
              active ? setActive(false) : setActive(true)
            }}
            >
            {active?'PAUSE':'START'}
          </div>
          <div id={active?'resetActive':'reset'} onClick={()=>InitiateReset(minutesInitial, setActive, setSeconds, setMinutes, setPause, setWork, setRound)}>
            RESET
          </div>
        </div>
        <div className='controlsContainer'>
          <div className='controlsHeader'>
            REST
          </div>
          <div className='controls'>
            <div
              className={active?'controlsInactive':'controlsActive'}
              onClick={() => {
                setPause(pause+1)
                setPauseInitial(pauseInitial+1)
              }}>
              +
            </div>

            <div className={active?'inputFieldInactive':'inputFieldActive'}>
              <input placeholder={pauseInitial} type='text' disabled={active} onChange={(e)=>UpdatePause(setActive, setSeconds, setPause, e)}/>
            </div>
            <div
              className={active?'controlsInactive':'controlsActive'}
              onClick={()=>{
                !active && DecrementTime(pause, setPause)
                pauseInitial > 0 && setPauseInitial(pauseInitial-1)
              }}>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
