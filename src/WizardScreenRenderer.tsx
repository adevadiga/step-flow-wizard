import React, { FunctionComponent } from 'react';
import { WizardScreenRendererProps } from './types';

const WizardScreenRenderer: FunctionComponent<WizardScreenRendererProps> = (props) => {
  const { 
    screen: {
      identifier,
      component,
      params
    },
    stepFlowWizardStore,
    ...rest
  } = props;
  
  return React.createElement(component, {key: identifier, ...props, ...stepFlowWizardStore,  ...rest, ...params});
}

export default WizardScreenRenderer;