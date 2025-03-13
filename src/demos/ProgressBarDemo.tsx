import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressBarDemo: React.FC = () => {
	const [progressValue, setProgressValue] = useState(50);

	return (
		<article>
			<h2>Progress bars</h2>
			<ProgressBar
				label='Test progress bar'
				percentPosition='bottom'
				showPercentage
				value={progressValue}
				data-testid='progress-demo'
			/>
			<button onClick={() => setProgressValue(progressValue - 1)} data-testid='progress-subtract-demo'>-</button>
			<button onClick={() => setProgressValue(progressValue + 1)} data-testid='progress-add-demo'>+</button>
		</article>
	)
}

export default ProgressBarDemo