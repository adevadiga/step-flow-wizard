import React, { FunctionComponent } from 'react';
import { WizardScreenRendererProps } from './types';

const WizardScreenRenderer: FunctionComponent<WizardScreenRendererProps> = (props) => {
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

export default WizardScreenRenderer;