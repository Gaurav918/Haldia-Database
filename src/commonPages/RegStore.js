import {legacy_createStore as createStore} from 'redux';
const defaultState = {
    firstName:"",
    lastName:"",
    middleName:"",
    initiatedName:"",
    dob:""
}
const form1Reducer=(state=defaultState, action)=>{
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
    const personalDetails={personalNo:"",
AlternateNo:"",
Email:"",
currentAdrs:"",
permanentAdrs:""}
}
const store=createStore(form1Reducer);

export default store;