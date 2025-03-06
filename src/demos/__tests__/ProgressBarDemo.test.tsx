import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import ProgressBarDemo from '../ProgressBarDemo';

describe('ProgressBarDemo', () => {
  const renderComponent = () => render(<ProgressBarDemo />);

  const elements = {
    get progressBar() { return screen.getByTestId('progress-demo'); },
    get progressAddButton() { return screen.getByTestId('progress-add-demo'); },
    get progressSubtractButton() { return screen.getByTestId('progress-subtract-demo'); },
  };

  afterEach(cleanup);

  describe('renders', () => {
    describe('default', () => {
      beforeEach(() => {
        renderComponent();
      });

      it('should render progress bar element with correct attribute values', () => {
        waitFor(() => {
          const { progressBar } = elements;

          expect(progressBar).toBeInTheDocument();
          expect(progressBar).toHaveAttribute('label', 'Test progress bar');
          expect(progressBar).toHaveAttribute('percentPosition', 'bottom');
          expect(progressBar).toHaveAttribute('showPercentage');
          expect(progressBar).toHaveAttribute('value', 50);
        });
      });
    });
  });

  describe('behavior', () => {
    describe('when progress value is decreased', () => {
      beforeEach(() => {
        waitFor(() => {
          fireEvent.click(elements.progressSubtractButton);
        });
      })

      it('should render progress element with updated value', () => {
        waitFor(() => {
          expect(elements.progressAddButton).toHaveAttribute('value', 49);
        });
      });
    });

    describe('when progress value is increased', () => {
      beforeEach(() => {
        waitFor(() => {
          fireEvent.click(elements.progressAddButton);
        });
      })

      it('should render progress element with updated value', () => {
        waitFor(() => {
          expect(elements.progressAddButton).toHaveAttribute('value', 51);
        });
      });
    });
  });
});