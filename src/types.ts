import * as React from 'react';

export type ScreenConfig  = {
  identifier: string,
  component: React.ComponentType<any>,
  shouldRender?: (props: any) => boolean,
  shouldRenderCachedValue?: boolean,
}

export type StepWizardProps = {
  screenConfig: ScreenConfig[]
}

export type StepWizardState = {
  currentIndex: number,
  screens: ScreenConfig[]
  store: any,
  error?: any
}

export type ActionPayLoad = {
  componentName?: string,
  data?: object,
}

export type ReducerActionType =  {
  type: string,
  isLoading?: boolean,
  error?: object,
  screens?: ScreenConfig[],
  currentIndex?: number,
  payload?: ActionPayLoad,
}

export type StepFlowWizardScreenRendererType = {
  screen: ScreenConfig,
  onPreviousClick?: Function,
  onNextClick?: Function,
  onGoToScreen: Function,
  onError: Function,
  stepFlowWizardStore: any,
}