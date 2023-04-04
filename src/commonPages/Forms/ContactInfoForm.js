import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./FormInput.css";

const ContactInfoForm = (props) => {
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

  return (
    <>
      <h3>Contact Details</h3>
      <form onSubmit={() => {}}>
        <div className="container">
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Phone No.<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-4">
              <input
                id="pno"
                type="number"
                className="form-control"
                placeholder="Always Reachable"
                maxLength={10}
                onChange={(e) => {
                  inputHandler(e);
                  saveDataHandler(e);
                }}
              />
            </div>
            <div className="form-col col-md-4">
              <input
                id="Altno"
                className="form-control"
                type="number"
                placeholder="Alternate No."
                maxLength={10}
                onChange={(e) => {
                  inputHandler(e);
                  saveDataHandler(e);
                }}
              />
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>Email Address<a style={{color:'red'}}>*</a></label>
              </div>
              <div className="form-col col-md-4">
                <input
                  className="form-control"
                  type="email"
                  placeholder="xyz@gmail.com"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>
                  {" "}
                  Current Address<a style={{color:'red'}}>*</a>
                </label>
              </div>

              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id="currAdd"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id=""
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAdd"
                  placeholder="city"
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAdd"
                  placeholder="ZipCode"
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  className="form-control"
                  type="text"
                  id=""
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>
                  
                  Permanent Address<a style={{ color: "red" }}>*</a>
                </label>
              </div>

              <div className="form-col col-md-3">
              <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    Same as current
  </label>
</div>
</div>
</div>
<div className="form-group row">
<div className="form-col col-md-3"/>
<div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id="currAdd"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id=""
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAdd"
                  placeholder="city"
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAdd"
                  placeholder="ZipCode"
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  className="form-control"
                  type="text"
                  id=""
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactInfoForm;
