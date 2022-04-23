# step-flow-wizard

An intelligent multistep wizard for React


## Highlights

- Each individual component in the workflow will receive following props to manage the navigation in the wizard
   - `onPreviousClick` - go to the previous step
   - `onNextClick` - go to the next step
   - `onGoToScreen` - go to a step using the step identifier

- Wizard also manages a Store where you can PUT things from any Step and GET things from any other Step.
    - Wizard Store gets exposed as Props to individual component
    - The navigation functions support adding things to the wizard Store
      ```
        onNextClick({ data: {
          name: 'Mr X',
          age: 42,
          address: {}
        }})

      ```
- Dynamic control of skipping Step based on the config.

    ```
        const steps = [
          {
            identifier: 'step1',
            component: View1,
            shouldRender: (props) {
              const { region } = props;
              //Skip this step for non US regions
              return region === 'US';
            }
          }
          ...
        ]
    ```
- Configure additional parameter in the Step definition, which are passed as props to component

  ```
        const steps = [
          {
            identifier: 'step1',
            component: View1,
            params: {
              // product will be available as props
              product: 'Iphone'
            }
          }
          ...
        ]
    ```

[![npm version](https://badge.fury.io/js/step-flow-wizard.svg)](https://badge.fury.io/js/step-flow-wizard)

### Demo

[Storybook](http://adevadiga.github.io/step-flow-wizard)

[Try it out](https://codesandbox.io/s/step-flow-wizard-fnr71e?file=/src/App.js)

![Example](https://raw.githubusercontent.com/adevadiga/step-flow-wizard/main/example.gif)

### Installation


```
npm install step-flow-wizard

yarn add step-flow-wizard
```

### Quick Start

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
    // Any additional params you want to configure in the config file.
    params: {
      product: 'xxx',
    }
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
            age: 18
          }})}>Next </button>
        </>
      ):
    },
  },
  {
    identifier: 'step4',
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
    shouldRender: ({ age }) => {
      // Do not show this screen for minors.
      return age > 18;
    }
  },
  {
    identifier: 'step5',
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


<StepFlowWizard screens={screens} region="CA"/>

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


### Author(s)
  Anoop Devadiga (anoopkundapur@gmail.com)

### Next?

All the components are lazy loaded and discarded as soon as your navigate to next/previous step.
This can result in component re-creation.

