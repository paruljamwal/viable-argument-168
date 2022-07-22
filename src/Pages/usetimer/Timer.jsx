import React,{useEffect, useState} from 'react'


import {BsPause} from "react-icons/bs"
import { Button, Stack,Box} from '@chakra-ui/react'
const Timer = () => {
  const [togle,settogle]=useState(false)
  const [isstarted,SetStarted]=useState(false);
  const[value,Setvalue]=useState(0);
  const[stop,Setistopped]=useState(false);



const Start=()=>{
//  if(value>0){
  SetStarted(true);
  Setistopped(false);
//  }
 settogle(!togle)
 if(!stop){
  Pause()
 }

}


const Pause=()=>{
  if(value>0){
    SetStarted(false);
    Setistopped(true);

   }
} 

useEffect(()=>{
if(isstarted){
  
  var  timerid=setInterval(()=>{
      Setvalue((value)=>value+1)
    },1000)
    return(()=>{
      clearInterval(timerid)
    })
}

},[value,isstarted])

const Convert = (time) => {
  let h=Math.floor(time/3600)
  let min=Math.floor(time/60);
  let sec=Math.floor(time%60)
  h=h<10 ? "0"+h:h;
  min=min<10? "0"+min:min;
  sec=sec<10? "0"+sec:sec;
    return (`${h}:${min}:${sec}`)
  }

console.log(value)
  return (
 <>
 <div>

{!togle ?  <Button colorScheme='green' w={"160px"} h="68px" borderRadius={"none"} textAlign="center" fontSize={"25px"} padding="25px"  onClick={Start} >Start Timer</Button>  :  <Stack spacing={4} direction='row' align='center'>
  
  <Button colorScheme='red'  onClick={Start} w={"160px"} h="68px" borderRadius={"none"} textAlign="center" fontSize={"20px"} padding="25px">
 <div style={{display:"flex",fontSize:"20px",alignItems:"center"}}><div><BsPause/></div><Box padding="5px">{Convert(value)}</Box></div>
  </Button>
</Stack> }

 </div>
 
 

 
 </>
  )
}

export default Timer