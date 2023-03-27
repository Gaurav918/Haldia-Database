import './RegistrationProgressBar.css';
function RegistrationProgressBar(props) {
  const now = props.value;
  return (<>
  <div className="stepper-wrapper">
  <div className="stepper-item completed active">
    <div className="step-counter">1</div>
    <div className="step-name">Personal Details</div>
  </div>
  <div className="stepper-item ">
    <div className="step-counter">2</div>
    <div className="step-name">Contact Detail</div>
  </div>
  <div className="stepper-item ">
    <div className="step-counter">3</div>
    <div className="step-name">Devotional Info.</div>
  </div>
  <div className="stepper-item">
    <div className="step-counter">4</div>
    <div className="step-name">Add Dev Info</div>
  </div>
  <div className="stepper-item">
    <div className="step-counter">5</div>
    <div className="step-name">Proff. Info</div>
  </div>
  <div className="stepper-item">
    <div className="step-counter">6</div>
    <div className="step-name">Family Background</div>
  </div>
</div>
</>);
}

export default RegistrationProgressBar;