import { render, screen } from '@testing-library/react';
import CodeBlock from '../CodeBlock';

test('renders', () => {
	render(<CodeBlock code="hello world" language="js" />);
	expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});