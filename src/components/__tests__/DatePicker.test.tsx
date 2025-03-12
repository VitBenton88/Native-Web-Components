import { cleanup, render, screen } from '@testing-library/react';
import DatePicker, { type DateInputProps } from '../DatePicker';

const mockDefaultProps: DateInputProps = { value: '', onChange: vi.fn() };

describe('DatePicker', () => {
	const renderComponent = (propData = mockDefaultProps) =>
		render(<DatePicker {...propData} />);

	const elements = {
		get dateInput() { return screen.queryByTestId('dateInput'); },
		get label() { return screen.queryByTestId('label'); },
	};

	afterEach(cleanup);

	describe('renders', () => {
		describe('default', () => {
			beforeEach(() => {
				renderComponent();
			});

			it('should render date input with correct attributes', () => {
				expect(elements.dateInput).toBeInTheDocument();
				expect(elements.dateInput).toHaveAttribute("value", mockDefaultProps.value?.toString());
			});

			it('should not render input label', () => {
				expect(elements.label).not.toBeInTheDocument();
			});
		});

		describe('with a label', () => {
			beforeEach(() => {
				renderComponent({ ...mockDefaultProps, label: 'test label' });
			});

			it('should render input label with correct value', () => {
				expect(elements.label).toBeInTheDocument();
				expect(elements.label).toHaveTextContent('test label');
			});
		});
	});
});