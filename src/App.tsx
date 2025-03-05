import { useState } from "react";
import './App.css'
import ReactSvg from './assets/react.svg'
import TypeScriptSvg from './assets/ts.svg'

import Dialog from "./components/Dialog"
import DetailsDropdown from "./components/DetailsDropdown"
import Picture from "./components/Picture"
import { SourceType, MediaQueryTypes } from "./components/Picture"
import ProgressBar from "./components/ProgressBar";
import FileDrop from "./components/FileDrop";
import CodeBlock from "./components/CodeBlock";

function App() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isModalDialogOpen, setIsModalDialogOpen] = useState(false);
	const [progressValue, setProgressValue] = useState(50);

	const fallbackImage = {
		alt: 'Maine lighthouse during the day',
		loadingStrategy: 'lazy' as 'lazy',
		src: './lighthouse-1x.jpg',
	};

	const resolutionSources = [
		{
			srcset: './lighthouse-1x.jpg 1x, ./lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
			type: 'image/jpeg' as SourceType,
		},
	];

	const widthSources = [
		{
			srcset: './lighthouse-mobile-2x.jpg 2x, ./lighthouse-mobile-3x.jpg 3x',
			media: '(max-width: 799px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
		{
			srcset: './lighthouse-1x.jpg 1x, ./lighthouse-2x.jpg 2x, ./lighthouse-3x.jpg 3x',
			media: '(min-width: 800px)' as MediaQueryTypes,
			type: 'image/jpeg' as SourceType,
		},
	];

	const codeString = `
		() => console.log("Hello, world!")
	`;

	return (
		<>
			<header>
				<h1>Native web components!</h1>
				<span>Made with:</span>
				<div className="logos">
					<img src={ReactSvg} alt='React.js' />
					+
					<img src={TypeScriptSvg} alt='TypeScript' />
				</div>
			</header>

			<br />
			<hr />

			<article>
				<h2>Responsive & dynamic images</h2>
				<figure>
					<Picture img={fallbackImage} sources={resolutionSources} />
					<figcaption>An image that is loaded by device resolution 👆</figcaption>
				</figure>

				<figure>
					<Picture img={fallbackImage} sources={widthSources} />
					<figcaption>An image that is loaded by device size & resolution 👆</figcaption>
				</figure>
			</article>


			<br />
			<hr />

			<article>
				<h2>Code blocks</h2>
				<CodeBlock code={codeString} />
			</article>

			<br />
			<hr />

			<article>
				<h2>Dropdowns</h2>
				<DetailsDropdown
					body="Something small enough to escape casual notice."
					title="Dropdown title"
				/>
			</article>

			<br />
			<hr />

			<article>
				<h2>Dialogs and modals</h2>
				<div>
					<button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
					<Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
						<h2>Dialog Content</h2>
						<p>This is the dialog content.</p>
						<button onClick={() => setIsDialogOpen(false)}>Close</button>
					</Dialog>
				</div>

				<div>
					<button onClick={() => setIsModalDialogOpen(true)}>Open Modal Dialog</button>
					<Dialog useModal isOpen={isModalDialogOpen} onClose={() => setIsModalDialogOpen(false)}>
						<h2>Modal Dialog Content</h2>
						<p>This is the dialog content.</p>
						<button onClick={() => setIsModalDialogOpen(false)}>Close</button>
					</Dialog>
				</div>
			</article>

			<br />
			<hr />

			<article>
				<h2>Progress bars</h2>
				<ProgressBar
					label='Test progress bar'
					percentPosition='bottom'
					showPercentage
					value={progressValue}
				/>
				<button onClick={() => setProgressValue(progressValue - 1)}>-</button>
				<button onClick={() => setProgressValue(progressValue + 1)}>+</button>
			</article>

			<br />
			<hr />

			<article>
				<h2>File drag & drop</h2>
				<FileDrop />
			</article>
		</>
	)
}

export default App
