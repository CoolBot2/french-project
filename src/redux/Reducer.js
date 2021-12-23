import { Add } from "./Actions";
import { ADD } from "./ActionTypes";
import elements from "./DataB";

const init ={elements:elements,}
export const Reducer = (state=init,{type,payload})=>{
  switch (type) {
    case ADD:
      return{

        ...state,elements:state.elements.map(el=>el.id===payload.id?{...el,src:[...el.src,payload.x]}:el)
      }
      default:
        return state
  }
}