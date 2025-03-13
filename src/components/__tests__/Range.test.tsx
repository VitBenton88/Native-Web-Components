import { cleanup, render, screen } from '@testing-library/react';
import Range, { type RangeProps } from '../Range';

const mockDefaultProps: RangeProps = { value: 50, min: 0, max: 100, onChange: vi.fn() };
const mockTickMarks = [1, 2, 3];

describe('Range', () => {
	const renderComponent = (propData = mockDefaultProps) =>
		render(<Range {...propData} />);

	const elements = {
		get datalist() { return screen.queryByTestId('datalist'); },
		get dataOptions() { return screen.queryAllByTestId('dataOption'); },
		get rangeInput() { return screen.getByTestId('rangeInput'); },
	};

	afterEach(cleanup);

	describe('renders', () => {
		describe('default', () => {
			beforeEach(() => {
				renderComponent();
			});

			it('should render range input element with correct attributes', () => {
				expect(elements.rangeInput).toBeInTheDocument();
				expect(elements.rangeInput).toHaveAttribute("max", mockDefaultProps.max?.toString());
				expect(elements.rangeInput).toHaveAttribute("min", mockDefaultProps.min?.toString());
				expect(elements.rangeInput).toHaveAttribute("value", mockDefaultProps.value?.toString());
			});

			it('should not render datalist element', () => {
				expect(elements.datalist).not.toBeInTheDocument();
			});

			it('should not render datalist options elements', () => {
				expect(elements.dataOptions.length).toBeFalsy();
			});
		});

		describe('with datalist', () => {
			beforeEach(() => {
				renderComponent({ ...mockDefaultProps, showDatalist: true, tickMarks: mockTickMarks });
			});

			it('should render datalist element', () => {
				expect(elements.datalist).toBeInTheDocument();
			});

			it('should render correct datalist options elements', () => {
				const { dataOptions } = elements;

				expect(dataOptions.length).toBeTruthy();
				dataOptions.forEach((_option, index) => {
					expect(dataOptions[index]).toHaveAttribute('value', `${mockTickMarks[index]}`);
				});
			});
		});
	});
});