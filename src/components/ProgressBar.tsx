import React, { useCallback, useMemo } from 'react';

type positionOptions = 'top' | 'bottom';

interface ProgressBarProps {
	label?: string;
	labelPosition?: positionOptions;
	max?: number;
	showPercentage?: boolean;
	percentPosition?: positionOptions;
	value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	value,
	max = 100,
	label,
	labelPosition = 'top',
	percentPosition = 'top',
	showPercentage = false,
}) => {
	// Computed values
	const labelPositionTop = useMemo(() => labelPosition === 'top', [labelPosition]);
	const percentPositionTop = useMemo(() => percentPosition === 'top', [percentPosition]);
	const percentToPrint = useMemo(() => Math.min(Math.max((value / max) * 100, 0), 100), [value, max]); // Set percentage between 0 and 100
	// Cached methods
	const renderLabel = useCallback(() => (label ??
		<label className='progress-bar-label' htmlFor='progress-bar'>
			{label}
		</label>
	), [label]);
	const renderPercent = useCallback(() => (showPercentage ?
		<p className='progress-bar-percentage'>{`${percentToPrint.toFixed(0)}%`}</p>
	: null), [percentToPrint]);

	return (
		<div>
			{labelPositionTop && renderLabel()}
			{percentPositionTop && renderPercent()}
			<div>
				<progress
					id='progress-bar'
					value={value}
					max={max}
					className='progress-bar'
				/>
			</div>
			{!labelPositionTop && renderLabel()}
			{!percentPositionTop && renderPercent()}
		</div>
	);
};

export default ProgressBar;