import { render, screen, cleanup } from '@testing-library/react';
import Dialog from '../Dialog';

const mockChildNode = <span data-testid="mock-child-node">Mock Node Fn</span>;

describe('Dialog', () => {
	const renderComponent = ({
		children = mockChildNode,
		useModal = false,
		isOpen = false,
		onClose = () => { },
	}) => render(
		<Dialog
			children={children}
			useModal={useModal}
			isOpen={isOpen}
			onClose={onClose}
		/>
	);

	const elements = {
		get dialog() { return screen.getByTestId('dialog'); },
		get mockChildren() { return screen.getByTestId('mock-child-node'); },
	};

	afterEach(cleanup);

	beforeAll(() => {
		// Fix due to jsdom not yet supporting the html dialog spec.
		HTMLDialogElement.prototype.show = vi.fn(function mock(
			this: HTMLDialogElement
		) {
			this.open = true;
		});

		HTMLDialogElement.prototype.showModal = vi.fn(function mock(
			this: HTMLDialogElement
		) {
			this.open = true;
		});

		HTMLDialogElement.prototype.close = vi.fn(function mock(
			this: HTMLDialogElement
		) {
			this.open = false;
		});

		renderComponent({});
	});

	describe('renders', () => {
		describe('default', () => {
			it('should render dialog element', () => {
				expect(elements.dialog).toBeInTheDocument();
			});

			describe('with dialog closed', () => {
				beforeEach(() => {
					renderComponent({ isOpen: false });
				});

				it('should not render visible children nodes', () => {
					expect(elements.dialog).not.toHaveAttribute('open');
					expect(elements.mockChildren).toBeInTheDocument();
					expect(elements.mockChildren).not.toBeVisible();
				});

				it('should render correct class name', () => {
					expect(elements.dialog).not.toHaveClass('modal');
				});
			});
		});

		describe('with dialog open', () => {
			beforeEach(() => {
				renderComponent({ isOpen: true });
			});

			it('should render visible children nodes', () => {
				expect(elements.dialog).toHaveAttribute('open');
				expect(elements.mockChildren).toBeInTheDocument();
				expect(elements.mockChildren).toBeVisible();
			});
		});

		describe('with useModal', () => {
			beforeEach(() => {
				renderComponent({ useModal: true });
			});

			it('should render correct class name', () => {
				expect(elements.dialog).toHaveClass('modal');
			});
		});
	});
});