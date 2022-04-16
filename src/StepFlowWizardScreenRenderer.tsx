import React, { FunctionComponent } from 'react';
import { StepFlowWizardScreenRendererType } from './types';

const StepFlowWizardScreenRenderer: FunctionComponent<StepFlowWizardScreenRendererType> = (props) => {
  const { 
    screen: {
      identifier,
      component,
    },
    stepFlowWizardStore,
    ...rest
  } = props;
  const Container = component;
  return <div>
    <Container {...props} key={identifier}  {...stepFlowWizardStore} {...rest}/>
  </div>
}

export default StepFlowWizardScreenRenderer;