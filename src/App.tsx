import './App.css'
import ReactSvg from './assets/react.svg'
import TypeScriptSvg from './assets/ts.svg'

import CodeBlockDemo from "./demos/CodeBlockDemo"
import DialogDemo from "./demos/DialogDemo"
import DropdownsDemo from "./demos/DropdownsDemo"
import FileDropDemo from "./demos/FileDropDemo"
import PictureDemo from "./demos/PictureDemo"
import ProgressBarDemo from "./demos/ProgressBarDemo"

function App() {
	return (
		<>
			<header>
				<h1>Native web components!</h1>
				<span>Made with:</span>
				<div className="logos">
					<img src={ReactSvg} alt='React.js Icon' />
					+
					<img src={TypeScriptSvg} alt='TypeScript Icon' />
				</div>
			</header>

			<br />
			<hr />

			<FileDropDemo />

			<br />
			<hr />

			<DropdownsDemo />

			<br />
			<hr />

			<DialogDemo />

			<br />
			<hr />

			<ProgressBarDemo />

			<br />
			<hr />

			<CodeBlockDemo />

			<br />
			<hr />

			<PictureDemo />
		</>
	)
}

export default App
