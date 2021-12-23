import { ADD } from "./ActionTypes"

export const Add = (id,x) => {
  return {
    type: ADD,
    payload:{id,x}
  }
}