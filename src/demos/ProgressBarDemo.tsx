import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressBarDemo: React.FC = (): React.ReactNode => {
	const [progressValue, setProgressValue] = useState(50);

	return (
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
	)
}

export default ProgressBarDemo