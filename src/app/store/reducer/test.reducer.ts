
import {Programminglanguages} from "../models/programminglanguages.models";


export function testReducer(state:Programminglanguages[]=[],action)
{
    console.log(action.type);
   
    switch(action.type)
    {
       
        case 'add':
         var currentState = [...state];
          currentState.push(action.payload);
          return currentState;

        case 'delete':
            var currentState = [...state];
            currentState.splice(action.payload,1)
            return currentState;

        case 'edit':
            var currentState = [...state];
            currentState[action.index] = action.payload
            return currentState;

        default:
              return ""

          

    }

}