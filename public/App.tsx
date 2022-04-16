import React from 'react';
import StepFlowWizard from '../src/StepFlowWizard';

const Foo = (props) => {
  const { onNextClick } = props;
  return (
      <div>
         Foo
         <button onClick={onNextClick}>Next</button>
      </div>
  );
}

const Bar = (props) => {
  const { onNextClick, onPreviousClick } = props;
  return (
      <div>
         Bar
         <button onClick={onPreviousClick}>Previous</button>
         <button onClick={onNextClick}>Next</button>
      </div>
  );
}

const config = [
  {
    identifier: 'screen1',
    component: Foo,
  },
  {
    identifier: 'screen2',
    component: Bar,
  },
  {
    identifier: 'screen3',
    component: Foo,
  }
]


const App = () => {
  return (
      <div>
          Render Wiget
         <StepFlowWizard screenConfig={config}/>
      </div>
  );
};

export default App;