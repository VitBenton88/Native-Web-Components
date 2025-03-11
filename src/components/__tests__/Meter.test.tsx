import { cleanup, render, screen } from '@testing-library/react';
import Meter, { type MeterProps } from '../Meter';

describe('Meter', () => {
	const renderComponent = (propData: MeterProps = { value: 50, min: 0, max: 100 }) =>
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

			it('should render meter element', () => {
				expect(elements.meter).toBeInTheDocument();
			});

			it('should not render label element', () => {
				expect(elements.label).not.toBeInTheDocument();
			});
		});
	});
});