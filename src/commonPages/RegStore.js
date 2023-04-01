import {legacy_createStore as createStore} from 'redux';
const personalDetails={firstName:"saurav",
lastName:"",
middleName:"",
initiatedName:"",
dob:""}
const form1Reducer=(state={personalDetails},action)=>{
    // console.log("actions==>", action)
    switch (action.type) {
        case 'fname':
           return {
                firstName: action.data,
                lastName: state.lastName,
                middleName: state.middleName,
                initiatedName:state.initiatedName,
                dob:state.dob
            }
            
            
        case 'mname':
                return{
                    firstName: state.firstName,
                
                middleName: action.data,
                lastName: state.lastName,
                initiatedName:state.initiatedName,
                dob:state.dob
                }
         case 'lname':
            return{
                firstName: state.firstName,
                
                middleName: state.middleName,
                lastName: action.data,
                initiatedName:state.initiatedName,
                dob:state.dob
            }
        case 'iname':
            return{
                firstName: state.firstName,
                lastName: state.lastName,
                middleName: state.middleName,
                initiatedName:action.data,
                dob:state.dob
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