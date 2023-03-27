import Form from 'react-bootstrap/Form';
import {useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import "./FormInput.css";
import RegistrationProgressBar from '../RegProgBar/RegistrationProgressBar';
const FormInputs
=()=>{
  const dispatch = useDispatch();
  const { firstName, middleName, lastName, initiatedName } = useSelector(state => state);

  const inputHandler=(e)=>{
    const { value, id } = e.target;
    dispatch({ type: id, data: value })
  }

  const saveDataHandler=(e)=>{
    const { value, id } = e.target;
    console.log("id: ", id, "data: ", value);
  }
     
  // const marritalStatus=()=>{
  //   if(married)
  //   {setMarried(false);}
  //   else 
  //   {setMarried(true);}
  // }

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
    <form onSubmit={()=>{}} >
        <div className="new-registration__controls">
          <h3>Personal Information</h3>
          <table>
            <tbody overflow='hidden'>
            <tr>
              <td ><div className="new-registration__control">
             <label >Name*</label></div></td>
              <td>
            <div className="new-registration__control">
             <input id='fname' type='text' placeholder='first name' value={firstName} onChange={(e) => {
             inputHandler(e);
              saveDataHandler(e)
             }} />
            </div>
            </td>
            <td>
            <div className="new-registration__control">
             <input id='mname'type='text'  placeholder='middle name' value={middleName}onChange={(e) => {
              inputHandler(e);
              saveDataHandler(e)
             }}/>
            </div>
            </td>
            <td>
            <div className="new-registration__control">
             <input id='lname'type='text'  placeholder='last name' value={lastName}onChange={(e) => {
              inputHandler(e);
              saveDataHandler(e)
             }}/>
            </div>
            </td>
            </tr>
            <tr>
              <td></td>
              <td>
            <div className="new-registration__control">
             <label>Initiated Name if any</label>
             <input id='iname' type='text' value={initiatedName} onChange={(e) => {
              inputHandler(e);
              saveDataHandler(e)
             }}/>
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
             <input type='date' min="2019-01-01" max="2022-12-31"  onChange={()=>{}} />
            </div>
            </td>   
            <td>
            <div className="new-registration__control">
            <label>time of Birth*</label>
             <input type='time'   onChange={()=>{}}></input>
            </div>
            </td>  
            <td>
            <div className="new-registration__control">
            <label>Certificate*</label>                          
             <input type='date' min="2019-01-01" max="2022-12-31"  onChange={()=>{}}></input>
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
             <button type="button" onClick={saveDataHandler} >Save & Proceed</button>
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