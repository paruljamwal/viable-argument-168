import { ADD_TASK_FAIL, ADD_TASK_REQ, ADD_TASK_SUCC, GET_TASK_FAIL, GET_TASK_REQ, GET_TASK_SUCC } from "./actionType"


const init={
    isloading:false,
    iserror:false,
    tasks:[]


}

export const reducer=(store=init,{type,payload})=>{

    switch(type){

        case ADD_TASK_REQ:
            return{
                ...store,
                isloading:true,
                iserror:false
            }
        case ADD_TASK_SUCC:
            return {
                ...store,
                isloading:false,
                iserror:false,
                tasks:[...payload]
            }    

            case ADD_TASK_FAIL:
                return {
                    ...store,
                    isloading:false,
                    iserror:true  
                }
        case GET_TASK_REQ:
            return{
                ...store,
                isloading:true,
                iserror:false
            }
            case GET_TASK_SUCC:
            return{
                ...store,
                isloading:false,
                iserror:false,
                tasks:payload
            }
            case GET_TASK_FAIL:
            return{
                ...store,
                isloading:false,
                iserror:true
            }
        default:
            return store 
    }
}

