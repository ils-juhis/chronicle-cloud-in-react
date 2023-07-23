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

    const next = (values, actions)=>{
        setSnapshot(values)
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    }

    const back = (values, actions)=>{
        setSnapshot(values)
        setStepNumber(Math.max(stepNumber - 1, 0));

    }

    const handleSubmit = async (values, actions)=>{
        if(step.props.onSubmit){
            await step.props.onSubmit(values, actions)
            actions.setSubmitting(false)
        }

        if(isLastStep){
            return onSubmit(values, actions)
        }else{
            actions.setTouched({});
            next(values);
        }
    }

    const list = []

    for (let i=0; i<totalSteps; i++) {
      list.push(
        <div style={stepNumber===i? {opacity: 1}: {opacity: 0.7}} className="col-6 mb-3" key={i}>
            <div className="txt">{`Step 0${i+1}`}</div>
            <div className="underline"></div>
        </div>
      )
    }

  return (
    <div>
        <div className="reg-steps row ">
            {list}
        </div>
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
                            err={formik.errors}
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