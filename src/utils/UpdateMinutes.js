//This function takes the value form the input form and pushes it into the minutes state.
const UpdateMinutes= (setActive, setSeconds, setMinutes, setMinutesRef, event) => {
  setActive(false);
  setSeconds(0);
  const insertValue=function(){
    parseInt(event.target.value)<=0?setMinutes(1):setMinutes(parseInt(event.target.value));
    parseInt(event.target.value)<=0?setMinutesRef(1):setMinutesRef(parseInt(event.target.value));
  };
  return parseInt(event.target.value)>=0?insertValue():null;
};

export default UpdateMinutes;
