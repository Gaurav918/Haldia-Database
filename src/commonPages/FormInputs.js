import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import "./FormInput.css";
import RegistrationProgressBar from './RegistrationProgressBar';
const FormInputs
=(props)=>{
  const [married,setMarried] =useState(false);
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('');
  const [enteredTime,setEnteredTime]=useState('');
  //alternative to above using multiple useStates
  //const [userInput,setUserInput]=useState({
   //   enteredTitle: '',
   //   enteredAmount: '',
   //   enteredDate: ''
  //});
  
      const titleChangeHandler =(event)=>{
       setEnteredTitle(event.target.value);
       //alternative to above code
        //  setUserInput({
         //     ...userInput,//here spread operator pulls the pervous values of the states
         //     enteredTitle: event.target.value,//the element which we want to update
         // });
          //alternative to above code as state is renderd not at same time by react so above case might
          //fail some times if there is a lot changes at a moment then previous state reference might point wrongly
          //so in below code react keeps the track of the changes made so ommits the above chance of error 
        //  setUserInput((prevstate)=>{return {...prevstate,enteredTitle:event.target.value};})
          //console.log(event.target.value);
      }
      const initiatedNameHandler =(event)=>{}
      const middlenameHandler=(event)=>
      {}
      const amountChangeHandler =(event)=>{
          setEnteredAmount(event.target.value);
         // setUserInput({
         //     ...userInput,
         //     enteredAmount: event.target.value,
        //  });
         // console.log(event.target.value);
      }
      const dateChangeHandler =(event)=>{
          setEnteredDate(event.target.value);
       //   setUserInput({
        //      ...userInput,
        //      enteredDate: event.target.value,
        //  });
          
      }
      const submitHandler=(event)=>{
          event.preventDefault();
      
      const expenseData={
          title: enteredTitle,
          amount: +enteredAmount,
          date: new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
  }
      const cancelAddition=()=>{
          props.onCancel(0);
      }
  const marritalStatus=()=>{
    if(married)
    {setMarried(false);}
    else 
    {setMarried(true);}
  }

  const jsxForMarried=<><Form.Label htmlFor="spouseName">Spouse Name</Form.Label>
  <Form.Control
    type="text"
    id="spouseName"
    
  />
  <Form.Label htmlFor="spouseAge">Spouse Age</Form.Label>
  <Form.Control
    type="text"
    id="spouseAge"
    
  /></>

    return(
    <>
    <div>
    <RegistrationProgressBar style={{width:'100%'}} value={100/6} />
    </div>
    <form onSubmit={submitHandler} >
        <div className="new-registration__controls">
          <h3>Personal Information</h3>
          <table>
            <tbody overflow='hidden'>
            <tr>
              <td ><div className="new-registration__control">
             <label >Name*</label></div></td>
              <td>
            <div className="new-registration__control">
             <input type='text' placeholder='first name' ></input>
            </div>
            </td>
            <td>
            <div className="new-registration__control">
             <input type='text'  placeholder='middle name'></input>
            </div>
            </td>
            <td>
            <div className="new-registration__control">
             <input type='text'  placeholder='last name'></input>
            </div>
            </td>
            </tr>
            <tr>
              <td></td>
              <td>
            <div className="new-registration__control">
             <label>Initiated Name if any</label>
             <input type='text'  value='' onChange={initiatedNameHandler}></input>
            </div>
            </td>
            </tr>
            <tr>
              <td><div className="new-registration__control">
               <label> Date of Birth*</label>
                </div>
                </td>
              <td>
            <div className="new-registration__control">
            <label>Original*</label>                          
             <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            </td>   
            <td>
            <div className="new-registration__control">
            <label>time of Birth*</label>
             <input type='time'  value={enteredTime} onChange={dateChangeHandler}></input>
            </div>
            </td>  
            <td>
            <div className="new-registration__control">
            <label>Certificate*</label>                          
             <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            </td>   
            
            </tr>
            <tr>
              <td ><div className="new-registration__control">
             <label>Ancestors Info.</label></div></td>
              <td>
            <div className="new-registration__control">
             <input type='text' placeholder='caste' ></input>
            </div>
            </td>
            <td>
            <div className="new-registration__control">
             <input type='text'  placeholder='sub caste'></input>
            </div>
            </td>
            <td>
            <div className="new-registration__control">
             <input type='text'  placeholder='gotra'></input>
            </div>
            </td>
            </tr>
            <tr>
              
            <td><div className="new-registration__control">
               <label> Ashrama*</label>
                </div>
                </td>
                <td className='radio-button'>
                  <label className='radio-label'>
                    <input type='radio' id='Brahmachari' />
                    Brahmachari
                  </label>
                  <label className='radio-label'>
                    <input type='radio' id='Grihasta' />
                    Grihasta
                  </label>
                  <label className='radio-label'>
                    <input type='radio' id='Vanprastha' />
                    Vanprastha
                  </label>
                  <label className='radio-label'>
                    <input type='radio' id='Sannyasi' />
                    Sannyasi
                  </label>
                </td>
            </tr>
            <tr>
              <td ><div className="new-registration__control">
             <label>Blood Group*</label></div></td>
              <td>
            <div className="new-registration__control">
             <select   >
              <option>A +ve</option>
              <option>A -ve</option>
              <option>AB +ve</option>
              <option>AB -ve</option>
              <option>B +ve</option>
              <option>B -ve</option>
              <option>O +ve</option>
              <option>O -ve</option>
             </select>
            </div>
            </td>
            </tr>
            <tr>
              <td><div className="new-registration__control">
             <label>Upload Profile Picture*</label></div></td>
              <td>
              <div className="new-upload__control">
              <input type="file"  accept="image/*"  />
              
              </div>
              </td>
            </tr>
            <tr>
              <td ></td>
              <td ></td>
              
              <td>
            <div className="new-registration__actions">
             <button type="button"> Previous</button>
            </div>
            </td>
            <td>
            <div className="new-registration__actions">
             <button type="button"  >Save & Proceed</button>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
        </div>
        </form>
      
     
          {/* <Form.Check 
            type='radio'
            id='Married'
            label='Married'
            checked={married}
            onClick={marritalStatus}
          />
          <Form.Check 
            type='radio'
            id='UnMarried'
            label='UnMarried'
          />
          {married?jsxForMarried:''} */}
      

    </>
  );
}



export default FormInputs;