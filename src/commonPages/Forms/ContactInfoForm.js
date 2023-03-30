
import {useSelector,useDispatch} from 'react-redux';

import "./FormInput.css";

const ContactInfoForm
=(props)=>{
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
     
 

    return(
    <>
    
    <form onSubmit={()=>{}} >
        <div className="new-registration__controls">
          <h3>Contact Details</h3>
          <table>
            <tbody >
            <tr>
              <td ><div className="new-registration__control">
             <label >Phone No.*</label></div></td>
              <td>
            <div className="new-registration__control">
             <input id='pno' type='number' placeholder='xxxxx xxxxx' maxLength={10}  onChange={(e) => {
             inputHandler(e);
              saveDataHandler(e)
             }} />
            </div>
            </td>
            </tr>
            <tr>
              <td ><div className="new-registration__control">
             <label >Alternate No.*</label></div></td>
              <td>
            <div className="new-registration__control">
             <input id='Altno' type='number' placeholder='xxxxx xxxxx' maxLength={10} onChange={(e) => {
             inputHandler(e);
              saveDataHandler(e)
             }} />
            </div>
            </td>
            </tr>
            
            <tr>
              <td ><div className="new-registration__control">
             <label>Email Address*</label></div></td>
              <td>
            <div className="new-registration__control">
             <input type='email' placeholder='xyz@gmail.com' ></input>
            </div>
            </td>
            
            </tr>
            <tr>
              
            <td><div className="new-registration__control">
               <label> Current Address<a>*</a></label>
                </div>
                </td>
                <td>
                  <input type='text' style={{width:'400px'}}id='currAdd'/>
                </td>
            </tr>
            <tr>
             <td></td>
             <td><input type='text' style={{width:'400px'}}id=''/></td>
            </tr>
            <tr>
            
              <td></td>
              <td><div className="new-registration__control"><input type='text' id='currAdd' placeholder='city'/></div></td>
              
              <td><div className="new-registration__control"><input type='text' id='' placeholder='State'/></div></td>

            </tr>
            <tr>
            
            <td></td>
            <td><div className="new-registration__control"><input type='text' id='currAdd' placeholder='ZipCode'/></div></td>
            
            <td><div className="new-registration__control"><input type='text' id='' placeholder='Country'/></div></td>

          </tr>
          <tr>
              
            <td><div className="new-registration__control">
               <label> Permanent Address<a>*</a></label>
                </div>
                </td>
                <td>
                  <input type='text' style={{width:'400px'}}id='currAdd'/>
                </td>
            </tr>
            <tr>
             <td></td>
             <td><input type='text' style={{width:'400px'}}id=''/></td>
            </tr>
            <tr>
            
              <td></td>
              <td><div className="new-registration__control"><input type='text' id='currAdd' placeholder='city'/></div></td>
              
              <td><div className="new-registration__control"><input type='text' id='' placeholder='State'/></div></td>

            </tr>
            <tr>
            
            <td></td>
            <td><div className="new-registration__control"><input type='text' id='currAdd' placeholder='ZipCode'/></div></td>
            
            <td><div className="new-registration__control"><input type='text' id='' placeholder='Country'/></div></td>

          </tr>
            </tbody>
            </table>
        </div>
        </form>
      
     
          
      

    </>
  );
}

export default ContactInfoForm;