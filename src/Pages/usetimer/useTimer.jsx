import React,{useEffect, useState} from 'react'

const useTimer = () => {
    const[value,Setvalue]=useState(0);
    const [isstarted,SetStarted]=useState(false);
    const[stop,Setistopped]=useState(true);
    const [reset,Setisreset]=useState(true);
const change=(e)=>{
if(!isstarted){
    Setvalue(e.target.value) 
}

}
const Start=()=>{
   if(value>0){
    SetStarted(true);
    Setistopped(false);
    Setisreset(false);
   }
}

const Pause=()=>{
  if(value>0){
    SetStarted(false);
    Setistopped(true);
    Setisreset(false);
   }
} 

const Reset=()=>{
  if(value>0){
    SetStarted(false);
    Setistopped(false);
    Setisreset(true);
    Setvalue(0)
   }
} 


useEffect(()=>{
  if(isstarted){
    if(value>0){
    var  timerid=setInterval(()=>{
        Setvalue((value)=>value-1)
      },1000)
    }
  }
  return(()=>{
    clearInterval(timerid)
  })
},[value,isstarted])
  return {value,Start,Pause,Reset,isstarted,change}
}

export default useTimer