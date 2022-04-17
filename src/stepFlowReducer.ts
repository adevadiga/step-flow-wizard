import { StepWizardState, ReducerActionType, ScreenConfig } from './types';
import ActionType from './utils';

const INVALID_SCREEN_INDEX = -1;

const isIndexOutOfBound = (screens: ScreenConfig[], index: number) => index < 0 || index >= screens.length;

const updateShouldRenderCache = (screen: ScreenConfig, shouldRender: boolean) => {
  return {...screen, shouldRenderCachedValue: shouldRender};
};

const shouldRenderScreen = (screen: ScreenConfig, aggregatedProps?: object) => {
  const { shouldRender, shouldRenderCachedValue } = screen;
  if (shouldRenderCachedValue) {
    return shouldRenderCachedValue;
  }

  const shouldRenderValue = shouldRender ? shouldRender(aggregatedProps) : true;
  updateShouldRenderCache(screen, shouldRenderValue);

  return shouldRenderValue;
};


const getIndexOfComponent = (componentName: string, screens: ScreenConfig[], aggregatedProps?: object) => {
  const index = screens.findIndex(screen => screen.identifier === componentName);
  if (index != -1) {
    if (shouldRenderScreen(screens[index], aggregatedProps)) {
      return index;
    }
  }

  return -1;
}

export const getNextScreenIndex = (screens: ScreenConfig[], currentIndex: number, isBackward: boolean, aggregatedProps?: object): number => {
  const nextIndex = isBackward ? currentIndex - 1 : currentIndex + 1;
  if (isIndexOutOfBound(screens, nextIndex)) {
    return INVALID_SCREEN_INDEX;
  }

  return shouldRenderScreen(screens[nextIndex], aggregatedProps)
    ? nextIndex
    : getNextScreenIndex(screens, nextIndex, isBackward, aggregatedProps);
};

const getNextScreen = (screens: ScreenConfig[], currentIndex: number, isBackward: boolean, componentName?: string, aggregatedProps?: object): number => {
  if (componentName) {
    const indexOfComponent = getIndexOfComponent(componentName, screens, aggregatedProps);
    if (indexOfComponent >= 0 ) {
      return indexOfComponent;
    }
  }

  return getNextScreenIndex(screens, currentIndex, isBackward, aggregatedProps);
}

const getNextScreenByIdentifier = (screens: ScreenConfig[], componentName?: string, aggregatedProps?: object) => {
  if (componentName) {
    const indexOfComponent = getIndexOfComponent(componentName, screens, aggregatedProps);
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
 export function reducer(state: StepWizardState, action: ReducerActionType): StepWizardState {
  const { screens, currentIndex, store } = state;

  let componentName, data = {};
  if (action.payload) {
    ({
        componentName,
        data = {}
      } = action.payload
    );
  }

  // Merge the incoming props with existing state
  const aggregatedStore = {...store, ...data};

  switch (action.type) {
    case ActionType.PREVIOUS:
      return { ...state, store: aggregatedStore, currentIndex: getNextScreen(screens, currentIndex, true, componentName, aggregatedStore) };
    case ActionType.NEXT:
      return { ...state, store: aggregatedStore, currentIndex: getNextScreen(screens, currentIndex, false, componentName, aggregatedStore) };
    case ActionType.GOTO_SCREEN:
      return { ...state, store: aggregatedStore, currentIndex: getNextScreenByIdentifier(screens, componentName, aggregatedStore) };
    case ActionType.ERROR:
      return { ...state, error: action.error };
    default:
      throw new Error('Invalid action type');
  }
}


export const nextScreenPresent = (screens: ScreenConfig[], currentIndex: number, aggregatedProps?: object) => {
  const nextIndex = getNextScreenIndex(screens, currentIndex, false, aggregatedProps);
  return nextIndex !== INVALID_SCREEN_INDEX;
};

export const previousScreenPresent = (screens: ScreenConfig[], currentIndex: number, aggregatedProps?: object) => {
  const nextIndex = getNextScreenIndex(screens, currentIndex, true, aggregatedProps);
  return nextIndex !== INVALID_SCREEN_INDEX;
};