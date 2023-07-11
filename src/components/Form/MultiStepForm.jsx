import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import FormNavigation from './FormNavigation';

function MultiStepForm({children, initialValues, onSubmit}) {
    
    const [stepNumber, setStepNumber] = useState(0);
    //array of <FormStep>
    const steps =  React.Children.toArray(children);

    const [snapshot, setSnapshot] = useState(initialValues)

    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps -1;

    const next = (values)=>{
        setSnapshot(values)
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    }

    const back = (values)=>{
        setSnapshot(values)
        setStepNumber(Math.max(stepNumber - 1, 0));
    }

    const handleSubmit = async (values, actions)=>{
        console.log("hii")
        if(step.props.onSubmit){
            await step.props.onSubmit(values, actions)
        }

        if(isLastStep){
            return onSubmit(values, actions)
        }else{
            actions.setTouched({});
            next(values);
        }
    }

  return (
    <div>
        <Formik
              initialValues={snapshot}
              validationSchema={step.props.validationSchema}
              onSubmit= {handleSubmit}>

              {(formik)=>{
                
                return (
                    <Form>
                        {step}
                        <FormNavigation 
                            isLastStep={isLastStep} 
                            hasPrevious={stepNumber>0} 
                            onBackClick={()=>{back(formik.values)}}
                            disabled={!(formik.dirty && formik.isValid)}
                        />
                    </Form>
                )
              }}
        </Formik>
    </div>
  )
}

export default MultiStepForm;



//form step
export const FormStep = ({stepName, children}) => children;