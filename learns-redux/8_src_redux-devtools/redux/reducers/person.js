import {ADD_PERSON} from '../constant'

const INITSTATE = []
export default function personReducer(pre=INITSTATE, action) {
  const {type,data} = action
  switch(type){
    case ADD_PERSON:
      return [...pre, data]
    default:
      return pre
  }
}