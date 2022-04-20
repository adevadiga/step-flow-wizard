import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import StepFlowWizard from '../src/StepFlowWizard';
import '@testing-library/jest-dom/extend-expect';

const View1 = ({ onNextClick }) => {
  return (
    <>
      <label>View1</label>
      <button onClick={onNextClick}>Go Next</button>
    </>
  );
}

const View2 = ({ onPreviousClick, onNextClick, region }) => {
  return (
    <>
      <label>View2</label>
      <span>{region}</span>
      <button onClick={onPreviousClick}>Go back</button>
      <button onClick={onNextClick}>Go Next</button>
    </>
  );
}

const View3 = ({ onPreviousClick, onGoToScreen }) => {
  return (
    <>
      <label>View3</label>
      <button onClick={onPreviousClick}>Go back</button>
      <button onClick={() => onGoToScreen({componentId: 'step1'})}>Go to step-1</button>
    </>
  );
}

describe("StepFlowWizard tests", () => {
  it("should navigate sequential steps using the onPreviousClick and onNextClick handlers", async () => {
    const screens = [
      {
        identifier: 'step1',
        component: View1,
      },
      {
        identifier: 'step2',
        component: View2,
      }
    ];

    render(<StepFlowWizard screens={screens} />);

    expect(screen.getByText('View1')).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('Go Next');


    fireEvent.click(screen.getByText('Go Next'));
    await waitFor(() => screen.getAllByRole('button'));
    expect(screen.getByText('View2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Go back'));
    await waitFor(() => screen.getByRole('button'));
    expect(screen.getByText('View1')).toBeInTheDocument();
  });

  it("should navigate to any step using onGoToScreen", async () => {
    const screens = [
      {
        identifier: 'step1',
        component: View1,
      },
      {
        identifier: 'step2',
        component: View2,
      },
      {
        identifier: 'step3',
        component: View3,
      }
    ];

    render(<StepFlowWizard screens={screens} />);

    fireEvent.click(screen.getByText('Go Next'));
    await waitFor(() => screen.getAllByRole('button'));

    fireEvent.click(screen.getByText('Go Next'));
    await waitFor(() => screen.getAllByRole('button'));
    expect(screen.getByText('View3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Go to step-1'));
    await waitFor(() => screen.getByRole('button'));
    expect(screen.getByText('View1')).toBeInTheDocument();
  });

  /*it("should navigate and update store with data passed", async () => {
    
  });*/
});
