import React, { useCallback, useReducer } from 'react';
import { nextScreenPresent, previousScreenPresent, reducer } from './stepFlowReducer';
import WizardScreenRenderer from './WizardScreenRenderer';
import { WizardProps, WizardState, ActionPayLoad } from './types';
import ActionType from './utils';


const initialState: WizardState = {
  currentIndex: 0,
  screens: [],
  store: {},
};

const init = (
  initialState: WizardState,
  props: WizardProps,
): WizardState => {
  const { screens, ...rest } = props;
  return { ...initialState, screens, store: {...rest} };
};

const StepFlowWizard = (props: WizardProps) => {
  const [state, dispatch] = useReducer(reducer, init(initialState, props));

  const handlePreviousClick = useCallback(
    (payload?: ActionPayLoad) => {
      dispatch({ type: ActionType.PREVIOUS, payload });
    },
    [props],
  );

  const handleNextClick = useCallback(
    (payload?: ActionPayLoad) => {
      dispatch({ type: ActionType.NEXT, payload });
    },
    [props],
  );

  const handleGoToScreen = useCallback(
    (payload?: ActionPayLoad) => {
      dispatch({ type: ActionType.GOTO_SCREEN, payload });
    },
    [props],
  );

  const handleError = useCallback(
    (payload?: ActionPayLoad) => {
      dispatch({ type: ActionType.ERROR, payload });
    },
    [props],
  );

  const { screens, currentIndex, store } = state;

  const nextScreenAvailable = nextScreenPresent(screens, currentIndex, store);
  const prevScreenAvailable = previousScreenPresent(screens, currentIndex, store);
  const activeWorkflowScreen = currentIndex in screens ? screens[currentIndex] : undefined;


  if (activeWorkflowScreen) {
    return (
      <WizardScreenRenderer
          screen={activeWorkflowScreen}
          onPreviousClick={prevScreenAvailable ? handlePreviousClick : undefined}
          onNextClick={nextScreenAvailable ? handleNextClick : undefined}
          onGoToScreen={handleGoToScreen}
          onError={handleError}
          stepFlowWizardStore={store}
      />
    );
  }
  
  return null;
}

export default StepFlowWizard;