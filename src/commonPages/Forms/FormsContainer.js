import PersonalInfoForm from "./PersonalInfoForm";
import 'bootstrap/dist/css/bootstrap.css';
import ContactInfoForm from "./ContactInfoForm";
import { useState } from "react";
import RegistrationProgressBar from "../RegProgBar/RegistrationProgressBar";
import './FormInput.css';
import DevotionalInfoForm from "./DevotionalInfoForm";
import AddDevotionalInfoForm from "./AddDevotionalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import FamilyDetails from "./FamilyDetailsForm";
import image from 'C:\\users\\kaush\\vlog_app\\src\\images\\lordWithDevs.png';


const FormsContainer=()=>{

    const [stage,setStage]=useState(1);
    const [back,setBack]=useState(true);
    const [forward,setForward]=useState(false);
    const formStageHandler=(stage)=>{
     switch (stage) {
        case 1:
           setFormStage( <><PersonalInfoForm satge={stage} onStageChange={formStageHandler}/></>);
            setStage(1);
            setBack(true);
            setForward(false);
            break;
        case 2:
            setFormStage(<><ContactInfoForm satge={stage} onStageChange={formStageHandler}/></>);
            setStage(2);
            setBack(false);
            break;
            case 3:
            setFormStage(<><DevotionalInfoForm satge={stage} onStageChange={formStageHandler}/></>);
            setStage(3);
            break;
            case 4:
            setFormStage(<><AddDevotionalInfoForm satge={stage} onStageChange={formStageHandler}/></>);
            setStage(4);
            break;
            case 5:
            setFormStage(<><ProfessionalInfoForm satge={stage} onStageChange={formStageHandler}/></>);
            setStage(5);
            break;
            case 6:
            setFormStage(<><FamilyDetails satge={stage} onStageChange={formStageHandler}/></>);
            setStage(6);
            
            break;
            case 7:
                setStage(7);
                setForward(true);
                break;
        default:
            setFormStage( <><PersonalInfoForm satge={stage} onStageChange={formStageHandler}/></>);
            setStage(1);
     }
    }
     const [jsxFormStage,setFormStage]=useState(<><PersonalInfoForm satge={stage} onStageChange={formStageHandler}/></>);
    
    return(<>
    <div className="registration container" style={{padding : '10px' }}>
    <RegistrationProgressBar  stage={stage} />
    <div className="container">
    <div className='row'>
        <div className="col md-3">
    <img
            src={image}
            alt="image"
          />
          </div>
          <div className="col">
        {jsxFormStage}
        <div className="row">
        
             <button type="button" className="btn btn-success col-sm-3" onClick={()=>formStageHandler(stage-1)}  disabled={back}> Previous</button>
           
            
             <button type="button" className="btn btn-success col-sm-3 ms-5" onClick={()=>formStageHandler(stage+1)} disabled={forward} >Save & Proceed</button>
             </div>
        </div>
        
             </div>
    </div>
    </div>
    </>);
}
export default FormsContainer;