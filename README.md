# step-flow-wizard

An intelligent multistep wizard for React

### Install


```
npm install step-flow-wizard

yarn add step-flow-wizard
```

### Usage

#### Import

```js
import StepFlowWizard from "step-flow-wizard";
```

#### JSX

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
          <button onClick={onPreviousClick}>Previous </button>
          <button onClick={() => onNextClick({ data: {
            name: 'X',
            age: 30
          }})}>Next </button>
        </>
      ):
    },
  },
  {
    identifier: 'step4',
    component: component:  component: (props) => {
      const { onPreviousClick } = props;
      return (
        <>
          // render something
          <button onClick={onPreviousClick}>Previous</button>
        </>
      ):
    },
  },
];


<StepFlowWizard screens={screens}/>

```

### Props

Each component in the wizard will receive the following props that help perform navigation

#### Props Accessible On Each Step Component

| Prop          | Data Type  | Description                                                                              |
| ------------- | ---------- | ---------------------------------------------------------------------------------------- |
| onPreviousClick       | `function`   | Go to previous step in the workflow, `null` if previous step is not present |
| onNextClick   | `function`  | Go to next step in the workflow, `null` if next step is not present |
| onGoToScreen      | `function` | Navigate to a step using a named identifier |
| props      | `object` | StepFlowWizard also acts as a store where you can put and get things. onPreviousClick, onNextClick and onGoToScreen takes an argument of type `{ data: {foo: 'bar'} }`, which results in adding a `foo` attribute to the Store, which can be accessed as a prop from the components.   |
