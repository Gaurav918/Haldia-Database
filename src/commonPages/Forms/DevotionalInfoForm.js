


const DevotionalInfoForm=()=>{
    const facilitators=['No Facilitator','Bh. Chandan 13 batch','Bh. Gaurav Garva 13 batch','HG Gopal Chandra Das(Gyan)','Bh. Nishant 13 Batch','Bh. Ravishankar 13 Batch','Bh. Vinay 13 batch',
    ,'Bh Ajay 14 Batch','Bh. Neeraj 14 Batch','Bh. Purushottam 15 batch',
    'Bh. Ravishankar 15 Batch','Bh. Ranjit 15 Batch','Bh. Animesh 17 Batch','Bh. Bhanu 17 Batch','Bh. Biswajeet 17 Batch','Bh. Nikhilesh 17 Batch','Bh. Ajay 18 Batch','Bh. Sonu Vishwakarma 18 Batch']
    return(<>
    <div className="container">
       <h2> Devotional Information</h2>
    <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Connected Temple*</label>
                </div>
                <div className={`form-col col-md-3`}>
                  <label className="form-check-label">
                    <input type='radio' className="form-check-input"  />
                    ISKCON HALDIA
                  </label>
                  </div>
                  <div className={`form-col col-md-2`}>
                  <label className="form-check-label">
                    <input type='radio' className="form-check-input"  />
                    OTHERS
                  </label>
                  </div>
                  <div className={`form-col col-md-3`}>
                  <input type='text' className="form-control"  />
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Facilitator*</label>
                </div>
                <div className={`form-col col-md-3`}>
                  
                    <select type='select' className="form-select"  >
                    {facilitators.map((e)=><option value={e}label={e}/>)}
                        </select>
                    
                  
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Spiritual Councelor*</label>
                </div>
                <div className={`form-col col-md-3`}>
                  <label className="form-check-label">
                    <input type='radio' className="form-check-input"  />
                    HG Kumar Lila Das
                  </label>
                  </div>
                  <div className={`form-col col-md-2`}>
                  <label className="form-check-label">
                    <input type='radio' className="form-check-input"  />
                    OTHERS
                  </label>
                  </div>
                  <div className={`form-col col-md-3`}>
                  <input type='text' className="form-control"  hidden={true}/>
                  </div>
                  </div>
                  <div className="form-group row">
            <div className='form-col form-check col-md-3'>
               <label >Spiritual Master*</label>
                </div>
                <div className={`form-col col-md-5`}>
                  
                    <input type='text' className="form-control"  />
                  
                  </div>
                  </div>
                  </div>
    
    </>)
}
export default DevotionalInfoForm;