


const ProfessionalInfoForm=()=>{
    const education=["no Degree based Education","Secondary School(9th-10th)"," Higher Secondary School(11th-12th)"
    ,"Diploma",'Undergraduate Degree','Postgraduate Degree','Doctrate Degree','Post-Doctoate Degree']
    
    const occupation=['Employed full-time','Employed part-time','Self-employed','Unemployed(Job Search/preparation)','Unemployed (not looking for work)','Home Maker'];
    
    return(<><div className="container">
        <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Education*</label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select">
                {education.map((e) => (
                  <option value={e} label={e} />
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Occupation*</label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select">
                {occupation.map((e) => (
                  <option value={e} label={e} />
                ))}
              </select>
            </div>
            </div>
            <div className="form-group row">
          <div className='form-col col-md-3'>
               <label> Occupational Address<a style={{color:'red'}}>*</a></label>
                </div>
                
                <div className='form-col col-md-3'>
                  <input type='text' className='form-control' style={{width:'400px'}}id='currAdd'/>
                </div>
            </div>
            <div className="form-group row">
            <div className='form-col col-md-3'></div>
          <div className='form-col col-md-3'>
             <input type='text' className='form-control' style={{width:'400px'}}id=''/>
            </div>
            </div>
            <div className="form-group row">
            <div className='form-col col-md-3'></div>
          <div className='form-col col-md-3'>
            <input type='text' className='form-control' id='currAdd' placeholder='city'/>
          </div>
              
          <div className='form-col col-md-3'>
            <input type='text' className='form-control' id='' placeholder='State'/>
            </div>
            </div>
            <div className="form-group row">
            <div className='form-col col-md-3'></div>
          <div className='form-col col-md-3'><input type='text' className='form-control' id='currAdd' placeholder='ZipCode'/>
          </div>
            
          <div className='form-col col-md-3'><input className='form-control' type='text' id='' placeholder='Country'/>
          </div>
          </div>      
        </div></>)
}
export default ProfessionalInfoForm;