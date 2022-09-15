//This function takes the value form the input form and pushes it into the pause state.
const UpdatePause=(setActive, setSeconds, setPause, event) => {
  setActive(false);
  setSeconds(0);
  const insertValue=function(){
    parseInt(event.target.value)<=0?setPause(1):setPause(parseInt(event.target.value)-1)
  };
  return parseInt(event.target.value)>=0?insertValue():null;
};

export default UpdatePause;
