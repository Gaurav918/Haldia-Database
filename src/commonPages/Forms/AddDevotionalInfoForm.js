//import { JSDOM } from "jsdom";
import jQuery from "jquery";
import {$} from 'jquery'

const AddDevotionalInfoForm=()=>{
    //const { window } = new JSDOM( "" );
  
    // $("#datepicker").datepicker({
    //     format: "yyyy",
    //     viewMode: "years", 
    //     minViewMode: "years",
    //     autoclose:true //to close picker once year is selected
    // });
    return(<>
    <div className="container">
       <h2> Devotional Detail</h2>
    <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >No. Of Rounds Chanting*</label>
                </div>
                <div className={`form-col col-md-3`}>
                  
                    <input type='text' className="form-control"  />
                    
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Chanting Since*</label>
                </div>
                <div className={`form-col col-md-3`}>
                    <input type='month'  className="form-control"   />
                  </div>
                  <div className='form-col col-md-3'>
               <label >Chanting 16 Rounds Since</label>
                </div>
                  <div className={`form-col col-md-3`}>
                    <input type='month'  className="form-control" placeholder='March,2023'  />
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Introduced By*</label>
                </div>
                <div className={`form-col col-md-3`}>
                    <input type='text'  className="form-control"   />
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Year of Introduction*</label>
                </div>
                <div className={`form-col col-md-3`}>
                <input type="month" class="form-control" name="datepicker" id="datepicker" />
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Previous Councillor*</label>
                </div>
                <div className={`form-col col-md-3`}>
                    <input type='text'  className="form-control"   />
                  </div>
                  </div>
                  </div>
    </>)

}
export default AddDevotionalInfoForm;