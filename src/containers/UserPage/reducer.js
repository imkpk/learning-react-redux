import { ActionTypes } from './constants';

const defState={
  user:['nopage']
}

function userPageReducer(state=defState,action){
   switch (action.type) {
     case (ActionTypes.SET_USERS):
       return {...state,user:action.payload}
     default:
       return state
   }
}

export default userPageReducer;