# step-flow-wizard

An intelligent multistep wizard for React

### Install


```
npm install react-step-wizard

yarn add react-step-wizard
```

### Import Component

```js
import StepFlowWizard from "step-flow-wizard";
```

### JSX Syntax

Create an array elements describing the components that make an individual step in the workflow.
Each component will receive props which help to move forward or backward in the wizard.
See the Props section for more detail on the props.

```jsx
const screens = [
  {
    identifier: 'step1',
    component: (props) => {
      const { onNextClick } = props;
      return (
        <>
          // render something
          <button onClick={onNextClick}>Next </button>
        </>
      ):
    },
  },
  {
    identifier: 'step2',
    component:  component: (props) => {
      const { onPreviousClick, onNextClick } = props;
      return (
        <>
          // render something
          <button onClick={onPreviousClick}>Previous </button>
          <button onClick={onNextClick}>Next </button>
        </>
      ):
    },
    shouldRender: ({ region }) => {
      // Show this step only for US region
      return region !== 'US';
    }
  },
  {
    identifier: 'step3',
    component: component:  component: (props) => {
      const { onPreviousClick, onNextClick } = props;
      return (
        <>
          // render something
          <button onClick={onPreviousClick}>Previous</button>
        </>
      ):
    },
  },
];

<StepFlowWizard 
  screens={screens}/>

```

### Props
