import './App.css'
import ReactSvg from './assets/react.svg'
import TypeScriptSvg from './assets/ts.svg'
import React, { useMemo } from 'react'

import CodeBlockDemo from "./demos/CodeBlockDemo"
import DatePickerDemo from "./demos/DatePickerDemo"
import DialogDemo from "./demos/DialogDemo"
import DropdownsDemo from "./demos/DropdownsDemo"
import FileDropDemo from "./demos/FileDropDemo"
import PictureDemo from "./demos/PictureDemo"
import ProgressBarDemo from "./demos/ProgressBarDemo"
import RangeDemo from "./demos/RangeDemo"
import MeterDemo from "./demos/MeterDemo"

function App() {
	const demos = useMemo(() =>
		[
			{ id: 'filedrop', component: <FileDropDemo /> },
			{ id: 'picture', component: <PictureDemo /> },
			{ id: 'dialog', component: <DialogDemo /> },
			{ id: 'dropdown', component: <DropdownsDemo /> },
			{ id: 'progressbar', component: <ProgressBarDemo /> },
			{ id: 'range', component: <RangeDemo /> },
			{ id: 'meter', component: <MeterDemo /> },
			{ id: 'datepicker', component: <DatePickerDemo /> },
			{ id: 'codeblock', component: <CodeBlockDemo /> },
		]
		, [])

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

			<main>
				{demos.map(({ id, component }) => (
					<React.Fragment key={id}>
						<br />
						<hr id={id} />
						{component}
					</React.Fragment>
				))}
			</main>
		</>
	)
}

export default App
