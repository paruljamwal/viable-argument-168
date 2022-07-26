import axios from "axios"
import { ADD_SUBTASKS_FAIL, ADD_SUBTASKS_REQ, ADD_SUBTASKS_SUCC, ADD_TASK_FAIL, ADD_TASK_REQ, ADD_TASK_SUCC, DELETE_SUBTASK_FAIL, DELETE_SUBTASK_REQ, DELETE_SUBTASK_SUCC, GET_TASK_FAIL, GET_TASK_REQ, GET_TASK_SUCC, UPDATE_TASKS_FAIL, UPDATE_TASKS_REQ, UPDATE_TASKS_SUCC } from "./actionType"

export const AddUserReq=()=>{
    return{
        type:ADD_TASK_REQ
    }
}


export const AddUserSucc=(payload)=>{
    return{
        type:ADD_TASK_SUCC,
        payload
    }
}


export const AddUserFail=()=>{
    return{
        type:ADD_TASK_FAIL,
        
    }
}


export const AddUser=(payload)=>(dispatch)=>{
    dispatch(AddUserReq())
    axios.post(`https://everhour.herokuapp.com/userData`,payload)
        .then((res)=>dispatch(AddUserSucc(res.data)))
        .catch(()=>dispatch(AddUserFail()))
    }




const getTasks=(payload)=>(dispatch)=>{
    dispatch({type: GET_TASK_REQ })
    return axios.get(`https://everhour.herokuapp.com/userData`)
    .then((r)=>dispatch({type:GET_TASK_SUCC,payload:r.data}))
    .catch((e)=>dispatch({type:GET_TASK_FAIL,payload:e}))

}

const updateTASKS=(id,payload)=>(dispatch)=>{
    console.log(dispatch)
    dispatch({type:UPDATE_TASKS_REQ})
    return axios.patch(`https://everhour.herokuapp.com/userData/${id}`,
    payload).then((r)=>{
        dispatch({type:UPDATE_TASKS_SUCC,payload:r.data})
    })
    .catch((e)=>dispatch({type:UPDATE_TASKS_FAIL,payload:e}))
}


//SUBTASK

const AddSubTasks=(id,payload)=>(dispatch)=>{
    console.log(payload);
   dispatch({type:ADD_SUBTASKS_REQ});
 return  axios.patch(`https://everhour.herokuapp.com/userData/${id}`,payload)
   .then((r)=>dispatch({type:ADD_SUBTASKS_SUCC,payload:r.data}))
   .then((e)=>dispatch({type:ADD_SUBTASKS_FAIL,payload:e}))
}


//dELETE SubTask.......

const DeleteData=(id)=>(dispatch)=>{
    dispatch({type:DELETE_SUBTASK_REQ})
   return axios.delete(`https://everhour.herokuapp.com/userData/${id}`)
    .then((r)=>dispatch({type:DELETE_SUBTASK_SUCC,r}))
    .catch((e)=>dispatch({type:DELETE_SUBTASK_FAIL,e}))
}

export {getTasks,updateTASKS,AddSubTasks,DeleteData}