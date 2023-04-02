import PersonalInfoForm from "./PersonalInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import { useState } from "react";
import RegistrationProgressBar from "../RegProgBar/RegistrationProgressBar";
import "./FormInput.css";
import DevotionalInfoForm from "./DevotionalInfoForm";
import AddDevotionalInfoForm from "./AddDevotionalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import FamilyDetails from "./FamilyDetailsForm";
import image from "../../images/lordWithDevs.png";

const FormsContainer = () => {
  const [stage, setStage] = useState(1);
  const [back, setBack] = useState(true);
  const [forward, setForward] = useState(false);
  const formStageHandler = (stage) => {
    switch (stage) {
      case 1:
        setFormStage(
          <>
            <PersonalInfoForm satge={stage} onStageChange={formStageHandler} />
          </>
        );
        setStage(1);
        setBack(true);
        setForward(false);
        break;
      case 2:
        setFormStage(
          <>
            <ContactInfoForm satge={stage} onStageChange={formStageHandler} />
          </>
        );
        setStage(2);
        setBack(false);
        break;
      case 3:
        setFormStage(
          <>
            <DevotionalInfoForm
              satge={stage}
              onStageChange={formStageHandler}
            />
          </>
        );
        setStage(3);
        break;
      case 4:
        setFormStage(
          <>
            <AddDevotionalInfoForm
              satge={stage}
              onStageChange={formStageHandler}
            />
          </>
        );
        setStage(4);
        break;
      case 5:
        setFormStage(
          <>
            <ProfessionalInfoForm
              satge={stage}
              onStageChange={formStageHandler}
            />
          </>
        );
        setStage(5);
        break;
      case 6:
        setFormStage(
          <>
            <FamilyDetails satge={stage} onStageChange={formStageHandler} />
          </>
        );
        setStage(6);
        setForward(false);
        break;
      case 7:
        setStage(7);
        setForward(true);
        break;
      default:
        setFormStage(
          <>
            <PersonalInfoForm satge={stage} onStageChange={formStageHandler} />
          </>
        );
        setStage(1);
        setForward(false);
        setBack(true);
    }
  };
  const [jsxFormStage, setFormStage] = useState(
    <>
      <PersonalInfoForm satge={stage} onStageChange={formStageHandler} />
    </>
  );

  return (
    <>
      <div className="registration container ">
        {/* <img 
            src={image}
            alt=''
            className="imgfix rounded float-left"
          />
          </div> */}

        <RegistrationProgressBar stage={stage} />

        {jsxFormStage}

        <button
          type="button"
          className="btn btn-success col-sm-3"
          onClick={() => formStageHandler(stage - 1)}
          disabled={back}
        >
          {" "}
          Previous
        </button>

        <button
          type="button"
          className="btn btn-success col-sm-3 ms-5"
          onClick={() => formStageHandler(stage + 1)}
          disabled={forward}
        >
          Save & Proceed
        </button>
      </div>
    </>
  );
};
export default FormsContainer;
