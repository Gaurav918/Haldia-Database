const FamilyDetails = () => {
  const religion = [];
  return (
    <>
      <h2>Professional Information</h2>
      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Religion<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select">
              {religion.map((e) => (
                <option value={e} label={e} />
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Father's Name<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fname"
              type="text"
              className="form-control "
              placeholder="first name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="mname"
              type="text"
              className="form-control "
              placeholder="middle name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="last name"
              value={""}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Mother's Name<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fname"
              type="text"
              className="form-control "
              placeholder="first name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="mname"
              type="text"
              className="form-control "
              placeholder="middle name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="last name"
              value={""}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Spouse Name<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fname"
              type="text"
              className="form-control"
              placeholder="first name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="mname"
              type="text"
              className="form-control "
              placeholder="middle name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="last name"
              value={""}
            />
          </div>
        </div>
        <div className="form-group row">
            <div className="form-col col-md-3 ">
              <label> Date of Marriage<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3 ">
              <input
                type="date"
                className="form-control"
                onChange={() => {}}
              />
            </div>
            </div>
      </div>
    </>
  );
};
export default FamilyDetails;
