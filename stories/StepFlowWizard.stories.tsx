import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  InputLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from '@mui/material';

import StepFlowWizard from '../src/StepFlowWizard';

export default {
  title: 'StepFlowWizard',
  component: StepFlowWizard,
} as ComponentMeta<typeof StepFlowWizard>;


const Grid = ({children}) => {
   return (
    <div style={{height: '200px', display: 'flex', flexDirection: 'column'}}>
      {children}
    </div>
   );
}

const Step1 = ({onNextClick}) => {
  return (
    <Grid>
        <div style={{ flexGrow: 2}}>
          Welcome to the demo of StepFlowWizard.
          Each Component will receive the following props.
          <ul>
            <li>onNextClick: Function</li>
            <li>onPreviousClick: Function</li>
            <li>onGoToScreen: Function</li>
            <li>Each of these function can be invoked using an object with property `data: {}`</li>
          </ul>
          
        </div>
        <div>
            <Button variant="contained" onClick={onNextClick}>Continue</Button>
        </div>
    </Grid>
  
  );
}

const Step2 = ({onPreviousClick, onNextClick}) => {
  return (
    <Grid >
        <div style={{ flexGrow: 2}}>
            Demo of navigating to Next and Previous step.
        </div>
        <div >
            <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
            <Button variant="contained" onClick={onNextClick}>Continue</Button>
        </div>
    </Grid>
  
  );
}

const Step3 = ({onPreviousClick, onNextClick}) => {
  const [country, setCountry] = useState('US');
  const handleSelectionChange = (e) => {
    setCountry(e.target.value);
  }
  return (
    <Grid >
        <div style={{ flexGrow: 2}}>
            Demo of navigating to Next passing data, the passed data gets stored in the wizard store.
            <br/>
            Further the wizard store gets exposed to all the screen components as props.
        </div>
        <div style={{ flexGrow: 2}}>
          <InputLabel id="demo-simple-select-label">Select a country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="country"
            onChange={handleSelectionChange}
          >
            <MenuItem value={"US"}>US</MenuItem>
            <MenuItem value={"UK"}>UK</MenuItem>
            <MenuItem value={"IN"}>IN</MenuItem>
          </Select>
        </div>
        <div style={{ flexGrow: 1}}>
            <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
            <Button variant="contained" onClick={
              () => onNextClick({
                data: {
                    selectedCountry: country,
                }
              })}
            >Continue</Button>
        </div>
    </Grid>
  );
}
const Step4 = ({onPreviousClick, onNextClick, selectedCountry}) => {
  return (
    <Grid >
        <div style={{ flexGrow: 2}}>
            The selected country from the previous step is: {selectedCountry}
        </div>
        <div >
            <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
            <Button variant="contained" onClick={onNextClick}>Continue</Button>
        </div>
    </Grid>
  );
}

const Step5 = ({onPreviousClick, onGoToScreen}) => {
  return (
    <Grid >
        <div style={{ flexGrow: 2}}>
            Demo of navigating to a screen based on identifier or screen name. 
        </div>
        <div >
            <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
            <Button variant="contained" onClick={() => onGoToScreen(
              {
                componentName: "step1"
              })}>Go to screen</Button>
        </div>
    </Grid>
  );
}

export const Primary: ComponentStory<typeof StepFlowWizard> = () => {

  const steps = [
    {
      identifier: 'step1',
      component: Step1
    },
    {
      identifier: 'step2',
      component: Step2
    },
    {
      identifier: 'step3',
      component: Step3
    },
    {
      identifier: 'step4',
      component: Step4
    },
    {
      identifier: 'step5',
      component: Step5
    }
  ];

  return (
      <StepFlowWizard
        screenConfig={steps}
      />  
  );
};


