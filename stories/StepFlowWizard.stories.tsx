import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Box,
  InputLabel,
  TextField,
  Button,
  Select,
  MenuItem,
  Divider,
  Stack
} from '@mui/material';

import StepFlowWizard from '../src/StepFlowWizard';

export default {
  title: 'StepFlowWizard',
  component: StepFlowWizard,
} as ComponentMeta<typeof StepFlowWizard>;


const Layout = ({part1, part2}) => {
  return (
    <Box sx={{
      backgroundColor: '#e9ecef',
      padding: '2%',
      minHeight: '200px',
    }}>
       <Box sx={{
          minHeight: '160px',
        }}>
            {part1}
        </Box>

        <Box padding={1} sx={{
          paddingTop: '20px',
        }}>
            {part2}
        </Box>

    </Box>
  );
};

const Step1 = ({onNextClick}) => {

  return (
    <Layout part1={
        <div>
          <h3> Step 1</h3>
            Welcome to the demo of StepFlowWizard.
            Each Component will receive the following props.
            <ul>
              <li>onNextClick: Function</li>
              <li>onPreviousClick: Function</li>
              <li>onGoToScreen: Function</li>
              <li>Each of these function can be invoked using an object with property `data: {}`</li>
            </ul>
          </div>
      }

      part2 = {
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onNextClick}>Next</Button>
        </Stack>
      }
    />
  );
}

const Step2 = ({onPreviousClick, onNextClick}) => {
  return (
    <Layout part1={
        <div>
          <h3> Step 2</h3>
          <div style={{ flexGrow: 2}}>
            Demo of navigating to Next and Previous step.
          </div>
        </div>
      }

      part2 = {
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
          <Button variant="contained" onClick={onNextClick}>Next</Button>
        </Stack>
      }
    />
  );
}

const Step3 = ({onPreviousClick, onNextClick}) => {
  const [country, setCountry] = useState('US');
  const handleSelectionChange = (e) => {
    setCountry(e.target.value);
  }

  const handleGoNextWithData = () => {
    onNextClick({
      data: {
          selectedCountry: country,
      }
    })
  }

  return (
    <Layout part1={
        <div>
          <h3> Step 3</h3>
          <Stack spacing={2} direction="column">
            <div>
              Demo of navigating to Next passing data, the passed data gets stored in the wizard store.
              <br/>
              Further the wizard store gets exposed to all the screen components as props.
            </div>
            <div>
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
          </Stack>
        </div>
      }

      part2 = {
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
          <Button variant="contained" onClick={handleGoNextWithData}
          >Next with passing data</Button>
        </Stack>
      }
    />
  );
}
const Step4 = ({onPreviousClick, onNextClick, selectedCountry}) => {
  return (
    <Layout part1={
        <div>
          <h3> Step 4</h3>
          <div>
            The selected country from the previous step is: {selectedCountry}
          </div>
        </div>
      }

      part2 = {
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
          <Button variant="contained" onClick={onNextClick}>Next</Button>
        </Stack>
      }
    />
  );
}

const Step5 = ({onPreviousClick, onGoToScreen}) => {
  return (
    <Layout part1={
        <div>
          <h3> Step 5</h3>
          <div>
            Demo of navigating to a screen based on identifier or screen name. 
          </div>
        </div>
      }

      part2 = {
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
          <Button variant="contained" onClick={() => onGoToScreen(
            {
              componentName: "step2"
            })}>Go to step-2
          </Button>
        </Stack>
      }
    />
  );
}

const LastStep = ({onPreviousClick, onGoToScreen}) => {
  return (
    <Layout part1={
        <div>
          <h3> Step 5</h3>
          <div>
            Demo of navigating to a screen based on identifier or screen name. 
          </div>
        </div>
      }

      part2 = {
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onPreviousClick}>Previous</Button>
          <Button variant="contained" onClick={() => onGoToScreen(
            {
              componentName: "step1"
            })}>Go to step-1
          </Button>
        </Stack>
      }
    />
  );
}

export const SampleWorkflow: ComponentStory<typeof StepFlowWizard> = () => {
  const screens = [
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
    <>
     <h2>Step Flow Wizard</h2>
     <StepFlowWizard
        screens={screens}
      />  
    </>
     
  );
};

// Example of conditional rendering of Step using function handler
export const WorkflowConditionalRenderingOfStep: ComponentStory<typeof StepFlowWizard> = () => {
  const screens = [
    {
      identifier: 'step1',
      component: Step1
    },
    {
      identifier: 'step2',
      component: Step2,
      //this component doesn't get rendered.
      shouldRender: () => false
    },
    {
      identifier: 'step5',
      component: LastStep
    }
  ];

  return (
    <>
     <h2>Step Flow Wizard</h2>
     <StepFlowWizard
        screens={screens}
      />  
    </>
     
  );
};


