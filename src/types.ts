import * as React from 'react';

export type WizardScreen  = {
  identifier: string,
  component: React.ComponentType<any>,
  shouldRender?: (props: any) => boolean,
  shouldRenderCachedValue?: boolean,
  params?: {
    [key: string]: any
  },
}

export type WizardProps = {
  screens: WizardScreen[]
}

export type WizardState = {
  currentIndex: number,
  screens: WizardScreen[]
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
  screens?: WizardScreen[],
  currentIndex?: number,
  payload?: ActionPayLoad,
}

export type WizardScreenRendererProps = {
  screen: WizardScreen,
  onPreviousClick?: Function,
  onNextClick?: Function,
  onGoToScreen: Function,
  onError: Function,
  stepFlowWizardStore: any,
}