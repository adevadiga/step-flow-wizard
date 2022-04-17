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

Pass a config array containing components.

```jsx
const screens = [
  {
    identifier: 'step1',
    component: Component1,
  },
  {
    identifier: 'step2',
    component: Component2,
    shouldRender: ({ region }) => {
      // Show this step only for US region
      return region !== 'US';
    }
  },
  {
    identifier: 'step3',
    component: Component3,
  },
];

<StepFlowWizard 
  screens={screens}/>

```

### Props
