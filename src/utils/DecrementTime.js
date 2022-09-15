const DecrementTime= (state, setState) => {
  //This function will get used every time when the ' - ' button gets pressed. It decrements time by 1 with every click
  state<=0?setState(0):setState(state-1);
};

export default DecrementTime;
