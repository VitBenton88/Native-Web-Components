import { render, screen } from '@testing-library/react';
import DetailsDropdown from '../DetailsDropdown';

const mockProps = { body: 'hello world', title: 'hello title' }

describe('DetailsDropdown', () => {
	const renderComponent = ({ body = 'test body content', title = 'test title' }) =>
		render(<DetailsDropdown body={body} title={title} />);

	const elements = {
		get details() { return screen.queryByTestId('details'); },
		get summary() { return screen.queryByTestId('summary'); },
	};

	describe('renders', () => {
		beforeEach(() => {
			renderComponent(mockProps);
		});

		it('should render title prop value in summary element', () => {
			expect(elements.summary).toHaveTextContent(mockProps.title);
		});

		it('should render body prop value in details element', () => {
			expect(elements.details).toHaveTextContent(mockProps.body);
		});
	});
});