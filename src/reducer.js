import {actiontype} from './action'

const initialState = {
    users: '',
    user:'',
    editUser:''
}

const Reducer= (state=initialState ,action)=>{
     switch(action.type){
case actiontype.USER_LIST: 
  return{...state,users:action.payload};
  case actiontype.DELETE_USER:
      const remaininguser= state.users.filter((user)=>user.id !== action.payload)
      return{...state,users:remaininguser}
      case actiontype.INSERT_USER:
          return{...state,users:[...state.users,action.payload]}
      case actiontype.EDIT_USER:
          return{...state,user:action.payload}
      case actiontype.UPDATE_USER:
          return{...state,users:action.payload}
  
  
  default: return state;

                
                
                
 }
}

export default Reducer;