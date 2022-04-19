import { WizardState, ReducerActionType, WizardScreen } from './types';
import ActionType from './utils';

const INVALID_SCREEN_INDEX = -1;

const isIndexOutOfBound = (screens: WizardScreen[], index: number) => index < 0 || index >= screens.length;

const updateShouldRenderCache = (screen: WizardScreen, shouldRender: boolean) => {
  return {...screen, shouldRenderCachedValue: shouldRender};
};

const shouldRenderScreen = (screen: WizardScreen, aggregatedProps?: object) => {
  const { shouldRender, shouldRenderCachedValue } = screen;
  if (shouldRenderCachedValue) {
    return shouldRenderCachedValue;
  }

  const shouldRenderValue = shouldRender ? shouldRender(aggregatedProps) : true;
  updateShouldRenderCache(screen, shouldRenderValue);

  return shouldRenderValue;
};


const getIndexOfComponent = (componentId: string, screens: WizardScreen[], aggregatedProps?: object) => {
  const index = screens.findIndex(screen => screen.identifier === componentId);
  if (index != -1) {
    if (shouldRenderScreen(screens[index], aggregatedProps)) {
      return index;
    }
  }

  return -1;
}

export const getNextScreenIndex = (screens: WizardScreen[], currentIndex: number, isBackward: boolean, aggregatedProps?: object): number => {
  const nextIndex = isBackward ? currentIndex - 1 : currentIndex + 1;
  if (isIndexOutOfBound(screens, nextIndex)) {
    return INVALID_SCREEN_INDEX;
  }

  return shouldRenderScreen(screens[nextIndex], aggregatedProps)
    ? nextIndex
    : getNextScreenIndex(screens, nextIndex, isBackward, aggregatedProps);
};

const getNextScreen = (screens: WizardScreen[], currentIndex: number, isBackward: boolean, componentId?: string, aggregatedProps?: object): number => {
  if (componentId) {
    const indexOfComponent = getIndexOfComponent(componentId, screens, aggregatedProps);
    if (indexOfComponent >= 0 ) {
      return indexOfComponent;
    }
  }

  return getNextScreenIndex(screens, currentIndex, isBackward, aggregatedProps);
}

const getNextScreenByIdentifier = (screens: WizardScreen[], componentId?: string, aggregatedProps?: object) => {
  if (componentId) {
    const indexOfComponent = getIndexOfComponent(componentId, screens, aggregatedProps);
    if (indexOfComponent >= 0 ) {
      return indexOfComponent;
    }
  }
  
  return INVALID_SCREEN_INDEX; //TODO: throw error
}
/**
 * State reducer for WorkflowWizardManager
 * @param {object} state - React state object
 * @param {object} action - React reducer action
 * @returns {object} state
 */
 export function reducer(state: WizardState, action: ReducerActionType): WizardState {
  const { screens, currentIndex, store } = state;

  let componentId, data;
  //const isDomEvent = action.payload.target;
  if (action.payload) {
    const { componentId: idFromPayload, componentName: nameFromPayload, data: dataPayload} = action.payload;

    componentId = idFromPayload || nameFromPayload;
    data = dataPayload;
  }

  // Merge the incoming props with existing state
  const aggregatedStore = {...store, ...data};

  switch (action.type) {
    case ActionType.PREVIOUS:
      return { ...state, store: aggregatedStore, currentIndex: getNextScreen(screens, currentIndex, true, componentId, aggregatedStore) };
    case ActionType.NEXT:
      return { ...state, store: aggregatedStore, currentIndex: getNextScreen(screens, currentIndex, false, componentId, aggregatedStore) };
    case ActionType.GOTO_SCREEN:
      return { ...state, store: aggregatedStore, currentIndex: getNextScreenByIdentifier(screens, componentId, aggregatedStore) };
    case ActionType.ERROR:
      return { ...state, error: action.error };
    default:
      throw new Error('Invalid action type');
  }
}


export const nextScreenPresent = (screens: WizardScreen[], currentIndex: number, aggregatedProps?: object) => {
  const nextIndex = getNextScreenIndex(screens, currentIndex, false, aggregatedProps);
  return nextIndex !== INVALID_SCREEN_INDEX;
};

export const previousScreenPresent = (screens: WizardScreen[], currentIndex: number, aggregatedProps?: object) => {
  const nextIndex = getNextScreenIndex(screens, currentIndex, true, aggregatedProps);
  return nextIndex !== INVALID_SCREEN_INDEX;
};