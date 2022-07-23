import React from 'react'

const Convert = (time) => {
let h=Math.floor(time/3600)
let min=Math.floor(time/60);
let sec=Math.floor(time%60)
h=h<10 ? "0"+h:h;
min=min<10? "0"+min:min;
sec=sec<10? "0"+sec:sec;
  return (`${h}:${min}:${sec}`)
}

export default Convert;