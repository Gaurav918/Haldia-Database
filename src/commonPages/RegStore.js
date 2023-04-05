import {legacy_createStore as createStore} from 'redux';
import { requiredDataAllFields } from '../utilities/AllFieldsData';

const form1Reducer=(state=requiredDataAllFields, action)=>{
    // console.log("actions==>", action)
    switch (action.type) {
        case 'fname':
           return {
                ...state,
                firstName: action.data
            }
            
            
        case 'mname':
                return{
                    ...state,
                    middleName: action.data,
                }
         case 'lname':
            return{
                ...state,
                lastName: action.data,
            }
        case 'iname':
            return{
                ...state,
                initiatedName:action.data,
            }
        default:
            return state;
    }
    
}
const store=createStore(form1Reducer);

export default store;