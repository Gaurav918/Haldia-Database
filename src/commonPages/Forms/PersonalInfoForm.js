import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./FormInput.css";
const PersonalInfoForm = (props) => {
  const dispatch = useDispatch();
  const { firstName, middleName, lastName, initiatedName } = useSelector(
    (state) => state
  );

  const inputHandler = (e) => {
    const { value, id } = e.target;
    dispatch({ type: id, data: value });
  };

  const saveDataHandler = (e) => {
    const { value, id } = e.target;
    console.log("id: ", id, "data: ", value);
  };
  const languages = [
    "Hindi",
    "English",
    "Bengali",
    "Marathi",
    "Gujrati",
    "Oriya",
    "Tamil",
    "Telgu",
    "Marwari",
    "Punjabi",
    "Nepali",
    "Bhojpuri",
  ];
  const ashrama = [
    { id: 1, value: "Brahmachari", col: 3 },
    { id: 2, value: "Grihasta", col: 2 },
    { id: 3, value: "Vanprastha", col: 2 },
    { id: 4, value: "Sannyasi", col: 2 },
  ];
  const bloodGroup = [
    "A +ve",
    "A -ve",
    "B +ve",
    "B -ve",
    "AB +ve",
    "AB -ve",
    "O +ve",
    "O -ve",
  ];
  return (
    <>
      <h3>Personal Information</h3>
      <form onSubmit={() => {}} className="form-inline">
        <div className="container">
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Name<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input
                id="fname"
                type="text"
                className="form-control "
                placeholder="first name"
                value={firstName}
                onChange={(e) => {
                  inputHandler(e);
                  saveDataHandler(e);
                }}
              />
            </div>
            <div className="form-col col-md-3">
              <input
                id="mname"
                type="text"
                className="form-control "
                placeholder="middle name"
                value={middleName}
                onChange={(e) => {
                  inputHandler(e);
                  saveDataHandler(e);
                }}
              />
            </div>
            <div className="form-col col-md-3">
              <input
                id="lname"
                type="text"
                className="form-control"
                placeholder="last name"
                value={lastName}
                onChange={(e) => {
                  inputHandler(e);
                  saveDataHandler(e);
                }}
              />
            </div>
            <div className="form-col col-md-3"></div>
            <div className="form-col col-md-3">
              <input
                id="iname"
                type="text"
                className="form-control"
                value={initiatedName}
                placeholder="Initiated Name if any"
                onChange={(e) => {
                  inputHandler(e);
                  saveDataHandler(e);
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3 ">
              <label> Date of Birth<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3 ">
              <label>Original<a style={{color:'red'}}>*</a></label>
              <input
                type="datetime-local"
                className="form-control"
                min="2019-01-01 0HH:0MM:0SS"
                max="2022-12-31 0HH:0MM:0SS"
                onChange={() => {}}
              />
            </div>
            <div className="form-col col-md-3">
              <label>Certificate<a style={{color:'red'}}>*</a></label>
              <input
                type="datetime-local"
                className="form-control"
                min="2019-01-01"
                max="2022-12-31"
                onChange={() => {}}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Ancestors Info.<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="caste"
              ></input>
            </div>
            <div className="form-col col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="sub caste"
              ></input>
            </div>
            <div className="form-col col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="gotra"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Ashrama<a style={{color:'red'}}>*</a></label>
            </div>
            {ashrama.map((e) => (
              <div className={`form-col col-md-${e.col}`}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" id={e.id} />
                  {e.value}
                </label>
              </div>
            ))}
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Blood Group<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select">
                {bloodGroup.map((e) => (
                  <option value={e} label={e} />
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>languages Known<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select">
                {languages.map((e) => (
                  <option value={e} label={e} />
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label className="form-label">Upload Profile Picture<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input type="file" className="form-file" accept="image/*" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default PersonalInfoForm;
