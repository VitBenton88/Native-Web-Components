import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DialogDemo from '../DialogDemo';

describe('DialogDemo', () => {
	const renderComponent = () => render(<DialogDemo />);

	const elements = {
		get dialog() { return screen.getByTestId('dialog-demo'); },
		get modalDialog() { return screen.getByTestId('modal-dialog-demo'); },
		get openDialogButton() { return screen.getByTestId('open-dialog-demo-btn'); },
		get openModalButton() { return screen.getByTestId('open-modal-demo-btn'); },
	};

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

		renderComponent();
	});

	describe('renders', () => {
		describe('default', () => {
			it('should render dialog elements with open buttons', () => {
				waitFor(() => {
					const { dialog, modalDialog, openDialogButton, openModalButton } = elements;

					expect(dialog).toBeInTheDocument();
					expect(modalDialog).toBeInTheDocument();
					expect(openDialogButton).toBeInTheDocument();
					expect(openModalButton).toBeInTheDocument();
				});
			});

			it('should render dialog elements with correct attribute values', () => {
				waitFor(() => {
					const { dialog, modalDialog } = elements;

					expect(dialog).toHaveAttribute('isOpen', false);
					expect(dialog).not.toHaveAttribute('useModal');
					expect(modalDialog).toHaveAttribute('isOpen', false);
					expect(modalDialog).toHaveAttribute('useModal', true);
				});
			});
		});
	});

	describe('behavior', () => {
		describe('when dialog demo is opened', () => {
			beforeEach(() => {
				waitFor(() => {
					fireEvent.click(elements.openDialogButton);
				});
			})

			it('should render expanded dialog element', () => {
				waitFor(() => {
					const { dialog, modalDialog } = elements;

					expect(dialog).toHaveAttribute('isOpen', true);
					expect(modalDialog).toHaveAttribute('isOpen', false);
				});
			});
		});

		describe('when modal demo is opened', () => {
			beforeEach(() => {
				waitFor(() => {
					fireEvent.click(elements.openModalButton);
				});
			})

			it('should render expanded modal element', () => {
				waitFor(() => {
					const { dialog, modalDialog } = elements;

					expect(dialog).toHaveAttribute('isOpen', false);
					expect(modalDialog).toHaveAttribute('isOpen', true);
				});
			});
		});
	});
});