import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    marginTop: 30,
    marginBottom :30,

  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Shipping Information', 'Select Payment', 'Place Order'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Shipping Information';
    case 1:
      return ' Payment';
    case 2:
      return 'Place Order';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper({activeStep, setActiveStep}) {
  const classes = useStyles();

  const steps = getSteps();

  return (
    <div style={{marginTop: 100}} className={classes.root}>
      <Stepper  activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
         
         
          return (
            <Step  {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
     
    </div>
  );
}
