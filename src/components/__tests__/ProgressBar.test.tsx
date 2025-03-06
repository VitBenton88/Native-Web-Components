import { cleanup, render, screen, waitFor } from '@testing-library/react';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar';

const mockProgressProps: ProgressBarProps = {
  label: 'test label',
  max: 100,
  showPercentage: false,
  value: 10,
};

describe('ProgressBar', () => {
  const renderComponent = (props = {}) => {
    render(<ProgressBar {...mockProgressProps} {...props} />);
  };

  const elements = {
    get label() { return screen.queryByTestId('label'); },
    get percentage() { return screen.queryByTestId('percentage'); },
    get progress() { return screen.queryByTestId('progress-bar'); },
  };

  afterEach(cleanup);

  describe('renders', () => {
    describe('default', () => {
      beforeEach(() => {
        renderComponent({ ...mockProgressProps });
      });

      it('should render progress element', () => {
        expect(elements.progress).toBeInTheDocument();
      });

      it('should render correct attributes', () => {
        const { max, value } = mockProgressProps;
        const { progress } = elements;

        expect(progress).toHaveAttribute('value', value.toString());
        expect(progress).toHaveAttribute('max', max?.toString());
      });

      it('should render correct label', () => {
        waitFor(() => {
          const { label = '' } = mockProgressProps;

          expect(elements.label).toHaveTextContent(label);
        });
      });

      it('should not render percentage', () => {
        waitFor(() => {
          expect(elements.percentage).not.toBeInTheDocument();
        });
      });

      it('should render label element before progress bar', () => {
        waitFor(() => {
          const { label, progress } = elements;
          const positionResult = label?.compareDocumentPosition(progress as HTMLElement);

          expect(positionResult ?? Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        });
      });

      describe('with no label', () => {
        beforeEach(() => {
          renderComponent({ ...mockProgressProps, label: '' });
        });

        it('should not render label element', () => {
          waitFor(() => {
            expect(elements.label).not.toBeInTheDocument();
          });
        });
      });
    });

    describe('with percent value', () => {
      beforeEach(() => {
        renderComponent({ ...mockProgressProps, showPercentage: true });
      });

      it('should render percentage with correct value', () => {
        waitFor(() => {
          const { label } = elements;

          expect(label).toBeInTheDocument();
          expect(label).toHaveTextContent('10%');
        });
      });

      it('should render percentage element before progress bar', () => {
        waitFor(() => {
          const { percentage, progress } = elements;
          const positionResult = percentage?.compareDocumentPosition(progress as HTMLElement);

          expect(positionResult ?? Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        });
      });
    });

    describe('with label below the progress bar', () => {
      beforeEach(() => {
        renderComponent({ ...mockProgressProps, labelPosition: 'bottom' });
      });

      it('should render percentage element before progress bar', () => {
        waitFor(() => {
          const { label, progress } = elements;
          const positionResult = label?.compareDocumentPosition(progress as HTMLElement);

          expect(positionResult ?? Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        });
      });
    });

    describe('with percent value below the progress bar', () => {
      beforeEach(() => {
        renderComponent({ ...mockProgressProps, showPercentage: true, percentPosition: 'bottom' });
      });

      it('should render percentage element before progress bar', () => {
        waitFor(() => {
          const { percentage, progress } = elements;
          const positionResult = progress?.compareDocumentPosition(percentage as HTMLElement);

          expect(positionResult ?? Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        });
      });
    });
  });
});