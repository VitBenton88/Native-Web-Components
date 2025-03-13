import { useState } from "react";
import Dialog from "../components/Dialog"

const DialogDemo: React.FC = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isModalDialogOpen, setIsModalDialogOpen] = useState(false);

	return (
		<article>
			<h2>Dialogs and modals</h2>
			<div>
				<button onClick={() => setIsDialogOpen(true)} data-testid='open-dialog-demo-btn'>Open Dialog</button>
				<Dialog
					isOpen={isDialogOpen}
					onClose={() => setIsDialogOpen(false)}
					data-testid='dialog-demo'
				>
					<h2>Dialog Content</h2>
					<p>This is the dialog content.</p>
					<button onClick={() => setIsDialogOpen(false)}>Close</button>
				</Dialog>
			</div>

			<div>
				<button onClick={() => setIsModalDialogOpen(true)} data-testid='open-modal-demo-btn'>Open Modal Dialog</button>
				<Dialog
					useModal
					isOpen={isModalDialogOpen}
					onClose={() => setIsModalDialogOpen(false)}
					data-testid='modal-dialog-demo'
				>
					<h2>Modal Dialog Content</h2>
					<p>This is the dialog content.</p>
					<button onClick={() => setIsModalDialogOpen(false)}>Close</button>
				</Dialog>
			</div>
		</article>
	)
}

export default DialogDemo