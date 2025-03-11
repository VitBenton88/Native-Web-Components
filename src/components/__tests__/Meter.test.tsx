import { cleanup, render, screen } from '@testing-library/react';
import Meter, { type MeterProps } from '../Meter';

const mockDefaultProps: MeterProps = { value: 50, min: 0, max: 100 };

describe('Meter', () => {
	const renderComponent = (propData: MeterProps = mockDefaultProps) =>
		render(<Meter {...propData} />);

	const elements = {
		get label() { return screen.queryByTestId('label'); },
		get meter() { return screen.queryByTestId('meter'); },
	};

	afterEach(cleanup);

	describe('renders', () => {
		describe('default', () => {
			beforeEach(() => {
				renderComponent();
			});

			it('should render meter element with correct attributes', () => {
				expect(elements.meter).toBeInTheDocument();
				expect(elements.meter).toHaveAttribute("max", mockDefaultProps.max?.toString());
				expect(elements.meter).toHaveAttribute("min", mockDefaultProps.min?.toString());
				expect(elements.meter).toHaveAttribute("value", mockDefaultProps.value?.toString());
			});

			it('should not render label element', () => {
				expect(elements.label).not.toBeInTheDocument();
			});
		});

		describe('with label', () => {
			beforeEach(() => {
				renderComponent({ ...mockDefaultProps, label: 'test label' });
			});

			it('should render label element', () => {
				expect(elements.label).toBeInTheDocument();
			});

			it('should render correct label text', () => {
				expect(elements.label).toHaveTextContent('test label');
			});
		});
	});
});