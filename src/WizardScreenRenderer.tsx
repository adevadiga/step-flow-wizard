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
  
  return React.createElement(component, {key: identifier, ...props, ...stepFlowWizardStore,  ...rest});
}

export default WizardScreenRenderer;