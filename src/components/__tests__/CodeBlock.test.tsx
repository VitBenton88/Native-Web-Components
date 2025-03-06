import { render, screen } from '@testing-library/react';
import CodeBlock, { type Language } from '../CodeBlock';

describe('CodeBlock', () => {
	const renderComponent = ({code="hello world", language="js" as Language}) => {
		render(<CodeBlock code={code} language={language} />);
	};

	const elements = {
		get code() {
			return screen.getByRole('code');
		},
	};

	describe('renders', () => {
		beforeEach(() => {
			renderComponent({code: "hello world", language: "js"});
		});
	
		it('should render code from code prop to visible DOM', () => {
			expect(elements.code).toHaveTextContent(/hello world/i);
		});
	
		it('should render correct class from language prop', () => {
			expect(elements.code).toHaveClass('language-js');
		});
	});
});